const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

const rules = [
	{
		test: /\.pug$/,
		oneOf: [
			// this applies to pug imports inside JavaScript
			{
				exclude: /\.vue$/,
				use: [ "raw-loader", "pug-plain-loader" ]
			},
			// this applies to <template lang="pug"> in Vue components
			{
				use: [ "vue-pug-loader" ]
			}
		]
	}
];

const plugins = [
	new ESLintWebpackPlugin({
		outputReport: true,
		failOnWarning: true,
		extensions: [ ".js", ".vue", ".ts" ]
	})
];

module.exports = merge(config, {
	mode: "development",
	devtool: "eval-source-map",
	plugins,
	target: "web",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	module: {
		rules
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		compress: true,
		watchContentBase: true,
		hot: true,
		open: true,
		overlay: true,
		host: "0.0.0.0",
		// to accept connections from outside container
		watchOptions: {
			aggregateTimeout: 500, // delay before reloading
			poll: 1000, // enable polling since fsevents are not supported in docker
			ignored: "**/node_modules" // Ignore node_modules
		}
	}
});
