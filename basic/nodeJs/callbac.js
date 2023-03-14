function add(a,b,callback){
    console.log(`the sum of ${a} and ${b} is ${a+b}`);
    callback();
}

function message(){
    console.log('Addition done!');
}

add(5,6,message);