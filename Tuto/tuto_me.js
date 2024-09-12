const fs = require('fs');

const array = ["ayoub", "El Bakali", "Tanger", 25 ] 

const Data =JSON.stringify(array);

fs.writeFile("tuto_2.json",  Data, (err)=>{
    if (err){
        console.log(err);
    }
})

fs.readFile("tuto.json","utf-8", (Data, err)=>{
    if (err){
        console.log(err);
    }else{
        const output = JSON.parse(Data)
        console.log(output);;
    }
})