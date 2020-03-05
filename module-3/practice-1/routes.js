handlerRoutes = (request, response) => {

    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html');

    if (url === "/") {
        response.write(htmlWrapper("<form method='post' action='/create-user'><input name='username'><input type='submit' value='GO'></form>"));
        return response.end();
    }

    if (url === "/users") {
        response.write(htmlWrapper("<ul><li>User 1</li><li>User 2</li></ul>"));
        return response.end();
    }

    if (url === "/create-user" && method === "POST") {
        const data = [];

        request.on("data", chunk => {
            data.push(chunk);
        });

        return request.on("end", () => {
            const message = Buffer.concat(data).toString();
            console.log(message);
            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        });
    }

    response.end(htmlWrapper("<h1>You are on wrong page!</h1>"));
};

function htmlWrapper(html) {
    let wrapper = "";
    wrapper += "<html>";
    wrapper += "<body>";
    wrapper += html;
    wrapper += "</body>"
    wrapper += "</html>";
    return wrapper;
}

module.exports = handlerRoutes;
