import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
/*
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss'

/*
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */

import { configureStore } from './redux/store/configureStore'
import { Root } from './containers/Root'

// Benchmark: Start keeping track of time
export const startTime = new Date().getTime()

const store = configureStore()
const RootApp = () => (
  <MuiThemeProvider>
    <Root store={store} />
  </MuiThemeProvider>
)

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
)
