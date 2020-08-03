module.exports = mongoose => {
    // схема данных
    let schema = mongoose.Schema(
    {
        name: String,
        password: String,
    },
        { timestamps: true }
    );

    // время создания и апдейта

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const users = mongoose.model("users", schema);

    users.create({ name: 'admin', password: 'password' }, function (err, awesome_instance) {
        if (err) return handleError(err);
        // saved!
    });

    return users;
};
