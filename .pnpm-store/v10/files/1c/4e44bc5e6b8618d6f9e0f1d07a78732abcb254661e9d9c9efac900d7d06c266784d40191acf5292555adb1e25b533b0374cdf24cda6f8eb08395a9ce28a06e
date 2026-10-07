"use strict";

const GatsbyThemeComponentShadowingResolverPlugin = require(`.`);
const {
  store
} = require(`../../redux`);
module.exports = function (pageComponent) {
  const shadowingPlugin = new GatsbyThemeComponentShadowingResolverPlugin({
    extensions: store.getState().program.extensions,
    themes: store.getState().flattenedPlugins.map(aPlugin => {
      return {
        themeDir: aPlugin.pluginFilepath,
        themeName: aPlugin.name
      };
    }),
    projectRoot: store.getState().program.directory
  });
  const [theme, component] = shadowingPlugin.getThemeAndComponent(pageComponent);
  if (theme) {
    const componentPath = shadowingPlugin.resolveComponentPath({
      theme,
      component,
      originalRequestComponent: pageComponent
    });
    if (componentPath) {
      return componentPath;
    }
  }
  return false;
};
//# sourceMappingURL=create-page.js.map