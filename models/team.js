const mongoose = require("mongoose");

const Schema = mongoose.Schema

const driverSchema = new Schema({
    name: String,
    age: Number,
    homeCountry: String
}, {
    timestamps: true
})

const teamSchema = new Schema({
    name: String,
    location: String,
    drivers: [driverSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Team', teamSchema)
