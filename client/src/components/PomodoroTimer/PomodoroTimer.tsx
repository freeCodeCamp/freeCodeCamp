import React, { useState, useEffect, useCallback } from 'react';

const MODES = {
  focus: { label: 'Focus', duration: 25 * 60, color: '#0a0a23' },
  short: { label: 'Short Break', duration: 5 * 60, color: '#1D9E75' },
  long: { label: 'Long Break', duration: 15 * 60, color: '#1D9E75' }
};

const PomodoroTimer = () => {
  const [mode, setMode] = useState<'focus' | 'short' | 'long'>('focus');
  const [remaining, setRemaining] = useState(MODES.focus.duration);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);

  const total = MODES[mode].duration;

  const reset = useCallback(() => {
    setRunning(false);
    setRemaining(MODES[mode].duration);
  }, [mode]);

  useEffect(() => {
    reset();
  }, [mode, reset]);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setRunning(false);
          if (mode === 'focus') setSessions(s => s + 1);
          alert(mode === 'focus' ? 'Focus session done! Take a break.' : 'Break over! Time to focus.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running, mode]);

  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
  const seconds = String(remaining % 60).padStart(2, '0');
  const progress = ((total - remaining) / total) * 100;

  return (
    <div style={{ maxWidth: 360, margin: '2rem auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: 18, marginBottom: 16, color: '#0a0a23' }}>Study Timer</h2>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
        {(['focus', 'short', 'long'] as const).map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid #ccc',
              background: mode === m ? '#0a0a23' : 'white',
              color: mode === m ? 'white' : '#555',
              cursor: 'pointer',
              fontSize: 13
            }}
          >
            {MODES[m].label}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto 24px' }}>
        <svg width='180' height='180' style={{ transform: 'rotate(-90deg)' }}>
          <circle cx='90' cy='90' r='80' fill='none' stroke='#eee' strokeWidth='8' />
          <circle
            cx='90' cy='90' r='80' fill='none'
            stroke={MODES[mode].color}
            strokeWidth='8'
            strokeDasharray={`${2 * Math.PI * 80}`}
            strokeDashoffset={`${2 * Math.PI * 80 * (1 - progress / 100)}`}
            strokeLinecap='round'
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <div style={{ fontSize: 40, fontWeight: 500, color: '#0a0a23' }}>{minutes}:{seconds}</div>
          <div style={{ fontSize: 12, color: '#888' }}>{MODES[mode].label.toLowerCase()}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 24 }}>
        <button
          onClick={() => setRunning(r => !r)}
          style={{
            padding: '10px 28px',
            borderRadius: 8,
            border: '1px solid #0a0a23',
            background: '#0a0a23',
            color: 'white',
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          {running ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={reset}
          style={{
            padding: '10px 28px',
            borderRadius: 8,
            border: '1px solid #ccc',
            background: 'white',
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '10px 20px' }}>
          <div style={{ fontSize: 11, color: '#888', marginBottom: 4 }}>sessions done</div>
          <div style={{ fontSize: 22, fontWeight: 500 }}>{sessions}</div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;