const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    // Display form
    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
            <body>

                <h2>Student Form</h2>

                <form action="/student" method="POST">

                    Name:
                    <input type="text" name="name">
                    <br><br>

                    Age:
                    <input type="text" name="age">
                    <br><br>

                    Course:
                    <input type="text" name="course">
                    <br><br>

                    <input type="submit" value="Submit">

                </form>

            </body>
            </html>
        `);
    }

    // Handle POST request
    else if (req.url === "/student" && req.method === "POST") {

        let body = "";

        // Receive data
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        // Process data after receiving it
        req.on("end", () => {

            const data = querystring.parse(body);

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            // Dynamic response
            res.end(`
                <html>
                <body>

                    <h2>Student Details</h2>

                    <p>Name: ${data.name}</p>
                    <p>Age: ${data.age}</p>
                    <p>Course: ${data.course}</p>

                </body>
                </html>
            `);
        });
    }

    // Invalid URL
    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h2>404 - Page Not Found</h2>");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});