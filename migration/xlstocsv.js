const Schema = require('@longanphuc/orm-mysql').Schema
const Table = require("@longanphuc/orm-mysql").Table
const up = async()=>{
    await Schema.CreateTable(()=>{
        let table = new Table()
        table.name("id").type("bigint").primaryIncrement()
        table.name("base64_CsvFile").type("text")
        return table
    },true)
}
const down = async()=>{
    await Schema.DropTable("xlstocsv")
}
module.exports = {
    up: up,
    down: down
}