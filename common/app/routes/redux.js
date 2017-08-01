import createChallengesReducer from './challenges/redux';

export default function createReducers() {
  return [
    ...createChallengesReducer()
  ];
}
