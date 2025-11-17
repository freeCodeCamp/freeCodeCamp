import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Callout, Spacer, Container, Row, Col } from '@freecodecamp/ui';
import {
  archivedSuperBlocks,
  SuperBlocks
} from '../../../../../shared-dist/config/curriculum';
import { SuperBlockIcon } from '../../../assets/superblock-icon';
import { Link } from '../../../components/helpers';
import CapIcon from '../../../assets/icons/cap';
import DumbbellIcon from '../../../assets/icons/dumbbell';
import CommunityIcon from '../../../assets/icons/community';
import ArchivedWarning from '../../../components/archived-warning';

interface ConditionalDonationAlertProps {
  superBlock: SuperBlocks;
  onCertificationDonationAlertClick: () => void;
  isDonating: boolean;
}

interface SuperBlockIntroProps extends ConditionalDonationAlertProps {
  hasNotstarted: boolean;
  nextChallengeSlug: string | null;
}

export const ConditionalDonationAlert = ({
  superBlock,
  onCertificationDonationAlertClick,
  isDonating
}: ConditionalDonationAlertProps): JSX.Element | null => {
  const { t } = useTranslation();

  const betaCertifications: SuperBlocks[] = [];

  const unfinishedCertifications = [
    SuperBlocks.B1English,
    SuperBlocks.A1Spanish,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.A1Chinese,
    SuperBlocks.FullStackDeveloper
  ];

  if (!isDonating && betaCertifications.includes(superBlock))
    return (
      <Callout variant='info' className='annual-donation-alert'>
        <p>{t('donate.beta-certification')}</p>
        <hr />
        <p className='btn-container'>
          <Link
            className='btn donate-button'
            key='donate'
            sameTab={false}
            to='/donate'
            onClick={onCertificationDonationAlertClick}
          >
            {t('buttons.donate-now')}
          </Link>
        </p>
      </Callout>
    );

  if (!isDonating && unfinishedCertifications.includes(superBlock))
    return (
      <Callout variant='info' className='annual-donation-alert'>
        <p>
          <Trans i18nKey='donate.consider-donating-2'>
            <Link className='inline' to='/donate'>
              placeholder
            </Link>
          </Trans>
        </p>
      </Callout>
    );

  return null;
};

function SuperBlockIntro({
  superBlock,
  onCertificationDonationAlertClick,
  isDonating,
  hasNotstarted,
  nextChallengeSlug
}: SuperBlockIntroProps): JSX.Element {
  const { t } = useTranslation();
  const superBlockIntroObj: {
    title: string;
    intro: string[];
    note: string;
  } = t(`intro:${superBlock}`, { returnObjects: true }) as {
    title: string;
    intro: string[];
    note: string;
  };

  const {
    title: i18nSuperBlock,
    intro: superBlockIntroText,
    note: superBlockNoteText
  } = superBlockIntroObj;

  const IntroTopDefault = ({ fsd }: { fsd: boolean }) => (
    <>
      {archivedSuperBlocks.includes(superBlock) && <ArchivedWarning />}
      <Spacer size='s' />
      <SuperBlockIcon className='cert-header-icon' superBlock={superBlock} />
      <Spacer size='m' />
      <h1 id='content-start' className='text-center big-heading'>
        {i18nSuperBlock}
      </h1>
      <Spacer size='l' />
      {fsd && (
        <Container
          fluid={true}
          className='full-width-container super-benefits-container'
        >
          <Container>
            <Row>
              <Col xs={12} className='super-block-benefits'>
                <div>
                  <CommunityIcon />
                  <div className='benefit-text'>
                    <h3>{t('misc.fsd-b-benefit-1-title')}</h3>
                    <p>{t('misc.fsd-b-benefit-1-description')}</p>
                  </div>
                </div>
                <div>
                  <CapIcon />
                  <div className='benefit-text'>
                    <h3>{t('misc.fsd-b-benefit-2-title')}</h3>
                    <p>{t('misc.fsd-b-benefit-2-description')}</p>
                  </div>
                </div>
                <div>
                  <DumbbellIcon />
                  <div className='benefit-text'>
                    <h3>{t('misc.fsd-b-benefit-3-title')}</h3>
                    <p>{t('misc.fsd-b-benefit-3-description')}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
      {nextChallengeSlug && !fsd && (
        <Link
          className={'btn-cta-big btn-block signup-btn btn-cta intro-top-cta'}
          to={nextChallengeSlug}
          data-test-label={
            hasNotstarted ? 'start-learning' : 'continue-learning'
          }
        >
          {hasNotstarted ? t('misc.fsd-b-cta') : t('misc.continue-learning')}
        </Link>
      )}
      <Spacer size='l' />
      {superBlockIntroText.map((str, i) => (
        <p dangerouslySetInnerHTML={{ __html: str }} key={i} />
      ))}
      {superBlockNoteText && (
        <>
          <Spacer size='m' />
          <Callout variant='info'>{superBlockNoteText}</Callout>
        </>
      )}
    </>
  );

  const isFullStackDeveloper =
    superBlock === SuperBlocks.FullStackDeveloper ||
    superBlock === SuperBlocks.FullStackDeveloperV9;

  return (
    <>
      <IntroTopDefault fsd={isFullStackDeveloper} />
      <ConditionalDonationAlert
        superBlock={superBlock}
        onCertificationDonationAlertClick={onCertificationDonationAlertClick}
        isDonating={isDonating}
      />
    </>
  );
}

SuperBlockIntro.displayName = 'SuperBlockIntro';

export default SuperBlockIntro;
