var Query = [
    require("./xlstocsv")
]
const run = async() =>{
    for(let i=Query.length-1; i>=0; i--){
        await Query[i].down()        
    }
    for(let i=0;i<Query.length;i++){
        await Query[i].up()
    }
    process.exit()
}
run()