const fs=require("fs");
const reader=fs.createReadStream("largefile.txt");
const writer=fs.createWriteStream("copy.txt");
reader.pipe(writer);
writer.on("finish",()=>{
    console.log("Large file copied successfully.");
});
reader.on("error",(err)=>{
    console.log("Error while reading:",err.message);
});
writer.on("error",(err)=>{
    console.log("Error while writing:",err.message);
});
