# Back

_Во время перезапуска сервера по дефолту создается новый пользователь_

`user: admin`

`password: password`

## Project setup
```
npm install
```

### Run
```
node server.js
```

# DataBase

install brew
https://brew.sh/

next from the terminal

`brew tap mongodb/brew`

`brew install mongodb-community@4.4`

start mongoDB
`brew services start mongodb-community@4.4`

it's all over the database

# Testing dataBase

need install postman

create collections shvabe

<hr>

post / задать пользователя

address: http://localhost:8080/api/tutorials

add 1 headers `key -> Content-Type`, `value -> application/json`

select nav body -> row

add body `{
              "name": "ivan",
              "password": "nigger"
          }`

<hr>

get / получить пользователей

http://localhost:8080/api/tutorials

add 1 headers `key -> Content-Type`, `value -> application/json`

<hr>

get / получить пользователя для авторизации

auth address http://localhost:8080/api/auth/login?name=admin&password=password

add 1 headers `key -> Content-Type`, `value -> application/json`

## article

express
`https://habr.com/ru/company/ruvds/blog/414079/`

example 
https://bezkoder.com/node-express-mongodb-crud-rest-api/

example 2 
https://bezkoder.com/react-crud-web-api/
