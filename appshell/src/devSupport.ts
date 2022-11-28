/* eslint-disable @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unused-expressions,@typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment */

;(window as any).esmsInitOptions = {
	mapOverrides: true,
}

!(window as any).addEventListener(`import-map-overrides:init`, () => {
	const overrideMap = (window as any).importMapOverrides.getOverrideMap()
	const appModuleUrl = overrideMap.imports.app as string
	const isEnabledOverride = !(window as any).importMapOverrides.isDisabled(`app`) && appModuleUrl

	if (isEnabledOverride) {
		const { origin } = new URL(appModuleUrl)

		const viteClientScript = Object.assign(document.createElement(`script`), {
			src: `${origin}/@vite/client`,
			type: `module-shim`,
		})

		document.head.append(viteClientScript)

		const reactHmrScript = Object.assign(document.createElement(`script`), {
			type: `module-shim`,
			innerHTML: `
          import { injectIntoGlobalHook } from '${origin}/@react-refresh'
          injectIntoGlobalHook(window)
          window.$RefreshReg$ = () => {}
          window.$RefreshSig$ = () => (type) => type
          window.__vite_plugin_react_preamble_installed__ = true
        `,
		})

		document.head.append(reactHmrScript)
	}
})
