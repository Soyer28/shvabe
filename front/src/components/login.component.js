import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserDataService from "../services/user.service";

// import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            name: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();


        let name = this.state.name;
        let password = this.state.password;


        UserDataService.login(name, password)
            .then(response => {
                if(response.data[0]) {
                    console.log('response', response.data[0]);
                    this.props.history.push("/users");
                    window.location.reload();
                    localStorage.setItem("user", JSON.stringify(response.data[0].id));
                } else {
                    this.setState({
                                        loading: false,
                                        message: 'Такого пользователя нет'
                                    });
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                    message: 'Серверная ошибка'
                });
            })

        // login(name, password) {
        //     return axios
        //         .post(API_URL + "signin", {
        //             name,
        //             password
        //         })
        //         .then(response => {
        //             if (response.data.accessToken) {
        //                 localStorage.setItem("user", JSON.stringify(response.data));
        //             }
        //
        //             return response.data;
        //         });
        // }

        // if (this.checkBtn.context._errors.length === 0) {
        //     AuthService.login(this.state.name, this.state.password).then(
        //         () => {
        //             this.props.history.push("/users");
        //             window.location.reload();
        //         },
        //         error => {
        //             const resMessage =
        //                 (error.response &&
        //                     error.response.data &&
        //                     error.response.data.message) ||
        //                 error.message ||
        //                 error.toString();
        //
        //             this.setState({
        //                 loading: false,
        //                 message: resMessage
        //             });
        //         }
        //     );
        // } else {
        //     this.setState({
        //         loading: false
        //     });
        // }
    }

    render() {
        return (
            <div className="col-md-12" style={{width: '50%', margin: '0 auto'}}>
                <h2>Login Page</h2>
                <div className="card card-container p-4">
                    <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">name</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChangename}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}