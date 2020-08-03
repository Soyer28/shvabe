const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// Создание схемы MongoDB
db.users = require("./users.model.js")(mongoose);


// лист всех таблиц и удаление таблицы
mongoose.connection.on('open', function (ref) {
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });

    mongoose.connection.db.dropCollection('users', function(err, result) {
        console.log('delete')
    });
})

module.exports = db;
