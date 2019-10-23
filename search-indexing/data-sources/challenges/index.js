const { from, of } = require('rxjs');
const { switchMap, tap } = require('rxjs/operators');
const debug = require('debug');

const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { chunkDocument, stripHTML, stripURLs } = require('../../utils');

const log = debug('fcc:search:data-source:challenges');

const { LOCALE: lang } = process.env;

module.exports = function getChallenges() {
  log('sourcing challenges');
  return from(getChallengesForLang(lang)).pipe(
    tap(() => log('parsing curriculum')),
    switchMap(curriculum => {
      const superBlocks = Object.keys(curriculum).filter(
        x => x !== 'certificates'
      );
      return from(superBlocks.map(superBlock => curriculum[superBlock]));
    }),
    switchMap(superBlock => {
      const { blocks } = superBlock;
      return from(Object.keys(blocks).map(block => blocks[block]));
    }),
    switchMap(block => {
      const { meta, challenges } = block;
      const { dashedName: blockDashedName } = meta;
      return of(
        challenges.map(challenge => ({ ...challenge, blockDashedName }))
      );
    }),
    switchMap(challenges => {
      const formattedChallenges = challenges
        .filter(({ isPrivate }) => !isPrivate)
        .reduce((acc, current) => {
          const {
            id,
            title,
            description,
            instructions,
            dashedName,
            superBlock,
            blockDashedName,
            block
          } = current;
          const formattedChallenge = {
            blockName: block,
            id,
            title,
            description: stripURLs(stripHTML(description.concat(instructions))),
            url: `/${superBlock}/${blockDashedName}/${dashedName}`
          };
          return [
            ...acc,
            ...chunkDocument(
              formattedChallenge,
              ['title', 'id', 'blockName', 'url'],
              'description'
            )
          ];
        }, []);

      return of(formattedChallenges);
    })
  );
};
