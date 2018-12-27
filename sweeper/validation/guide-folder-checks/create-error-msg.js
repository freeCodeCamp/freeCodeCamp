const dedent = require('dedent');

const createErrorMsg = (errors, user) => {
  let errorMsgHeader = dedent`
    Hi @${user},

    Thanks for this pull request (PR).

    Unfortunately, these changes have failed some of our recommended guidelines. Please correct the issue(s) listed below, so we can consider merging your content.

    | Issue | Description | File Path |
    | :---: | --- | --- |
  `;

  let errorMsgTable = errors.reduce((msgStr, { msg, fullPath }, idx) => {
    return (msgStr +=
      '\n' +
      dedent`
      | ${idx + 1} | ${msg} | ${fullPath} |
    `);
  }, '');

  let errorMsgFooter = dedent`
    P.S: I am just friendly bot. Review our [Guidelines for Contributing](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/master/CONTRIBUTING.md) and reach out to the [Contributors Chat room](https://gitter.im/FreeCodeCamp/Contributors) for more help.
  `;

  return errorMsgHeader + errorMsgTable + '\n\n' + errorMsgFooter;
};

module.exports = { createErrorMsg };
