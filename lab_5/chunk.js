const fs = require("fs");

// Create a readable stream
const readableStream = fs.createReadStream("input.txt", {
  encoding: "utf8"
});

// Create a writable stream
const writableStream = fs.createWriteStream("output.txt");

// Read data chunk by chunk
readableStream.on("data", (chunk) => {
  console.log("Reading chunk:");
  console.log(chunk);

  // Write the chunk to output.txt
  writableStream.write(chunk);
});

// When reading is complete
readableStream.on("end", () => {
  console.log("Finished reading input.txt");

  // Close the writable stream
  writableStream.end();
});

// When writing is complete
writableStream.on("finish", () => {
  console.log("Finished writing to output.txt");
});

// Handle errors
readableStream.on("error", (error) => {
  console.error("Error reading file:", error);
});

writableStream.on("error", (error) => {
  console.error("Error writing file:", error);
});