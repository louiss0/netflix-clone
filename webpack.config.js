const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const rules = [
	{
		test: /\.(svg|png|jpg|jpeg|gif)$/,
		type: "asset/resource",
		generator: {
			filename: "assets/[hash][ext][query]"
		}
	},
	{
		test: /\.vue$/,
		loader: "vue-loader"
	},
	{
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: "babel-loader",
				options: {
					presets: [ "@babel/preset-env", "@babel/preset-typescript" ]
				}
			},
			{
				loader: "ts-loader",
				options: { appendTsSuffixTo: [ /\.vue$/ ] }
			}
		],
		exclude: /node_modules/
	},
	{
		test: /(\.s?css)$/,
		use: [
			"vue-style-loader",
			{
				loader: "css-loader",
				options: { importLoaders: 1 }
			},
			"postcss-loader"
		]
	}
];

const plugins = [
	new HtmlWebpackPlugin({
		template: "./src/template.html",
		scriptLoading: "defer"
	}),
	new VueLoaderPlugin()
];

module.exports = {
	entry: {
		main: "./src/main.ts"
	},
	plugins,
	resolve: {
		// Add `.ts` and `.js` as a resolvable extension.
		extensions: [ "*", ".js", ".vue", ".ts" ]
	},
	module: {
		rules
	},
	optimization: {
		splitChunks: {
			chunks: "async",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all"
				}
			}
		},
		runtimeChunk: "single"
	}
};
