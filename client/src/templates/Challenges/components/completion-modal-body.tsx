import BezierEasing from 'bezier-easing';
import React, { PureComponent } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import GreenPass from '../../../assets/icons/green-pass';
import { certMap } from '../../../resources/cert-and-project-map';

interface CompletionModalBodyProps {
  block: string;
  completedChallengesInBlock: number;
  completedPercent: number;
  currentChallengeId: string;
  superBlock: string;
  t: TFunction;
  totalChallengesInBlock: number;
}

interface CompletionModalBodyState {
  // This type was driving me nuts - seems like `NodeJS.Timeout | null;` should work
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progressInterval: number | null;
  shownPercent: number;
}

export class CompletionModalBody extends PureComponent<
  CompletionModalBodyProps,
  CompletionModalBodyState
> {
  static displayName: string;
  constructor(props: CompletionModalBodyProps) {
    super(props);

    this.state = {
      progressInterval: null,
      shownPercent: 0
    };

    this.animateProgressBar = this.animateProgressBar.bind(this);
  }

  animateProgressBar(completedPercent: number): void {
    const easing = BezierEasing(0.2, 0.5, 0.4, 1);

    if (completedPercent > 100) completedPercent = 100;
    if (completedPercent < 0) completedPercent = 0;

    const transitionLength = completedPercent * 10 + 750;
    const intervalLength = 10;
    const intervalsToFinish = transitionLength / intervalLength;
    const amountPerInterval = completedPercent / intervalsToFinish;
    let percent = 0;

    const myInterval = window.setInterval(() => {
      percent += amountPerInterval;

      if (percent > completedPercent) percent = completedPercent;

      this.setState({
        shownPercent: Math.round(
          completedPercent * easing(percent / completedPercent)
        )
      });

      if (percent >= completedPercent) clearInterval(myInterval);
    }, intervalLength);

    this.setState({
      progressInterval: myInterval
    });
  }

  componentWillUnmount(): void {
    if (this.state.progressInterval !== null)
      clearInterval(this.state.progressInterval);
  }

  render(): JSX.Element {
    const {
      block,
      completedPercent,
      totalChallengesInBlock,
      completedChallengesInBlock,
      currentChallengeId,
      superBlock,
      t
    } = this.props;
    const blockTitle = t(`intro:${superBlock}.blocks.${block}.title`);
    const isCertificationProject = certMap.some(cert => {
      // @ts-expect-error If `projects` does not exist, no consequences
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return cert.projects?.some(
        (project: { id: string }) => project.id === currentChallengeId
      );
    });

    return (
      <>
        <div className='completion-challenge-details'>
          <GreenPass
            className='completion-success-icon'
            data-testid='fcc-completion-success-icon'
            onAnimationEnd={() => {
              setTimeout(() => {
                this.animateProgressBar(completedPercent);
              }, 50);
            }}
          />
        </div>
        <div className='completion-block-details'>
          <div className='completion-block-name'>{blockTitle}</div>
          <div
            className='progress-bar-wrap'
            aria-label={t('learn.percent-complete', {
              percent: completedPercent
            })}
          >
            <div className='progress-bar-background' aria-hidden='true'>
              {t('learn.percent-complete', {
                percent: this.state.shownPercent
              })}
            </div>
            <div
              aria-hidden='true'
              className='progress-bar-percent'
              data-testid='fcc-progress-bar-percent'
              style={{ width: `${this.state.shownPercent}%` }}
            >
              <div className='progress-bar-foreground'>
                {t('learn.percent-complete', {
                  percent: this.state.shownPercent
                })}
              </div>
            </div>
          </div>
          {isCertificationProject && totalChallengesInBlock > 0 && (
            <output>
              {t('learn.project-complete', {
                completedChallengesInBlock,
                totalChallengesInBlock
              })}
            </output>
          )}
        </div>
      </>
    );
  }
}

CompletionModalBody.displayName = 'CompletionModalBody';

export default withTranslation()(CompletionModalBody);
