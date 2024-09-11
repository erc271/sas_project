const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const askQuestion = (query) =>{
    return new Promise((resolve) => rl.question(query, resolve))
};
const Add =(First_name, Last_name)=>{
    console.log(First_name, Last_name);
}
const Remove = (id)=>{
    console.log(`deleteed ID: ${id}`);
}
const Data =async()=>{
    let First_name;
    let Last_name;
    let id = 0
    let choice = await askQuestion("Enter (a , d):")
    if (choice == "a"){
    First_name = await askQuestion('Enter First Name: ');
    Last_name = await askQuestion('Enter Last Name: ');
    Add(First_name, Last_name);
    }
    if (choice =="d"){
        id = await askQuestion('Enter ID: ');
        Remove(id);
    }
    rl.close()
}
Data();