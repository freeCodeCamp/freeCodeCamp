import {
  inHTMLData,
  uriInSingleQuotedAttr
} from 'xss-filters';

import { callIfDefined, formatUrl } from '../../../utils/form';

export default {
  NewJob: {
    position: callIfDefined(inHTMLData),
    locale: callIfDefined(inHTMLData),
    description: callIfDefined(inHTMLData),
    email: callIfDefined(inHTMLData),
    url: callIfDefined(value => formatUrl(uriInSingleQuotedAttr(value))),
    logo: callIfDefined(value => formatUrl(uriInSingleQuotedAttr(value))),
    company: callIfDefined(inHTMLData),
    howToApply: callIfDefined(inHTMLData)
  }
};
