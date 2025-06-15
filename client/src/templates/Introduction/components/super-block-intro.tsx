import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation, Trans } from 'react-i18next';
import { Alert, Spacer, Container, Row, Col } from '@freecodecamp/ui';
import { ConnectedProps, connect } from 'react-redux';
import { useFeatureIsOn } from '@growthbook/growthbook-react';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { SuperBlockIcon } from '../../../assets/superblock-icon';
import { Link } from '../../../components/helpers';
import CapIcon from '../../../assets/icons/cap';
import DumbbellIcon from '../../../assets/icons/dumbbell';
import CommunityIcon from '../../../assets/icons/community';
import { CompletedChallenge } from '../../../redux/prop-types';
import { completedChallengesSelector } from '../../../redux/selectors';

interface SuperBlockIntroQueryData {
  challengeNode: {
    challenge: {
      fields: {
        slug: string;
      };
    };
  };
}

type ReduxProps = ConnectedProps<typeof connector>;

interface ConditionalDonationAlertProps {
  superBlock: SuperBlocks;
  onCertificationDonationAlertClick: () => void;
  isDonating: boolean;
}

interface SuperBlockIntroProps
  extends ConditionalDonationAlertProps,
    ReduxProps {}

const mapStateToProps = (state: unknown) => ({
  completedChallenges: completedChallengesSelector(
    state
  ) as CompletedChallenge[]
});

const connector = connect(mapStateToProps);

export const ConditionalDonationAlert = ({
  superBlock,
  onCertificationDonationAlertClick,
  isDonating
}: ConditionalDonationAlertProps): JSX.Element | null => {
  const { t } = useTranslation();

  const betaCertifications: SuperBlocks[] = [];

  const unfinishedCertifications = [
    SuperBlocks.A2English,
    SuperBlocks.B1English,
    SuperBlocks.A2Spanish,
    SuperBlocks.A2Chinese,
    SuperBlocks.FullStackDeveloper
  ];

  if (!isDonating && betaCertifications.includes(superBlock))
    return (
      <Alert variant='info' className='annual-donation-alert'>
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
      </Alert>
    );

  if (!isDonating && unfinishedCertifications.includes(superBlock))
    return (
      <Alert variant='info' className='annual-donation-alert'>
        <p>
          <Trans i18nKey='donate.consider-donating-2'>
            <Link className='inline' to='/donate'>
              placeholder
            </Link>
          </Trans>
        </p>
      </Alert>
    );

  return null;
};

function SuperBlockIntro({
  superBlock,
  onCertificationDonationAlertClick,
  isDonating,
  completedChallenges
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
    challengeNode: {
      challenge: {
        fields: { slug: firstChallengeSlug }
      }
    }
  } = useStaticQuery<SuperBlockIntroQueryData>(graphql`
    query SuperBlockIntroQuery {
      challengeNode(
        challenge: {
          superOrder: { eq: 0 }
          order: { eq: 0 }
          challengeOrder: { eq: 0 }
        }
      ) {
        challenge {
          fields {
            slug
          }
        }
      }
    }
  `);

  const {
    title: i18nSuperBlock,
    intro: superBlockIntroText,
    note: superBlockNoteText
  } = superBlockIntroObj;

  const introTopA = (
    <>
      <h1 id='content-start' className='text-center big-heading'>
        {i18nSuperBlock}
      </h1>
      <Spacer size='m' />
      <SuperBlockIcon className='cert-header-icon' superBlock={superBlock} />
      <Spacer size='m' />
      {superBlockIntroText.map((str, i) => (
        <p dangerouslySetInnerHTML={{ __html: str }} key={i} />
      ))}
      {superBlockNoteText && (
        <div className='alert alert-info' style={{ marginTop: '2rem' }}>
          {superBlockNoteText}
        </div>
      )}
    </>
  );

  const introTopB = (
    <>
      <SuperBlockIcon className='cert-header-icon' superBlock={superBlock} />
      <Spacer size='m' />
      <h1 id='content-start' className='text-center big-heading'>
        {i18nSuperBlock}
      </h1>
      <Spacer size='m' />
      <p>{t('misc.fsd-b-description')}</p>
      {superBlockNoteText && (
        <div className='alert alert-info' style={{ marginTop: '2rem' }}>
          {superBlockNoteText}
        </div>
      )}
      <Spacer size='s' />
      <a
        className={'btn-cta-big btn-block signup-btn btn-cta'}
        href={firstChallengeSlug}
      >
        {t('misc.fsd-b-cta')}
      </a>
      <Spacer size='l' />
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
      <Spacer size='l' />
    </>
  );

  const showFSDnewIntro = useFeatureIsOn('fsd-new-intro');

  const showIntroTopB =
    completedChallenges.length === 0 &&
    superBlock === SuperBlocks.FullStackDeveloper &&
    showFSDnewIntro;

  return (
    <>
      {showIntroTopB ? introTopB : introTopA}
      <ConditionalDonationAlert
        superBlock={superBlock}
        onCertificationDonationAlertClick={onCertificationDonationAlertClick}
        isDonating={isDonating}
      />
    </>
  );
}

SuperBlockIntro.displayName = 'SuperBlockIntro';

export default connector(SuperBlockIntro);
