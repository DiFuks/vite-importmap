import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import process from 'node:process'
import path from 'path'
import { Configuration, WebpackPluginInstance } from 'webpack'

import 'webpack-dev-server'

const rootPath = process.cwd()
const isDevelopment = process.env.NODE_ENV === `development`

const plugins: WebpackPluginInstance[] = []

if (isDevelopment) {
	plugins.push(new ReactRefreshWebpackPlugin())
}

const config: Configuration = {
	entry: { singleSpa: path.join(rootPath, `./src/singleSpa.tsx`) },
	output: {
		path: path.resolve(rootPath, `./dist`),
		filename: `[name].js`,
		library: {
			name: `[name]`,
			type: `this`,
		},
		publicPath: `auto`,
	},
	target: `web`,
	mode: isDevelopment ? `development` : `production`,
	resolve: {
		extensions: [`.ts`, `.tsx`, `.js`],
	},
	plugins,
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
		port: 3001,
		allowedHosts: `all`,
		hot: true,
		host: `localhost`,
		historyApiFallback: false,
		headers: {
			'Access-Control-Allow-Origin': `*`,
			'Access-Control-Allow-Methods': `GET, POST, PUT, DELETE, PATCH, OPTIONS`,
			'Access-Control-Allow-Headers': `X-Requested-With, content-type, Authorization`,
		},
	},
}

// eslint-disable-next-line import/no-default-export
export default config
