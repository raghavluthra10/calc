const express = require("express");

class App {
   constructor(port) {
      this.expressApp = express();
      this.port = port;
      this.setRoutes();
      this.startServer();
   }

   setRoutes() {
      this.expressApp.get("/", function (req, res) {
         res.send("hello world");
      });
   }

   startServer() {
      const portNumber = this.port;
      this.expressApp.listen(this.port, function () {
         console.log(`Server running on port: ${portNumber}`);
      });
   }
}

new App(8000);
