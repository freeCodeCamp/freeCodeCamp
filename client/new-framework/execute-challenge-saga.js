import createTypes from '../../common/app/utils/create-types';
const filterTypes = [
  execute
];
export default function executeChallengeSaga(action$, getState) {
  return action$
    .filter(({ type }) => filterTypes.some(_type => _type === type))
    .map(action => {
      if (action.type === execute) {
        const editors = getState().editors;
      }
    })
}
