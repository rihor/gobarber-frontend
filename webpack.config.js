const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  // live reload
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },

  module: {
    rules: [
      {
        // expressão regular para achar arquivos javascript
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.css$/,
        /**
         * style-loader carrega os arquivos de css na pagina
         * css-loader permite importações dentro do css
         */
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
