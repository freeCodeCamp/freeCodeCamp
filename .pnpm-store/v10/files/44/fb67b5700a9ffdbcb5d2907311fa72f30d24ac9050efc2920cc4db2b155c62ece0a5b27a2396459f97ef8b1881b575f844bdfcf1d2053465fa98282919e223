"use strict";

const isEqual = require(`lodash/isEqual`);
const {
  emitter,
  store
} = require(`../../redux`);
const {
  actions
} = require(`../../redux/actions`);
const originalStatusPageByStatus = {};
const originalStatusPageByPath = {};
emitter.on(`CREATE_PAGE`, action => {
  // Copy /404/ to /404.html and /500/ to /500.html. Many static site hosts expect
  // site 404 pages to be named this. In addition, with Rendering Engines there might
  // be runtime errors which would fallback to "/500.html" page.
  // https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/
  const result = /^\/?(404|500)\/?$/.exec(action.payload.path);
  if (result && result.length > 1) {
    const status = result[1];
    const originalPage = originalStatusPageByStatus[status];
    const pageToStore = {
      path: action.payload.path,
      component: action.payload.component,
      context: action.payload.context,
      slices: action.payload.slices,
      status
    };
    if (!originalPage || !isEqual(originalPage, pageToStore)) {
      originalStatusPageByStatus[status] = pageToStore;
      originalStatusPageByPath[action.payload.path] = pageToStore;
      store.dispatch(actions.createPage({
        ...pageToStore,
        path: `/${status}.html`
      }, action.plugin, action));
    }
  }
});
emitter.on(`DELETE_PAGE`, action => {
  const storedPage = originalStatusPageByPath[action.payload.path];
  if (storedPage) {
    store.dispatch(actions.deletePage({
      ...storedPage,
      path: `/${storedPage.status}.html`
    }));
    originalStatusPageByPath[action.payload.path] = null;
    originalStatusPageByStatus[storedPage.status] = null;
  }
});
//# sourceMappingURL=gatsby-node.js.map