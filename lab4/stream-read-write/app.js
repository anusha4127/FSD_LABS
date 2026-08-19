const fs=require("fs");
const reader=fs.createReadStream("./input.txt","utf8");
const writer=fs.createWriteStream("output.txt");
reader.on("data",(chunk)=>{
    console.log("Received a chunk of data");
    writer.write(chunk);
});
reader.on("end",()=>{
    writer.end();
    console.log("Reading Completed");
    console.log("data written successfully to output.txt");
});
reader.on("error",(err)=>{
    console.log("Error while reading:",err.message);
});
writer.on("error",(err)=>{
    console.log("Error while writing:",err.message);
});
