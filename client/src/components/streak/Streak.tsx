import React, { useMemo } from 'react';
import {
  calculateStreak,
  getStreakMilestones,
  getNextMilestone,
  getHighestMilestone,
  isStreakActive
} from './streak-utils';
import { StreakProps, StreakDay, StreakMilestone } from './types';

/**
 * Streak component that displays a user's daily coding streak.
 * Shows current streak, longest streak, milestones, and a calendar heatmap.
 */
const Streak: React.FC<StreakProps> = ({
  completedChallenges,
  timezone,
  showMilestones = true,
  maxHistoryDays = 30
}) => {
  const streakData = useMemo(
    () => calculateStreak(completedChallenges, timezone),
    [completedChallenges, timezone]
  );

  const active = isStreakActive(streakData.lastActiveDate, timezone);
  const nextMilestone = getNextMilestone(streakData.currentStreak);
  const highestMilestone = getHighestMilestone(streakData.currentStreak);

  const historyDays = streakData.streakHistory.slice(
    Math.max(0, streakData.streakHistory.length - maxHistoryDays)
  );

  return (
    <div className='streak-container' data-testid='streak-component'>
      <div className='streak-header'>
        <h3>Daily Streak</h3>
        {active && (
          <span className='streak-active-badge' data-testid='streak-active'>
            Active
          </span>
        )}
      </div>

      <div className='streak-stats'>
        <div className='streak-stat' data-testid='current-streak'>
          <span className='streak-stat-value'>
            {streakData.currentStreak}
          </span>
          <span className='streak-stat-label'>Current Streak</span>
        </div>
        <div className='streak-stat' data-testid='longest-streak'>
          <span className='streak-stat-value'>
            {streakData.longestStreak}
          </span>
          <span className='streak-stat-label'>Longest Streak</span>
        </div>
        <div className='streak-stat' data-testid='total-days'>
          <span className='streak-stat-value'>
            {streakData.totalDaysActive}
          </span>
          <span className='streak-stat-label'>Total Days</span>
        </div>
      </div>

      {highestMilestone && (
        <div className='streak-milestone-badge' data-testid='highest-milestone'>
          <span className='milestone-emoji'>{highestMilestone.emoji}</span>
          <span className='milestone-label'>{highestMilestone.label}</span>
        </div>
      )}

      {nextMilestone && (
        <div className='streak-progress' data-testid='next-milestone'>
          <span className='progress-text'>
            {nextMilestone.days - streakData.currentStreak} days to{' '}
            {nextMilestone.label} {nextMilestone.emoji}
          </span>
          <div className='progress-bar'>
            <div
              className='progress-fill'
              style={{
                width: `${Math.min(
                  100,
                  (streakData.currentStreak / nextMilestone.days) * 100
                )}%`
              }}
            />
          </div>
        </div>
      )}

      <div className='streak-calendar' data-testid='streak-calendar'>
        {historyDays.map((day: StreakDay) => (
          <div
            key={day.date}
            className={`streak-day ${day.completed ? 'completed' : 'empty'}`}
            title={`${day.date}: ${day.challengeCount} challenges`}
            data-date={day.date}
          />
        ))}
      </div>

      {showMilestones && (
        <div className='streak-milestones' data-testid='milestones-list'>
          <h4>Milestones</h4>
          <ul>
            {getStreakMilestones(streakData.currentStreak).map(
              (milestone: StreakMilestone) => (
                <li
                  key={milestone.days}
                  className={milestone.achieved ? 'achieved' : 'pending'}
                >
                  <span>{milestone.emoji}</span>
                  <span>{milestone.label}</span>
                  <span className='milestone-days'>
                    {milestone.days} days
                  </span>
                  {milestone.achieved && (
                    <span className='checkmark'>&#10003;</span>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

Streak.displayName = 'Streak';

export default Streak;
