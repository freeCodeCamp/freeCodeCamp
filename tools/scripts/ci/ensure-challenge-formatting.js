const readdirp = require('readdirp-walk');
const { has, isEmpty, isNumber } = require('lodash');
const ora = require('ora');

const { parseMarkdown } = require('../../challenge-md-parser');
const { challengeRoot, checkFrontmatter } = require('./md-testing-utils');

const scrimbaUrlRE = /^https:\/\/scrimba\.com\//;
const requiredProps = ['title', 'id', 'challengeType'];

const spinner = ora('Checking challenge markdown formatting').start();

readdirp({ root: challengeRoot, directoryFilter: '!_meta' })
  .on('data', file =>
    Promise.all([
      isChallengeParseable(file),
      checkFrontmatter(file, {
        validator: challengeFrontmatterValidator(file)
      })
    ]).catch(err => {
      console.info(`
  the following error occured when testing

    ${file.fullPath}

    `);
      console.error(err);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    })
  )
  .on('end', () => spinner.stop());

const challengeFrontmatterValidator = file => frontmatter => {
  const { fullPath } = file;

  const hasRequiredProperties = requiredProps
    .map(
      prop =>
        has(frontmatter, prop) &&
        (!isEmpty(frontmatter[prop]) || isNumber(frontmatter[prop]))
    )
    .every(bool => bool);

  if (!hasRequiredProperties) {
    console.log(`${fullPath} is missing required frontmatter

    ${JSON.stringify(frontmatter, null, 2)}

    Required properties are: ${JSON.stringify(requiredProps, null, 2)}

    `);
  }

  const { videoUrl } = frontmatter;
  let validVideoUrl = false;
  if (!isEmpty(videoUrl) && !scrimbaUrlRE.test(videoUrl)) {
    validVideoUrl = true;
    console.log(`
        ${fullPath} contains an invalid videoUrl
      `);
  }

  const { forumTopicId } = frontmatter;
  let validForumTopicId = false;
  if (!isEmpty(forumTopicId) && !isNumber(forumTopicId)) {
    validForumTopicId = true;
    console.log(`
      ${fullPath} contains an invalid forumTopicId
    `);
  }

  return hasRequiredProperties && validVideoUrl && validForumTopicId;
};

function isChallengeParseable(file) {
  const { stat, fullPath } = file;
  if (!stat.isFile() || /_meta/.test(fullPath)) {
    return Promise.resolve(true);
  }
  return parseMarkdown(fullPath);
}
