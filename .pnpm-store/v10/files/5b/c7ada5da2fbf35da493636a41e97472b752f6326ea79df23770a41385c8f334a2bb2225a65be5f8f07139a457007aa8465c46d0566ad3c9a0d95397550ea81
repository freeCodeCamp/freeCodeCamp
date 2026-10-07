"use strict";

exports.__esModule = true;
exports.onRenderBody = void 0;
var _reactHelmet = require("react-helmet");
var onRenderBody = function onRenderBody(_ref) {
  var _titleComponent$, _titleComponent$$prop;
  var setHeadComponents = _ref.setHeadComponents,
    setHtmlAttributes = _ref.setHtmlAttributes,
    setBodyAttributes = _ref.setBodyAttributes;
  var helmet = _reactHelmet.Helmet.renderStatic();
  // These action functions were added partway through the Gatsby 1.x cycle.
  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }
  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }
  var components = [helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent(), helmet.base.toComponent()];
  var titleComponent = helmet.title.toComponent();
  setHeadComponents(titleComponent !== null && titleComponent !== void 0 && (_titleComponent$ = titleComponent[0]) !== null && _titleComponent$ !== void 0 && (_titleComponent$$prop = _titleComponent$.props) !== null && _titleComponent$$prop !== void 0 && _titleComponent$$prop.children ? [titleComponent].concat(components) : components);
};
exports.onRenderBody = onRenderBody;