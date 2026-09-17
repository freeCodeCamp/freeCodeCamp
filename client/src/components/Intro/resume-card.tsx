import React from 'react';
import { Col, Row, Spacer } from '@freecodecamp/ui';

import { ButtonLink } from '../helpers';
import { ProgressBar } from '../Progress/progress-bar';

interface ResumeCardProps {
  courseTitle: string;
  progress: number;
  resumeUrl: string;
  labels: {
    continueLearning: string;
    progress: string;
    resume: string;
  };
}

export function ResumeCard({
  courseTitle,
  progress,
  resumeUrl,
  labels
}: ResumeCardProps): JSX.Element {
  return (
    <section
      className='resume-card'
      aria-labelledby='continue-learning-heading'
    >
      <h2 id='continue-learning-heading'>{labels.continueLearning}</h2>
      <div className='resume-progress-header'>
        <span>{courseTitle}</span>
        <span>{labels.progress}</span>
      </div>
      <div
        aria-label={labels.progress}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        className='resume-progress'
        role='progressbar'
      >
        <ProgressBar now={progress} />
      </div>
      <Row className='resume-card-action-container'>
        <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={12}>
          <ButtonLink block href={resumeUrl}>
            {labels.resume}
          </ButtonLink>
          <Spacer size='xs' />
        </Col>
      </Row>
    </section>
  );
}
