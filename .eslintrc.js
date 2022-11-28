require(`@rushstack/eslint-patch/modern-module-resolution`)

module.exports = {
	extends: [`@dodopizza/eslint-config`],
	parserOptions: {
		project: [`app/tsconfig.json`, `appshell/tsconfig.json`],
		sourceType: `module`,
	},
	settings: {
		react: {
			version: `18.0.0`,
		},
	},
	rules: {
		'react/react-in-jsx-scope': [`off`],
	},
	overrides: [
		{
			files: [`*.json`],
			parserOptions: {
				project: false,
			},
		},
	],
}
