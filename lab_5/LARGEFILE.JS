const fs = require("fs");
const sourceFile = "large-file.txt";
const destinationFile = "copy-large-file.txt";
const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destinationFile);
readStream.pipe(writeStream);
writeStream.on("finish", () => {
    console.log("File copied successfully!");
});
readStream.on("error", (err) => {
    console.error("Error reading file:", err.message);
});
writeStream.on("error", (err) => {
    console.error("Error writing file:", err.message);
});