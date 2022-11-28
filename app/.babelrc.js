module.exports = {
	presets: [
		[`@babel/preset-env`, { useBuiltIns: `usage`, corejs: { version: `3` } }],
		`@babel/preset-typescript`,
		[
			`@babel/preset-react`,
			{
				runtime: `automatic`,
			},
		],
	],
	env: {
		development: {
			plugins: [`react-refresh/babel`],
		},
	},
}
