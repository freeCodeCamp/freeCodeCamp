import React, { useState, useEffect, useRef, useMemo } from 'react';

import BezierEasing from 'bezier-easing';

interface ProgressBarInnerProps {
  completedPercent: number;
  title: string;
  meta: string;
}

const easing = BezierEasing(0.2, 0.5, 0.4, 1);
const intervalLength = 10;
let percent = 0;

function useIsInViewport(ref: React.RefObject<HTMLDivElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    ref.current && observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
function ProgressBarInner({
  completedPercent,
  title,
  meta
}: ProgressBarInnerProps): JSX.Element {
  const [shownPercent, setShownPercent] = useState(0);
  const [progressBarInnerWidth, setProgressBarInnerWidth] = useState(0);
  const [lastShopwnPercent, setLastShownPercent] = useState(0);
  const progressBarInnerWrap = useRef<HTMLDivElement>(null);
  const isProgressBarInViewport = useIsInViewport(progressBarInnerWrap);

  const animateProgressBarInner = (completedPercent: number) => {
    if (completedPercent > 100) completedPercent = 100;
    if (completedPercent < 0) completedPercent = 0;

    const transitionLength = completedPercent * 10 + 750;
    const intervalsToFinish = transitionLength / intervalLength;
    const amountPerInterval = completedPercent / intervalsToFinish;

    const myInterval = window.setInterval(() => {
      percent += amountPerInterval;

      if (percent > completedPercent) percent = completedPercent;

      setShownPercent(
        Math.round(completedPercent * easing(percent / completedPercent))
      );
      if (percent >= completedPercent) {
        percent = 0;
        clearInterval(myInterval);
      }
    }, intervalLength);
  };
  useEffect(() => {
    if (lastShopwnPercent !== completedPercent && isProgressBarInViewport) {
      setLastShownPercent(completedPercent);
      animateProgressBarInner(completedPercent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProgressBarInViewport]);

  useEffect(() => {
    if (progressBarInnerWrap.current)
      setProgressBarInnerWidth(progressBarInnerWrap.current.offsetWidth);
  }, [progressBarInnerWrap]);

  return (
    <>
      <div className='completion-block-name'>{title}</div>
      <div
        className='progress-bar-wrap'
        aria-hidden='true'
        ref={progressBarInnerWrap}
      >
        <div className='progress-bar-background'></div>
        <div
          className='progress-bar-percent'
          data-testid='fcc-progress-bar-percent'
          style={{ width: `${shownPercent}%` }}
        >
          <div
            className='progress-bar-foreground'
            style={{ width: progressBarInnerWidth }}
          ></div>
        </div>
      </div>
      <div className='completion-block-meta'>{meta}</div>
    </>
  );
}

ProgressBarInner.displayName = 'ProgressBarInner';

export default ProgressBarInner;
