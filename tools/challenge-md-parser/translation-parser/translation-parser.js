const clone = require('lodash/cloneDeep');

exports.translateComments = (text, lang, dict, codeLang) => {
  const knownComments = Object.keys(dict);
  const config = { knownComments, dict, lang };
  switch (codeLang) {
    case 'js':
      return transMultiline(transInline(text, config), config);
    case 'jsx':
      return transJSX(text, config);
    case 'html':
      return transHTML(transCSS(text, config), config);
    default:
      return text;
  }
};

exports.translateCommentsInChallenge = (challenge, lang, dict, codeLang) => {
  const challClone = clone(challenge);

  if (challClone.files[0] && challClone.files[0].contents) {
    challClone.files[0].contents = this.translateComments(
      challenge.files[0].contents,
      lang,
      dict,
      codeLang
    );
  }

  return challClone;
};

exports.mergeChallenges = (engChal, transChal) => {
  if (!transChal.tests || transChal.tests.length !== engChal.tests.length)
    throw Error(
      `Challenges in both languages must have the same number of tests.
    title: ${engChal.title}
    localeTitle: ${transChal.localeTitle}`
    );
  const translatedTests = transChal.tests.map(({ text }, id) => ({
    text,
    testString: engChal.tests[id].testString
  }));
  return {
    ...engChal,
    description: transChal.description,
    instructions: transChal.instructions,
    localeTitle: transChal.localeTitle,
    forumTopicId: transChal.forumTopicId,
    tests: translatedTests
  };
};

// bare urls could be interpreted as comments, so we have to lookbehind for
// http:// or https://
function transInline(text, config) {
  return translateGeneric(
    text,
    config,
    '(^[^\'"`]*?(?<!https?:)//\\s*)',
    '(\\s*$)'
  );
}

function transMultiline(text, config) {
  return translateGeneric(text, config, '(/\\*\\s*)', '(\\s*\\*/)');
}

// CSS has to be handled separately since it is looking for comments inside tags
function transCSS(text, config) {
  const regex = /<style>.*?<\/style>/gms;
  const matches = text.matchAll(regex);

  for (const [match] of matches) {
    text = text.replace(match, transMultiline(match, config));
  }
  return text;
}

function transJSX(text, config) {
  return translateGeneric(text, config, '({[^}]*/\\*\\s*)', '(\\s*\\*/[^{]*})');
}

function transHTML(text, config) {
  return translateGeneric(text, config, '(<!--\\s*)', '(\\s*-->)');
}

function translateGeneric(text, config, regexBefore, regexAfter) {
  const { knownComments, dict, lang } = config;
  const regex = new RegExp(regexBefore + '(.*?)' + regexAfter, 'gms');
  const matches = text.matchAll(regex);

  for (const [match, before, comment, after] of matches) {
    if (knownComments.includes(comment)) {
      text = text.replace(match, `${before}${dict[comment][lang]}${after}`);
    } else {
      console.warn(`${comment} does not appear in the comment dictionary`);
    }
  }

  return text;
}
