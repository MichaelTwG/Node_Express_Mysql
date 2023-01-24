#!/usr/bin/node
const { v4: uuidv4 } = require("uuid");
const BaseModel = require("./base_model")
class User extends BaseModel {
    constructor (name) {
        super();
        this.name = name;
        this.id = uuidv4();
    }
}

module.exports = User;