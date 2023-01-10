// clase base de las que heredan el resto de las clases

class BaseModel {
    constructor() {
        this.created_at = new Date(); // esto almacena un objeto date con la fecha actual
    }
}

module.exports = BaseModel; // exportar la clase para poder utilizarla en otros archivos