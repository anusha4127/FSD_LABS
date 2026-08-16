function outer(){
    let count=0;
    function inner(){
        count++;
        console.log("Count:"+count);
    }
    return inner;
}
const counter=outer();
counter();
counter();
counter();
counter();