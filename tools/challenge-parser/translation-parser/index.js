const { isEmpty, cloneDeep } = require('lodash');

exports.translateComments = (text, lang, dict, codeLang) => {
  const knownComments = Object.keys(dict);
  const config = { knownComments, dict, lang };
  switch (codeLang) {
    case 'js':
    case 'jsx':
      return transMultiline(transInline(text, config), config);
    case 'html':
      return transScript(transHTML(transCSS(text, config), config), config);
    default:
      return text;
  }
};

exports.translateCommentsInChallenge = (challenge, lang, dict) => {
  const challClone = cloneDeep(challenge);
  if (!challClone.files) {
    console.warn(`Challenge ${challClone.title} has no comments to translate`);
  } else {
    Object.keys(challClone.files).forEach(key => {
      if (challClone.files[key].contents) {
        challClone.files[key].contents = this.translateComments(
          challenge.files[key].contents,
          lang,
          dict,
          challClone.files[key].ext
        );
      }
    });
  }
  return challClone;
};

exports.mergeChallenges = (engChal, transChal) => {
  const hasTests =
    (engChal.tests && transChal.tests) ||
    (engChal.question && transChal.question);
  const challenge = {
    ...engChal,
    description: transChal.description,
    instructions: transChal.instructions,
    originalTitle: engChal.title,
    // TODO: throw in production?
    title: isEmpty(transChal.title) ? engChal.title : transChal.title,
    forumTopicId: transChal.forumTopicId
  };
  if (!hasTests)
    throw Error(
      `Both challenges must have tests or questions.
      title: ${engChal.title}
      translated title: ${transChal.title}`
    );
  // TODO: this should break the build when we go to production, but
  // not for testing.
  if (transChal.tests && transChal.tests.length !== engChal.tests.length) {
    console.error(
      `Challenges in both languages must have the same number of tests.
    title: ${engChal.title}
    translated title: ${transChal.title}`
    );
    return challenge;
  }

  // throw Error(
  //   `Challenges in both languages must have the same number of tests.
  // title: ${engChal.title}
  // translated title: ${transChal.title}`
  // );

  if (transChal.tests) {
    const translatedTests =
      engChal.challengeType === 7
        ? transChal.tests.map(({ title }, i) => ({
            title,
            id: engChal.tests[i].id
          }))
        : transChal.tests.map(({ text }, i) => ({
            text,
            testString: engChal.tests[i].testString
          }));
    challenge.tests = translatedTests;
  } else {
    challenge.question = transChal.question;
  }

  // certificates do not have forumTopicIds
  if (challenge.challengeType === 7) delete challenge.forumTopicId;
  return challenge;
};

// bare urls could be interpreted as comments, so we have to lookbehind for
// http:// or https://
function transInline(text, config) {
  return translateGeneric(text, config, '((?<!https?:)//\\s*)', '(\\s*$)');
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

function transScript(text, config) {
  const regex = /<script>.*?<\/script>/gms;
  const matches = text.matchAll(regex);

  for (const [match] of matches) {
    text = text.replace(
      match,
      transMultiline(transInline(match, config), config)
    );
  }
  return text;
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
    } else if (comment.trim()) {
      throw `${comment} does not appear in the comment dictionary`;
    }
  }

  return text;
}
