/* eslint-disable react/jsx-sort-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Button,
  DropdownButton,
  MenuItem,
  Modal
} from '@freecodecamp/react-bootstrap';
import { maybeUrlRE } from '../utils';
import { FullWidthRow, Spacer } from '../components/helpers';
import { createSelector } from 'reselect';
import { projectMap } from '../resources/certAndProjectMap';
import { Link } from 'gatsby';
import SolutionViewer from '../components/settings/SolutionViewer';
import { find } from 'lodash';
import { userSelector } from '../redux';
import { connect } from 'react-redux';

const propTypes = {
  certTitle: PropTypes.string,
  name: PropTypes.string,
  user: PropTypes.shape({
    about: PropTypes.string,
    completedChallenges: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        solution: PropTypes.string,
        githubLink: PropTypes.string,
        challengeType: PropTypes.number,
        completedDate: PropTypes.number,
        files: PropTypes.array
      })
    ),
    username: PropTypes.string
  })
};
const mapStateToProps = createSelector(
  userSelector,
  user => ({
    user
  })
);

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
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          onClick={onClickHandler}
        >
          Show Code
        </Button>
      );
    }
    if (githubLink) {
      return (
        <div className='solutions-dropdown'>
          <DropdownButton
            block={true}
            bsStyle='primary'
            className='btn-invert'
            id={`dropdown-for-${projectId}`}
            title='Show Solutions'
          >
            <MenuItem
              bsStyle='primary'
              href={solution}
              rel='noopener noreferrer'
              target='_blank'
            >
              Front End
            </MenuItem>
            <MenuItem
              bsStyle='primary'
              href={githubLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              Back End
            </MenuItem>
          </DropdownButton>
        </div>
      );
    }
    if (maybeUrlRE.test(solution)) {
      return (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          href={solution}
          rel='noopener noreferrer'
          target='_blank'
        >
          Show Solution
        </Button>
      );
    }
    return (
      <Button
        block={true}
        bsStyle='primary'
        className='btn-invert'
        onClick={onClickHandler}
      >
        Show Code
      </Button>
    );
  };

  const renderCertification = certName => (
    <FullWidthRow key={certName}>
      <Spacer />
      <h3 className='text-center'>{certName}</h3>
      <Table>
        <tbody>{renderProjectsFor(certName)}</tbody>
      </Table>
    </FullWidthRow>
  );

  const renderProjectsFor = certName => {
    return projectMap[certName].map(({ link, title, id }) => (
      <tr className='project-row' key={id}>
        <td className='project-title col-sm-8'>
          <Link to={link}>{title}</Link>
        </td>
        <td className='project-solution col-sm-4'>
          {getProjectSolution(id, title)}
        </td>
      </tr>
    ));
  };
  return (
    <div>
      As part of this certification, {props.name} built the following projects
      and got all automated test suites to pass:
      {renderCertification(props.certTitle)}
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
      >
        academic honesty policy
      </a>
      , please{' '}
      <a
        href={`/user/${props.user.username}/report-user`}
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

export default connect(mapStateToProps)(ShowProjectLinks);
