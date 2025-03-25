const { cloneDeep } = require('lodash');

exports.translateComments = (text, lang, dict, codeLang) => {
  const knownComments = Object.keys(dict);
  const config = { knownComments, dict, lang };
  const input = { text };
  switch (codeLang) {
    case 'js':
    case 'jsx':
      return transMultiline(transInline(input, config), config);
    case 'html':
      return transScript(transHTML(transCSS(input, config), config), config);
    default:
      return input;
  }
};

exports.translateCommentsInChallenge = (challenge, lang, dict) => {
  const challClone = cloneDeep(challenge);
  if (challClone?.challengeFiles) {
    challClone.challengeFiles.forEach(challengeFile => {
      if (challengeFile.contents) {
        let { text } = this.translateComments(
          challengeFile.contents,
          lang,
          dict,
          challengeFile.ext
        );
        challengeFile.contents = text;
      }
    });
  }
  return challClone;
};

// bare urls could be interpreted as comments, so we have to lookbehind for
// http:// or https://
function transInline(input, config) {
  return translateGeneric(input, config, '((?<!https?:)//\\s*)', '(\\s*$)');
}

function transMultiline(input, config) {
  return translateGeneric(input, config, '(/\\*\\s*)', '(\\s*\\*/)');
}

// CSS has to be handled separately since it is looking for comments inside tags
function transCSS({ text }, config) {
  const regex = /<style>.*?<\/style>/gms;
  const matches = text.matchAll(regex);

  for (const [match] of matches) {
    let { text: styleText } = transMultiline({ text: match }, config);
    text = text.replace(match, styleText);
  }
  return { text };
}

function transScript({ text }, config) {
  const regex = /<script>.*?<\/script>/gms;
  const matches = text.matchAll(regex);

  for (const [match] of matches) {
    let { text: scriptText } = transMultiline(
      transInline({ text: match }, config),
      config
    );
    text = text.replace(match, scriptText);
  }
  return { text };
}

function transHTML(input, config) {
  return translateGeneric(input, config, '(<!--\\s*)', '(\\s*--!?>)');
}

function translateGeneric({ text }, config, regexBefore, regexAfter) {
  const { knownComments, dict, lang } = config;
  const regex = new RegExp(regexBefore + '(.*?)' + regexAfter, 'gms');
  const matches = text.matchAll(regex);

  for (const [match, before, comment, after] of matches) {
    if (knownComments.includes(comment)) {
      text = text.replace(match, `${before}${dict[comment][lang]}${after}`);
    } else if (comment.trim()) {
      throw `The comment
${comment}
does not appear in the comment dictionary.
When updating or adding a comment it must have the same text in the English challenges and the comment dictionary.
`;
    }
  }

  return { text };
}

exports.translateGeneric = translateGeneric;
