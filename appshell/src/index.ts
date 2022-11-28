import { registerApplication, start } from 'single-spa'

registerApplication(
	`app`,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	() => import(/* webpackIgnore: true */ `app`),
	location => location.pathname.startsWith(`/`),
)

start()
