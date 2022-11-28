import React from 'react'
import ReactDOMClient from 'react-dom/client'
import singleSpaReact from 'single-spa-react'

import { App } from './App'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const { bootstrap, mount, unmount } = singleSpaReact({
	React,
	ReactDOMClient,
	rootComponent: App,
	errorBoundary: () => <div>Ошибка</div>,
})
