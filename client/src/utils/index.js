// These regex are not for validation, it is purely to see
// if we are looking at something like what we want to validate
// before we try to validate
export const maybeEmailRE = /.*@.*\.\w\w/;
export const maybeUrlRE = /https?:\/\/.*\..*/;
export const hasProtocolRE = /^http/;

// Challenge URLs take the form path/to/superBlock/block/challenge and this
// extracts the superBlock and block.
export const getBlocksFromChallengeUrl = url => {
  const blocks = url.split('/').slice(-3, -1);
  return { superBlock: blocks[0], block: blocks[1] };
};
