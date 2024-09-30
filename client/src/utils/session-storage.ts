const parseCount = (rawCount: string | null) =>
  rawCount == null ? 0 : parseInt(rawCount, 10);

export const CURRENT_COUNT_KEY = 'session-completed-challenges';
export const SAVED_COUNT_KEY = 'saved-session-completed-challenges';

const getCurrentCount = () =>
  parseCount(sessionStorage.getItem(CURRENT_COUNT_KEY));

const getSavedCount = () => parseCount(sessionStorage.getItem(SAVED_COUNT_KEY));

export const incrementCurrentCount = () => {
  const newCount = getCurrentCount() + 1;
  sessionStorage.setItem(CURRENT_COUNT_KEY, newCount.toString());
};

/**
 * Saves the current count so we can compare it later.
 */
export const saveCurrentCount = () => {
  sessionStorage.setItem(SAVED_COUNT_KEY, getCurrentCount().toString());
};

const isSaved = () => sessionStorage.getItem(SAVED_COUNT_KEY) !== null;

type AfterSave = {
  isSaved: true;
  currentCount: number;
  countSinceSave: number;
};

type BeforeSave = {
  isSaved: false;
  currentCount: number;
};

type SessionChallengeData = AfterSave | BeforeSave;

export const getSessionChallengeData = (): SessionChallengeData => {
  if (isSaved()) {
    return {
      isSaved: true,
      currentCount: getCurrentCount(),
      countSinceSave: getCurrentCount() - getSavedCount()
    };
  } else {
    return {
      isSaved: false,
      currentCount: getCurrentCount()
    };
  }
};
