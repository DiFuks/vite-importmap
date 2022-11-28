import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import process from 'node:process'
import path from 'path'
import { Configuration } from 'webpack'

import 'webpack-dev-server'

const rootPath = process.cwd()

const config: Configuration = {
	entry: { app: path.join(rootPath, `./src/index.tsx`) },
	output: {
		path: path.resolve(rootPath, `./dist`),
		filename: `[name].js`,
		publicPath: `/`,
	},
	mode: `development`,
	resolve: {
		extensions: [`.ts`, `.tsx`, `.js`],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(rootPath, `./src/index.html`),
		}),
		new ReactRefreshWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.tsx?/,
				exclude: /node_modules/,
				use: [{ loader: `babel-loader` }],
			},
		],
	},
	devServer: {
		port: 3000,
		hot: true,
	},
}

// eslint-disable-next-line import/no-default-export
export default config
