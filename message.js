const BaseModel = require("./base_model");
class Message extends BaseModel {
    constructor(sen, rec, msg) {
        super();
        this.sender = sen;
        this.receiver = rec;
        this.message = msg;
    }
}

module.exports = Message;