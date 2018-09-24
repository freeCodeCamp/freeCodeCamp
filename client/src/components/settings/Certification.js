import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import {
  Table,
  Button,
  DropdownButton,
  MenuItem,
  Modal
} from '@freecodecamp/react-bootstrap';
import { Link, navigate } from 'gatsby';

import { projectMap } from '../../resources/certProjectMap';

import SectionHeader from './SectionHeader';
import SolutionViewer from './SolutionViewer';
import { FullWidthRow } from '../helpers';
import { maybeUrlRE } from '../../utils';

const propTypes = {
  completedChallenges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      solution: PropTypes.string,
      githubLink: PropTypes.string,
      challengeType: PropTypes.number,
      completedDate: PropTypes.number,
      files: PropTypes.array
    })
  )
};

const certifications = Object.keys(projectMap);
const initialState = {
  solutionViewer: {
    projectTitle: '',
    files: null,
    solution: null,
    isOpen: false
  }
};

class CertificationSettings extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };
  }

  createHandleLinkButtonClick = to => e => {
    e.preventDefault();
    return navigate(to);
  };
  handleSolutionModalHide = () => this.setState({ ...initialState });

  getProjectSolution = (projectId, projectTitle) => {
    const { completedChallenges } = this.props;
    const completedProject = find(
      completedChallenges,
      ({ id }) => projectId === id
    );
    if (!completedProject) {
      return null;
    }
    const { solution, githubLink, files } = completedProject;
    const onClickHandler = () =>
      this.setState({
        solutionViewer: {
          projectTitle,
          files,
          solution,
          isOpen: true
        }
      });
    if (files && files.length) {
      return (
        <Button
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
        <DropdownButton
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
      );
    }
    if (maybeUrlRE.test(solution)) {
      return (
        <Button
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
      <Button bsStyle='primary' className='btn-invert' onClick={onClickHandler}>
        Show Code
      </Button>
    );
  };

  renderCertifications = certName => (
    <FullWidthRow key={certName}>
      <h3>{certName}</h3>
      <Table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>{this.renderProjectsFor(certName)}</tbody>
      </Table>
    </FullWidthRow>
  );

  renderProjectsFor = certName =>
    projectMap[certName].map(({ link, title, id }) => (
      <tr className='project-row' key={id}>
        <td className='project-title col-sm-8'>
          <Link to={link}>{title}</Link>
        </td>
        <td className='project-solution col-sm-4'>
          {this.getProjectSolution(id, title)}
        </td>
      </tr>
    ));

  render() {
    const {
      solutionViewer: { files, solution, isOpen, projectTitle }
    } = this.state;
    return (
      <section id='certifcation-settings'>
        <SectionHeader>Certifications</SectionHeader>
        {certifications.map(this.renderCertifications)}
        {isOpen ? (
          <Modal
            aria-labelledby='solution-viewer-modal-title'
            bsSize='large'
            onHide={this.handleSolutionModalHide}
            show={isOpen}
            >
            <Modal.Header className='this-one?' closeButton={true}>
              <Modal.Title id='solution-viewer-modal-title'>
                Solution for {projectTitle}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SolutionViewer files={files} solution={solution} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleSolutionModalHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </section>
    );
  }
}

CertificationSettings.displayName = 'CertificationSettings';
CertificationSettings.propTypes = propTypes;

export default CertificationSettings;
