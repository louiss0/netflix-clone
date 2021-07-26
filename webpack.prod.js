const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const plugins = [
	new MiniCssExtractPlugin({
		filename: "[name].css",
		chunkFilename: "[id].css"
	})
];

module.exports = merge(config, {
	mode: "production",
	devtool: "source-map",
	target: "browserslist",
	plugins,
	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "public"),
		clean: true
	},
	optimization: {
		minimize: true,
		minimizer: [ new TerserPlugin(), new CssMinimizerPlugin() ]
	}
});
