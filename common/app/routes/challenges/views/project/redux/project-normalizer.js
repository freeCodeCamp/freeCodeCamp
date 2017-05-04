import { callIfDefined, formatUrl } from '../../../../../utils/form';

export default {
  NewFrontEndProject: {
    solution: callIfDefined(formatUrl)
  },
  NewBackEndProject: {
    githubLink: callIfDefined(formatUrl),
    solution: callIfDefined(formatUrl)
  }
};
