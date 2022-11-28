import process from 'node:process'
import path from 'path'
import { defineConfig } from 'vite'
import { swcReactRefresh } from 'vite-plugin-swc-react-refresh'

const rootPath = process.cwd()

// eslint-disable-next-line import/no-default-export
export default defineConfig(() => ({
	root: path.join(rootPath, `./src`),
	plugins: [swcReactRefresh()],
	esbuild: { jsx: `automatic` },
	build: {
		emptyOutDir: false,
		rollupOptions: {
			input: path.join(rootPath, `./src/singleSpa.tsx`),
			preserveEntrySignatures: `strict`,
			output: {
				dir: path.join(rootPath, `./dist`),
				entryFileNames: `singleSpa.js`,
				format: `module`,
			},
		},
	},
}))
