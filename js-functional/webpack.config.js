const path = require("path");
// import css from "../index.css";

module.exports = {
   entry: "./index.js",
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
   },
};
