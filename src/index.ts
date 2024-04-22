import { IncomingMessage, Server, ServerResponse } from "node:http";
import app from "./app";

const port: number|string = process.env.PORT || 3000;
const mode: String = process.env.ENV || "DEBUG";

const server : Server<typeof IncomingMessage, typeof ServerResponse> = app.listen(port, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
       port,
       mode
    );
    console.log("  Press CTRL-C to stop\n");
});


process.on('uncaughtException', error => {
    console.log(error);
});
  
process.on('unhandledRejection', (reason, p) => {
    console.log(reason);
});
  
export default server;