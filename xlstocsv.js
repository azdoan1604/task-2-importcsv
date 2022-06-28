function xlstocsv(base64){
    const XLSX = require('xlsx');
    const fs = require('fs')    
    const workBook2 = new Buffer(base64,"base64")
    fs.writeFileSync("./lala.xlsx",workBook2)
    const workBook = XLSX.readFile("./lala.xlsx")
    XLSX.writeFile(workBook, "./csv.csv", { bookType: "csv" });        
    let csv = fs.readFileSync("./csv.csv")    
    fs.writeFileSync("./cvs2.csv",csv)
    fs.unlinkSync("./lala.xlsx")
}

module.exports = xlstocsv