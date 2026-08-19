const fs=require("fs");
const source="largefile.txt";
const dest="copy.txt";
const reader=fs.createReadStream(source);
const writer=fs.createWriteStream(dest);
let totalB=0;
reader.on("data",(chunk)=>{
    totalB+=chunk.length;
    console.log(`Processed ${totalB} bytes.`);
});
reader.pipe(writer);
writer.on("finish",()=>{
    console.log("\nFile copied sucessfully");
    console.log(`Total bytes processed:${totalB}`);
});
reader.on("error",(err)=>{
    console.log("Read error:",err.message);
})
writer.on("error",(err)=>{
    console.log("Write error:",err.message);
});