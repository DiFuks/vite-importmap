import { registerApplication, start } from 'single-spa'

registerApplication(
	`app`,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	() => import(/* webpackIgnore: true */ `http://localhost:5173/singleSpa.tsx`),
	location => location.pathname.startsWith(`/`),
)

start()
