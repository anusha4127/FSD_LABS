const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(`
            <html>
            <body>
                <h2>Student Form</h2>
                <form action="/student" method="GET">
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
    else if (req.url.startsWith("/student")) {
        const url = require("url");
        const data = url.parse(req.url, true);

        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(`
            <h2>Student Details</h2>
            Name: ${data.query.name}<br><br>
            Age: ${data.query.age}<br><br>
            Course: ${data.query.course}
        `);
    }
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