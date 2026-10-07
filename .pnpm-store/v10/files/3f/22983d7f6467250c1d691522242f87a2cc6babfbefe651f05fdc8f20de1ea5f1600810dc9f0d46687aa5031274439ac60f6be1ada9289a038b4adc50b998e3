/*
Copyright (c) 2015-present, Facebook, Inc.

This source code is licensed under the MIT license found in the
LICENSE file at
https://github.com/facebook/create-react-app/blob/main/LICENSE
*/

/* global Application */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function run(argv) {
  const urlToOpen = argv[0]
  // Allow requested program to be optional, default to Google Chrome
  const programName = argv[1] ?? 'Google Chrome'

  const app = Application(programName)

  if (app.windows.length === 0) {
    app.Window().make()
  }

  // 1: Looking for tab running debugger then,
  //    Reload debugging tab if found, then return
  const found = lookupTabWithUrl(urlToOpen, app)
  if (found) {
    found.targetWindow.activeTabIndex = found.targetTabIndex
    found.targetTab.reload()
    found.targetWindow.index = 1
    app.activate()
    return
  }

  // 2: Looking for Empty tab
  //    In case debugging tab was not found
  //    We try to find an empty tab instead
  const emptyTabFound = lookupTabWithUrl('chrome://newtab/', app)
  if (emptyTabFound) {
    emptyTabFound.targetWindow.activeTabIndex = emptyTabFound.targetTabIndex
    emptyTabFound.targetTab.url = urlToOpen
    app.activate()
    return
  }

  // 3: Create new tab
  //    both debugging and empty tab were not found make a new tab with url
  const firstWindow = app.windows[0]
  firstWindow.tabs.push(app.Tab({ url: urlToOpen }))
  app.activate()
}

/**
 * Lookup tab with given url
 */
function lookupTabWithUrl(lookupUrl, app) {
  const windows = app.windows()
  for (const window of windows) {
    for (const [tabIndex, tab] of window.tabs().entries()) {
      if (tab.url().includes(lookupUrl)) {
        return {
          targetTab: tab,
          targetTabIndex: tabIndex + 1,
          targetWindow: window,
        }
      }
    }
  }
}
