const fs = require("fs");

requestHandler = (request, response) => {

    const url = request.url;
    const method = request.method;

    if (url === "/") {
        response.write('<html>');
        response.write('<head><title></title></head>');
        response.write('<body>');
        response.write('<form method="post" action="/message">');
        response.write('<input type="text" name="message">');
        response.write('<button type="submit">Send</button>');
        response.write('</form>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }

    if (url === "/message" && method === "POST") {

        const body = [];

        request.on("data", (chunk) => {
            body.push(chunk);
        });

        return request.on("end", () => {
            const bodyConcated = Buffer.concat(body).toString();
            const message = bodyConcated.split("=")[1];
            fs.writeFile("message.txt", message, err => {
                response.statusCode = 302;
                response.setHeader("Location", "/");
                return response.end();
            });
        });
    }

    response.setHeader('Content-Type', 'text/html');

    // Write a response
    response.write('<html>');
    response.write('<head><title></title></head>');
    response.write('<body><h1>Hello my Node.js Server</h1></body>');
    response.write('</html>');
    response.end();
};

module.exports = requestHandler;
