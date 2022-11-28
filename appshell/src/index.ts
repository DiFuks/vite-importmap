import { LifeCycles, registerApplication, start } from 'single-spa'

import 'systemjs'
import 'import-map-overrides'

registerApplication(
	`app`,
	() => System.import<LifeCycles>(`app`),
	location => location.pathname.startsWith(`/`),
)

start()
