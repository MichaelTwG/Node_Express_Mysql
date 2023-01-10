const BaseModel = require('./base_model');
const { v4: uuidv4 } = require('uuid');

class User extends BaseModel{
    constructor(uName, email, pass) {
        super(); // heredar el constructor

        this.id = uuidv4(); // crea un identificador para el user
        this.userName = uName;
        this.email = email;
        this.password = pass;
    }
}

module.exports = User;