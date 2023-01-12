const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connectDb } = require("./db");
class App {
   constructor(port) {
      this.expressApp = express();
      this.port = port;

      this.expressApp.use(
         bodyParser.urlencoded({
            extended: true,
         })
      );
      this.expressApp.use(bodyParser.json());
      this.expressApp.use(cookieParser());

      // this.connectDb();
      this.setRoutes();
      this.startServer();
   }

   connectDb() {
      this.expressApp.use(connectDb);
   }

   setRoutes() {
      this.expressApp.use("/", routes);
   }

   startServer() {
      const portNumber = this.port;
      this.expressApp.listen(this.port, function () {
         console.log(`Server running on port: ${portNumber}`);
      });
   }
}

new App(8000);
