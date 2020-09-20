/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
 template: path.join(__dirname, "/src/index.html"),
 filename: "./index.html"
});
module.exports = {
 entry: path.join(__dirname, "/src/index.js"),
 module: {
   rules: [{
     test: /\.(js|jsx)$/, // jsx/js文件的正则
   use: {
	 loader: 'babel-loader', //loader 是babel
	 options: {
		 babelrc: false,
		 presets: [
			require.resolve('@babel/preset-react'),
			[require.resolve('@babel/preset-env'), {modules: false}]
		 ],
		 cacheDirectory: true
	 }
   },
   exclude: /node_modules/ 
 },{
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
 }]
},
 plugins: [htmlWebpackPlugin],
 resolve: {
   extensions: [".js", ".jsx"]
 },
 devServer: {
   port: 3000
}};