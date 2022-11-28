import react from '@vitejs/plugin-react'
import process from 'node:process'
import path from 'path'
import { defineConfig } from 'vite'

const rootPath = process.cwd()

// eslint-disable-next-line import/no-default-export
export default defineConfig(() => ({
	root: path.join(rootPath, `./src`),
	plugins: [react()],
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
