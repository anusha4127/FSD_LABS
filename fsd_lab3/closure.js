function outer(){
    let msg="Welcome to Node.js";
    function inner(){
        console.log(msg);
    }
    return inner;
}
const callback=outer();
callback();