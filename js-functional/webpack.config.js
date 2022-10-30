const path = require("path");

module.exports = {
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
   mode: "development",
   entry: "./index.js",
   devtool: "inline-source-map",
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
   },
   devServer: {
      static: "./dist",
   },
};
