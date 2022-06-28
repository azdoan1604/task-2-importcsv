const Model = require("@longanphuc/orm-mysql").Model
class undefined extends Model {
    constructor(){
        super("undefined")
        this.$primaryKey = ["id"]
		this.id=undefined;
		this.base64_CsvFile=undefined;

    }
}

module.exports = undefined