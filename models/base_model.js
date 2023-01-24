#!/usr/bin/node
class BaseModel {
    constructor () {
        this.createdAt = new Date().toISOString().slice(0, 19);;
    }
}

module.exports = BaseModel;