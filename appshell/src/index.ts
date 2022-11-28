import { registerApplication, start } from 'single-spa'

import 'import-map-overrides'

registerApplication(
	`app`,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	() => import(/* webpackIgnore: true */ `app`),
	location => location.pathname.startsWith(`/`),
)

start()
