function task1(callback){
    console.log("Task1 completed");
    callback();
}
function task2(callback){
    console.log("Task2 completed");
    callback();
}
function task3(callback){
    console.log("Task3 completed");
}
task1(()=>{
    task2(()=>{
        task3();
    });
})