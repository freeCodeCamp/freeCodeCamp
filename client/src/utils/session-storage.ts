export const getSessionCompletedChallengesLength = () => {
  const key = 'session-completed-challenges';
  const storedValue = sessionStorage.getItem(key);
  const challengesCompleted =
    storedValue !== null ? parseInt(storedValue, 10) : 0;
  return challengesCompleted;
};

export const incrementSessionCompletedChallenges = () => {
  const key = 'session-completed-challenges';
  let challengesCompleted = getSessionCompletedChallengesLength();

  // Update the existing value or set it to 1 if it doesn't exist
  challengesCompleted += 1;

  // Convert the number back to a string before saving
  sessionStorage.setItem(key, challengesCompleted.toString());
};

export const setCompletionCountWhenShownProgressModal = () => {
  const key = 'completion-count-progress-modal';
  const challengesCompleted = getSessionCompletedChallengesLength();
  sessionStorage.setItem(key, challengesCompleted.toString());
};

export const getCompletionCountWhenShownProgressModal = () => {
  const key = 'completion-count-progress-modal';
  const storedValue = sessionStorage.getItem(key);
  const challengesCompleted =
    storedValue == null ? null : parseInt(storedValue, 10);
  return challengesCompleted;
};
