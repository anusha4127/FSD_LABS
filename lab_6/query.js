const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/student") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const data = querystring.parse(body);

            console.log(data);

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(`
                <h2>Student Details</h2>

                Name: ${data.name}<br><br>
                Age: ${data.age}<br><br>
                Course: ${data.course}
            `);
        });
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h2>Page Not Found</h2>");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});