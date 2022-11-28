import CopyPlugin from 'copy-webpack-plugin'
import path from 'path'
import * as process from 'process'
import webpack from 'webpack'

const config: webpack.Configuration = {
	mode: `production`,
	entry: {
		importmapOverride: [`./src/devSupport.ts`, `es-module-shims`, `import-map-overrides`],
		appshell: `./src/index.ts`,
	},
	output: {
		path: path.join(process.cwd(), `./dist`),
		filename: `[name].bundle.js`,
		publicPath: `/`,
	},
	module: {
		rules: [
			{
				test: /\.(js|tsx?)$/,
				exclude: /node_modules/,
				use: { loader: `babel-loader` },
				parser: { system: false },
			},
		],
	},
	resolve: {
		extensions: [`.ts`, `.js`],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					context: `src`,
					from: `*.html`,
					to: path.join(process.cwd(), `./dist`),
				},
			],
		}),
	],
}

// eslint-disable-next-line import/no-default-export
export default config
