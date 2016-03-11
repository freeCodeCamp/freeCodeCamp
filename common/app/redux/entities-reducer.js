const initialState = {
  hike: {},
  challenge: {},
  job: {}
};

export default function dataReducer(state = initialState, action) {
  if (action.meta && action.meta.entities) {
    return {
      ...state,
      ...action.meta.entities
    };
  }
  return state;
}
