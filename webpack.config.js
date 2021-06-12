const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	// watch: true,
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.m?js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		],
	},
};
