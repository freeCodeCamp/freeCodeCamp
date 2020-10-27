/* eslint-disable react/jsx-sort-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../components/layouts/project-links.css';
import { Button, Modal } from '@freecodecamp/react-bootstrap';
import { maybeUrlRE } from '../utils';
import { Spacer } from '../components/helpers';
import { projectMap } from '../resources/certAndProjectMap';
import { Link } from 'gatsby';
import SolutionViewer from '../components/settings/SolutionViewer';
import { find } from 'lodash';

const propTypes = {
  certName: PropTypes.string,
  fetchProfileForUser: PropTypes.func,
  maybeUser: PropTypes.string,
  name: PropTypes.string,
  user: PropTypes.shape({
    completedChallenges: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        solution: PropTypes.string,
        githubLink: PropTypes.string,
        files: PropTypes.array
      })
    ),
    username: PropTypes.string
  }),
  username: PropTypes.string
};

const initSolutionState = {
  projectTitle: '',
  files: null,
  solution: null,
  isOpen: false
};

const ShowProjectLinks = props => {
  const [solutionState, setSolutionState] = useState(initSolutionState);

  const handleSolutionModalHide = () => setSolutionState(initSolutionState);

  const getProjectSolution = (projectId, projectTitle) => {
    const {
      user: { completedChallenges }
    } = props;

    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );

    if (!completedProject) {
      return null;
    }

    const { solution, githubLink, files } = completedProject;
    const onClickHandler = () =>
      setSolutionState({
        projectTitle,
        files,
        solution,
        isOpen: true
      });

    if (files && files.length) {
      return (
        <button
          onClick={onClickHandler}
          className='project-link-button-override'
        >
          solution
        </button>
      );
    }
    if (githubLink) {
      return (
        <>
          <a href={solution} rel='noopener noreferrer' target='_blank'>
            solution
          </a>
          ,{' '}
          <a href={githubLink} rel='noopener noreferrer' target='_blank'>
            source
          </a>
        </>
      );
    }
    if (maybeUrlRE.test(solution)) {
      return (
        <a
          block={'true'}
          className='btn-invert'
          href={solution}
          rel='noopener noreferrer'
          target='_blank'
        >
          solution
        </a>
      );
    }
    return (
      <button className='project-link-button-override' onClick={onClickHandler}>
        solution
      </button>
    );
  };

  const renderCertification = certName => (
    <ul key={certName}>{renderProjectsFor(certName)}</ul>
  );

  const renderProjectsFor = certName => {
    return projectMap[certName].map(({ link, title, id }) => (
      <li key={id}>
        <Link to={link}>{title}</Link>: {getProjectSolution(id, title)}
      </li>
    ));
  };
  const { username = '' } = props.user;
  return (
    <div>
      As part of this certification, {props.name} built the following projects
      and got all automated test suites to pass:
      <Spacer />
      {renderCertification(props.certName)}
      <Spacer />
      {solutionState.isOpen ? (
        <Modal
          aria-labelledby='solution-viewer-modal-title'
          bsSize='large'
          onHide={handleSolutionModalHide}
          show={solutionState.isOpen}
        >
          <Modal.Header className='this-one?' closeButton={true}>
            <Modal.Title id='solution-viewer-modal-title'>
              Solution for {solutionState.projectTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SolutionViewer
              files={solutionState.files}
              solution={solutionState.solution}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSolutionModalHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      ) : null}
      If you suspect that any of these projects violate the{' '}
      <a
        href='https://www.freecodecamp.org/news/academic-honesty-policy/'
        target='_blank'
        rel='noreferrer'
      >
        academic honesty policy
      </a>
      , please{' '}
      <a
        href={`/user/${username}/report-user`}
        target='_blank'
        rel='noreferrer'
      >
        report this to our team
      </a>
      .
    </div>
  );
};

ShowProjectLinks.propTypes = propTypes;
ShowProjectLinks.displayName = 'ShowProjectLinks';

export default ShowProjectLinks;
