import { Observable } from 'rx';
import { createErrorObservable } from '../../common/app/redux/actions';
import capitalize from 'lodash/capitalize';

// analytics types
// interface social {
//   network: String, // facebook, twitter, etc
//   action: String, // like, favorite, etc
//   target: String // url like fcc.com or any other string
// }
// interface event {
//   category: String,
//   action: String,
//   label?: String,
//   value?: String
// }
//
const types = [ 'event', 'social' ];
function formatFields({ type, ...fields }) {
  // make sure type is supported
  if (!types.some(_type => _type === type)) {
    return null;
  }
  return Object.keys(fields).reduce((_fields, field) => {
    _fields[ type + capitalize(field) ] = fields[ field ];
    return _fields;
  }, { type });
}

export default function analyticsSaga(actions, getState, { window }) {
  const { ga } = window;
  if (typeof ga !== 'function') {
    console.log('GA not found');
    return Observable.empty();
  }
  return actions
    .filter(({ meta }) => !!(meta && meta.analytics && meta.analytics.type))
    .map(({ meta: { analytics } }) => formatFields(analytics))
    .filter(Boolean)
    // ga always returns undefined
    .map(({ type, ...fields }) => ga('send', type, fields))
    .catch(createErrorObservable);
}
