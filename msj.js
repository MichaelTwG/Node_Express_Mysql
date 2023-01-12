#!/usr/bin/node
const BaseModel = require("./base_model");

class Msg extends BaseModel {
    constructor(sen, rec, txt) {
        this.sen = sen;
        this.rec = rec;
        this.txt = txt;
    }
}

module.exports = Msg;