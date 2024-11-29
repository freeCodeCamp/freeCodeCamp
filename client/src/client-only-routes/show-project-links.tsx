import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Table, Spacer } from '@freecodecamp/ui';
import { Link } from '../components/helpers';
import ProjectModal from '../components/SolutionViewer/project-modal';
import ProjectPreviewModal from '../templates/Challenges/components/project-preview-modal';
import ExamResultsModal from '../components/SolutionViewer/exam-results-modal';
import { SolutionDisplayWidget } from '../components/solution-display-widget';
import { openModal } from '../templates/Challenges/redux/actions';
import { find } from 'lodash-es';
import {
  certsToProjects,
  type CertTitle
} from '../../config/cert-and-project-map';
import type { CompletedChallenge, User } from '../redux/prop-types';
import { regeneratePathAndHistory } from '../../../shared/utils/polyvinyl';
import '../components/layouts/project-links.css';

interface ShowProjectLinksProps {
  certName: string;
  name: string;
  user: User;
  openModal: (arg: string) => void;
}

const initSolutionState = {
  projectTitle: '',
  completedChallenge: null,
  showCode: false
};

const mapDispatchToProps = {
  openModal
};

const ShowProjectLinks = ({ certName, name, user, openModal }: ShowProjectLinksProps): JSX.Element => {
  const [solutionState, setSolutionState] = useState(initSolutionState);
  const { t } = useTranslation();

  const handleSolutionModalHide = () => setSolutionState(initSolutionState);

  const handleProjectSolution = (projectId: string, projectTitle: string) => {
    const completedProject = find(user.completedChallenges, ({ id }) => id === projectId);
    if (!completedProject) return null;

    const setSolutionStateForModal = (showCode: boolean, modalType: string | null = null) => {
      setSolutionState({ projectTitle, completedChallenge: completedProject, showCode });
      if (modalType) openModal(modalType);
    };

    return (
      <SolutionDisplayWidget
        completedChallenge={completedProject}
        projectTitle={projectTitle}
        displayContext='certification'
        showUserCode={() => setSolutionStateForModal(true)}
        showProjectPreview={() => setSolutionStateForModal(false, 'projectPreview')}
        showExamResults={() => setSolutionStateForModal(false, 'examResults')}
      />
    );
  };

  const renderProjects = (projects: any[]) =>
    projects.map(({ link, title, id }) => (
      <tr key={id}>
        <td className='col-xs-8'>
          <Link to={link}>{t(`certification.projects.title.${title}`, title)}</Link>
        </td>
        <td className='col-xs-4'>{handleProjectSolution(id, title)}</td>
      </tr>
    ));

  const ProjectsFor = ({ certName }: { certName: CertTitle }) => {
    if (certName === 'Legacy Full Stack') {
      const legacyCerts = [
        'Responsive Web Design',
        'Legacy JavaScript Algorithms and Data Structures',
        'Front End Development Libraries',
        'Data Visualization',
        'Back End Development and APIs',
        'Legacy Information Security and Quality Assurance'
      ];

      return legacyCerts.map((title, ind) => {
        const projects = certsToProjects[title];
        const certLocation = `/certification/${user.username}/${projects[0].certSlug}`;
        return (
          <tr key={ind}>
            <td>
              <Link className='project-link' to={certLocation} external>
                {t(`certification.title.${title}`, title)}
              </Link>
            </td>
          </tr>
        );
      });
    }

    return renderProjects(certsToProjects[certName]);
  };

  const getCertHeading = (certName: string) => {
    switch (certName) {
      case 'Legacy Full Stack':
        return 'certification.project.heading-legacy-full-stack';
      case 'Foundational C# with Microsoft':
        return 'certification.project.heading-exam';
      default:
        return 'certification.project.heading';
    }
  };

  const challengeData = solutionState.completedChallenge
    ? {
        ...solutionState.completedChallenge,
        challengeFiles:
          solutionState.completedChallenge.challengeFiles?.map(regeneratePathAndHistory) ?? null
      }
    : null;

  if (!(certName in certsToProjects || certName === 'Legacy Full Stack')) {
    return <div>{t('certification.unknown')}</div>;
  }

  return (
    <div data-playwright-test-label='project-links'>
      {t(getCertHeading(certName), { user: name })}
      <Spacer size='m' />
      <Table striped>
        <thead>
          <tr>
            <th>
              <span className='sr-only'>{t('settings.headings.certs')}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <ProjectsFor certName={certName} />
        </tbody>
      </Table>
      <Spacer size='m' />
      <ProjectModal
        challengeFiles={solutionState.completedChallenge?.challengeFiles ?? null}
        handleSolutionModalHide={handleSolutionModalHide}
        isOpen={solutionState.showCode}
        projectTitle={solutionState.projectTitle}
        solution={solutionState.completedChallenge?.solution as undefined | string}
      />
      <ProjectPreviewModal
        challengeData={challengeData}
        closeText={t('buttons.close')}
        previewTitle={solutionState.projectTitle}
      />
      <ExamResultsModal
        projectTitle={solutionState.projectTitle}
        examResults={solutionState.completedChallenge?.examResults}
      />
      {certName !== 'Foundational C# with Microsoft' && (
        <Trans i18nKey='certification.project.footnote'>
          If you suspect that any of these projects violate the{' '}
          <a
            href='https://www.freecodecamp.org/news/academic-honesty-policy/'
            rel='noreferrer'
            target='_blank'
          >
            academic honesty policy
          </a>
          , please{' '}
          <a
            href={`/user/${user.username}/report-user`}
            rel='noreferrer'
            target='_blank'
          >
            report this to our team
          </a>
          .
        </Trans>
      )}
    </div>
  );
};

ShowProjectLinks.displayName = 'ShowProjectLinks';

export default connect(null, mapDispatchToProps)(ShowProjectLinks);
