import PropTypes from 'prop-types';

const FileType = PropTypes.shape({
  key: PropTypes.string,
  ext: PropTypes.string,
  name: PropTypes.string,
  contents: PropTypes.string,
  head: PropTypes.string,
  tail: PropTypes.string
});

export const ChallengeNode = PropTypes.shape({
  block: PropTypes.string,
  challengeType: PropTypes.number,
  dashedName: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  files: PropTypes.shape({
    indexhtml: FileType,
    indexjs: FileType
  }),
  fields: PropTypes.shape({
    slug: PropTypes.string,
    blockName: PropTypes.string
  }),
  guideUrl: PropTypes.string,
  head: PropTypes.arrayOf(PropTypes.string),
  helpRoom: PropTypes.string,
  suborder: PropTypes.number,
  isBeta: PropTypes.bool,
  isComingSoon: PropTypes.bool,
  isLocked: PropTypes.bool,
  isPrivate: PropTypes.bool,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  order: PropTypes.number,
  superOrder: PropTypes.number,
  superBlock: PropTypes.string,
  tail: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.string,
  title: PropTypes.string
});

export const AllChallengeNode = PropTypes.shape({
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: ChallengeNode
    })
  )
});
