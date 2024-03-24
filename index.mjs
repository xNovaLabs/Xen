import http from 'node:http';
import { createBareServer } from '@tomphttp/bare-server-node';
import express from 'express';
import { hostname } from "node:os";

const httpServer = http.createServer();

const app = express();

app.use(express.static("src"));

const bareServer = createBareServer('/y/');



httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

httpServer.on('upgrade', (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	const address = httpServer.address();
    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
      `\thttp://${
        address.family === "IPv6" ? `[${address.address}]` : address.address
      }:${address.port}`
    );
});



httpServer.listen({
	port: 8080,
});