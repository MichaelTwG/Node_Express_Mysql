#!/usr/bin/node
class BaseModel {
    constructor () {
        this.createdAt = new Date();
    }

    get createdAt () {
        return this.createdAt.toISOString().slice(0, 19);
    }
}

module.exports = BaseModel;