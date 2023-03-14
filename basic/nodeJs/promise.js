

let message = true;

let promise = new Promise((resolve, reject)=>{
    if(message){
        resolve([
            {username:"asif",email:"asifs.cse@gmail.com"},
            {username:"riya",email:"riyarahman7@gmail.com"}
        ]);
    }else{
        reject("user invalid");
    }
})

promise.then((obj)=>{
    console.log(obj);
})

promise.catch((error)=>{
    console.log(error);
})