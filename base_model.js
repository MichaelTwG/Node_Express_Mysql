// clase base de las que heredan el resto de las clases

class BaseModel {
    constructor() {
        this._created_at = new Date(); // esto almacena un objeto date con la fecha actual
    }

    get created_at() {
        return this._created_at.toISOString().slice(0, 19);
    }
}

module.exports = BaseModel; // exportar la clase para poder utilizarla en otros archivos