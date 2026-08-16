function sayHello()
{
    console.log("anusha...");
}
let id = setInterval(sayHello, 2000);
setTimeout(() => {
    clearInterval(id)}, 7000);