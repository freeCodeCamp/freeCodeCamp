import path from 'path';
import { Observable } from 'rx';

const basePath = process.cwd() + '/seed/challenges/';

export default function getFromDisk$(challenge) {
  if (challenge && !challenge.fileName) {
    throw new Error(
      `Challenge ${challenge.name} has no fileName.
      Did you remember run node seed?`
    );
  }
  delete require.cache[require.resolve(
    path.join(basePath, challenge.fileName)
  )];

  return Observable.just(require(path.join(basePath, challenge.fileName)))
    .map(challengeSpec => {
      const _challenge = challengeSpec.challenges[challenge.suborder - 1];
      _challenge.helpRoom = challengeSpec.helpRoom || 'Help';
      return _challenge;
    })
    .map(challenge => {
      challenge.head = challenge.head || [];
      challenge.tail = challenge.tail || [];
      challenge.challengeType = '' + challenge.challengeType;

      challenge.name = challenge.title.replace(/[^a-zA-Z0-9\s]/g, '');

      challenge.dashedName = challenge.name
        .toLowerCase()
        .replace(/\:/g, '')
        .replace(/\s/g, '-');

      return challenge;
    });
}
