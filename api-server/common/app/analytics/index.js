const throwIfUndefined = () => {
  throw new TypeError('Argument must not be of  type `undefined`');
};

// createEventMetaCreator({
//   category: String,
//   action: String,
//   label?: String,
//   value?: Number
// }) => () => Object
export const createEventMetaCreator = ({
  // categories are features or namespaces of the app (capitalized):
  // Map, Nav, Challenges, and so on
  category = throwIfUndefined,
  // can be a one word the event
  // click, play, toggle.
  // This is not a hard and fast rule
  action = throwIfUndefined,
  // any additional information
  // when in doubt use redux action type
  // or a short sentence describing the
  // action
  label,
  // used to tack some specific value for a GA event
  value
} = throwIfUndefined) => () => ({
  analytics: {
    type: 'event',
    category,
    action,
    label,
    value
  }
});
