import React, { useCallback, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { appMount, updateActivityStreak } from '../redux/actions';
import type { ActivityStreak } from '../redux/prop-types';
import {
  isSignedInSelector,
  userFetchStateSelector,
  userSelector
} from '../redux/selectors';
import { postActivityStreak } from '../utils/ajax';
import { subscribeToMeaningfulActivity } from '../utils/activity';

interface AppMountNotifierProps {
  children: React.ReactNode;
  appMount: () => void;
  activityStreak?: ActivityStreak;
  isSignedIn: boolean;
  userFetchComplete: boolean;
  updateActivityStreak: (activityStreak: ActivityStreak) => void;
}

type StoredActivityTimer = {
  accumulatedMilliseconds: number;
  lastTickAt: number;
  qualificationAttempted: boolean;
};

type StoredSessionQualification = {
  deactivateAt: number;
};

const ACTIVITY_TIMER_KEY = 'fcc-activity-streak-timer';
const SESSION_QUALIFICATION_KEY = 'fcc-activity-streak-session';
const FIVE_MINUTES = 5 * 60 * 1000;
const ONE_DAY = 24 * 60 * 60 * 1000;

const mapStateToProps = (state: unknown) => {
  const user = userSelector(state) as
    | { activityStreak?: ActivityStreak }
    | undefined;
  const userFetchState = userFetchStateSelector(state) as {
    complete: boolean;
  };
  return {
    activityStreak: user?.activityStreak,
    isSignedIn: isSignedInSelector(state),
    userFetchComplete: userFetchState.complete
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ appMount, updateActivityStreak }, dispatch);

export const AppMountNotifier = ({
  children,
  appMount,
  activityStreak,
  isSignedIn,
  userFetchComplete,
  updateActivityStreak
}: AppMountNotifierProps): JSX.Element => {
  const timerState = useRef<StoredActivityTimer>();
  const qualificationInFlight = useRef(false);
  const isCounting = useRef(false);
  const activityStreakRef = useRef(activityStreak);

  useEffect(() => {
    activityStreakRef.current = activityStreak;

    const sessionQualification = readSessionQualification();
    if (
      isSignedIn &&
      activityStreak &&
      !activityStreak.activeSession &&
      sessionQualification &&
      sessionQualification.deactivateAt > Date.now()
    ) {
      updateActivityStreak({ ...activityStreak, activeSession: true });
    }
  }, [activityStreak, isSignedIn, updateActivityStreak]);

  useEffect(() => {
    appMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const attemptQualification = useCallback(async () => {
    if (!timerState.current || qualificationInFlight.current) return;

    timerState.current.qualificationAttempted = true;
    writeTimerState(timerState.current);
    qualificationInFlight.current = true;
    try {
      const { response, data } = await postActivityStreak();
      if (response.ok) {
        clearTimerState();
        timerState.current = undefined;
        const canIncrementAt = Date.parse(
          data.activityStreak.canIncrementAt ?? ''
        );
        writeSessionQualification({
          deactivateAt: Number.isFinite(canIncrementAt)
            ? canIncrementAt
            : Date.now() + ONE_DAY
        });
        updateActivityStreak(data.activityStreak);
      }
    } catch {
      // Keep the completed timer in this tab session. The next meaningful
      // action will retry qualification; nothing is queued after the tab closes.
    } finally {
      qualificationInFlight.current = false;
    }
  }, [updateActivityStreak]);

  useEffect(() => {
    if (!isSignedIn) {
      if (userFetchComplete) {
        clearTimerState();
        clearSessionQualification();
      }
      timerState.current = undefined;
      return;
    }

    const storedTimer = readTimerState();
    if (storedTimer && !activityStreakRef.current?.activeSession) {
      timerState.current = {
        ...storedTimer,
        // Reloading must not count time while the app was not running.
        lastTickAt: Date.now()
      };
      writeTimerState(timerState.current);
    } else {
      clearTimerState();
      timerState.current = undefined;
    }

    isCounting.current = canCountActivityTime();

    const synchronizeTimer = () => {
      const now = Date.now();
      const sessionQualification = readSessionQualification();
      if (sessionQualification && sessionQualification.deactivateAt <= now) {
        clearSessionQualification();
        const currentStreak = activityStreakRef.current;
        if (currentStreak?.activeSession) {
          updateActivityStreak({ ...currentStreak, activeSession: false });
        }
      }

      if (timerState.current) {
        if (isCounting.current) {
          timerState.current.accumulatedMilliseconds += Math.max(
            0,
            now - timerState.current.lastTickAt
          );
        }
        timerState.current.lastTickAt = now;
        writeTimerState(timerState.current);

        if (
          timerState.current.accumulatedMilliseconds >= FIVE_MINUTES &&
          !timerState.current.qualificationAttempted
        ) {
          void attemptQualification();
        }
      }
      isCounting.current = canCountActivityTime();
    };

    const interval = window.setInterval(synchronizeTimer, 1000);
    document.addEventListener('visibilitychange', synchronizeTimer);
    window.addEventListener('online', synchronizeTimer);
    window.addEventListener('offline', synchronizeTimer);

    return () => {
      synchronizeTimer();
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', synchronizeTimer);
      window.removeEventListener('online', synchronizeTimer);
      window.removeEventListener('offline', synchronizeTimer);
    };
  }, [
    attemptQualification,
    isSignedIn,
    updateActivityStreak,
    userFetchComplete
  ]);

  useEffect(() => {
    if (!isSignedIn) return;

    return subscribeToMeaningfulActivity(() => {
      if (activityStreakRef.current?.activeSession) return;

      if (!timerState.current) {
        timerState.current = {
          accumulatedMilliseconds: 0,
          lastTickAt: Date.now(),
          qualificationAttempted: false
        };
        writeTimerState(timerState.current);
        return;
      }

      timerState.current.lastTickAt = Date.now();
      writeTimerState(timerState.current);
      if (
        timerState.current.accumulatedMilliseconds >= FIVE_MINUTES &&
        timerState.current.qualificationAttempted
      ) {
        void attemptQualification();
      }
    });
  }, [attemptQualification, isSignedIn]);

  const { i18n } = useTranslation();

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      {children}
    </>
  );
};

function canCountActivityTime(): boolean {
  return document.visibilityState === 'visible' && navigator.onLine;
}

function readTimerState(): StoredActivityTimer | undefined {
  const value = window.sessionStorage.getItem(ACTIVITY_TIMER_KEY);
  if (!value) return;

  try {
    const parsed: unknown = JSON.parse(value);
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'accumulatedMilliseconds' in parsed &&
      typeof parsed.accumulatedMilliseconds === 'number' &&
      'lastTickAt' in parsed &&
      typeof parsed.lastTickAt === 'number' &&
      'qualificationAttempted' in parsed &&
      typeof parsed.qualificationAttempted === 'boolean'
    ) {
      return parsed as StoredActivityTimer;
    }
  } catch {
    // Invalid session state is discarded below.
  }

  clearTimerState();
  return;
}

function writeTimerState(state: StoredActivityTimer): void {
  window.sessionStorage.setItem(ACTIVITY_TIMER_KEY, JSON.stringify(state));
}

function clearTimerState(): void {
  window.sessionStorage.removeItem(ACTIVITY_TIMER_KEY);
}

function readSessionQualification(): StoredSessionQualification | undefined {
  const value = window.sessionStorage.getItem(SESSION_QUALIFICATION_KEY);
  if (!value) return;

  try {
    const parsed: unknown = JSON.parse(value);
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'deactivateAt' in parsed &&
      typeof parsed.deactivateAt === 'number'
    ) {
      return parsed as StoredSessionQualification;
    }
  } catch {
    // Invalid session state is discarded below.
  }

  clearSessionQualification();
  return;
}

function writeSessionQualification(state: StoredSessionQualification): void {
  window.sessionStorage.setItem(
    SESSION_QUALIFICATION_KEY,
    JSON.stringify(state)
  );
}

function clearSessionQualification(): void {
  window.sessionStorage.removeItem(SESSION_QUALIFICATION_KEY);
}

AppMountNotifier.displayName = 'AppMountNotifier';

export default connect(mapStateToProps, mapDispatchToProps)(AppMountNotifier);
