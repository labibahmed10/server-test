const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const port = 9000;

server.use(jsonServer.defaults());
server.use(router);

server.listen(port);
