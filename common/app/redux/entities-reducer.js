const initialState = {
  hike: {},
  superBlock: {},
  block: {},
  challenge: {},
  job: {}
};

export default function entities(state = initialState, action) {
  if (action.meta && action.meta.entities) {
    return {
      ...state,
      ...action.meta.entities
    };
  }
  return state;
}
