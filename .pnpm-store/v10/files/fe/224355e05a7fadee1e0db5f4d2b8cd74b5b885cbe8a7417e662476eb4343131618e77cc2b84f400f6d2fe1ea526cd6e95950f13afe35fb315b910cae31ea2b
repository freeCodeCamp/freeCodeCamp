"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.printInstructions = printInstructions;
var _chalk = _interopRequireDefault(require("chalk"));
function printInstructions(appName, urls) {
  console.log();
  console.log(`You can now view ${_chalk.default.bold(appName)} in the browser.`);
  console.log();
  if (urls.lanUrlForTerminal) {
    console.log(`  ${_chalk.default.bold(`Local:`)}            ${urls.localUrlForTerminal}`);
    console.log(`  ${_chalk.default.bold(`On Your Network:`)}  ${urls.lanUrlForTerminal}`);
  } else {
    console.log(`  ${urls.localUrlForTerminal}`);
  }
  console.log();
  console.log(`View GraphiQL, an in-browser IDE, to explore your site's data and schema`);
  console.log();
  if (urls.lanUrlForTerminal) {
    console.log(`  ${_chalk.default.bold(`Local:`)}            ${urls.localUrlForTerminal}___graphql`);
    console.log(`  ${_chalk.default.bold(`On Your Network:`)}  ${urls.lanUrlForTerminal}___graphql`);
  } else {
    console.log(`  ${urls.localUrlForTerminal}___graphql`);
  }
  if (process.env.GATSBY_EXPERIMENTAL_ENABLE_ADMIN) {
    console.log();
    console.log(`View Admin, an in-browser app to manage your site's configuration`);
    console.log();
    if (urls.lanUrlForTerminal) {
      console.log(`  ${_chalk.default.bold(`Local:`)}            ${urls.localUrlForTerminal}___admin`);
      console.log(`  ${_chalk.default.bold(`On Your Network:`)}  ${urls.lanUrlForTerminal}___admin`);
    } else {
      console.log(`  ${urls.localUrlForTerminal}___admin`);
    }
  }
  console.log();
  console.log(`Note that the development build is not optimized.`);
  console.log(`To create a production build, use ` + `${_chalk.default.cyan(`gatsby build`)}`);
  console.log();
}
//# sourceMappingURL=print-instructions.js.map