/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/unbound-method */
import React, { Component, useMemo } from 'react';
import { reverse, sortBy } from 'lodash-es';
import {
  Button,
  Modal,
  Table,
  DropdownButton,
  MenuItem
} from '@freecodecamp/react-bootstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { TFunction, withTranslation } from 'react-i18next';

import './timeline.css';
import TimelinePagination from './TimelinePagination';
import { FullWidthRow, Link } from '../../helpers';
import Loadable from '@loadable/component';

import {
  getCertIds,
  getPathFromID,
  getTitleFromId
} from '../../../../../utils';

import { maybeUrlRE } from '../../../utils';
import CertificationIcon from '../../../assets/icons/certification-icon';

import { langCodes } from '../../../../../config/i18n/all-langs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import envData from '../../../../../config/env.json';

const SolutionViewer = Loadable(
  () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('../../SolutionViewer/SolutionViewer')
);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { clientLocale } = envData;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
const localeCode = langCodes[clientLocale];

// Items per page in timeline.
const ITEMS_PER_PAGE = 15;

interface ICompletedMap {
  id: string;
  completedDate: number;
  challengeType: number;
  solution: string;
  files: IFile[];
  githubLink: string;
}

interface ITimelineProps {
  completedMap: ICompletedMap[];
  t: TFunction;
  username: string;
}

interface IFile {
  ext: string;
  contents: string;
}

interface ISortedTimeline {
  id: string;
  completedDate: number;
  files: IFile[];
  githubLink: string;
  solution: string;
}

interface ITimelineInnerProps extends ITimelineProps {
  idToNameMap: Map<string, string>;
  sortedTimeline: ISortedTimeline[];
  totalPages: number;
}

interface ITimeLineInnerState {
  solutionToView: string | null;
  solutionOpen: boolean;
  pageNo: number;
  solution: string | null;
  files: IFile[] | null;
}

class TimelineInner extends Component<
  ITimelineInnerProps,
  ITimeLineInnerState
> {
  constructor(props: ITimelineInnerProps) {
    super(props);

    this.state = {
      solutionToView: null,
      solutionOpen: false,
      pageNo: 1,
      solution: null,
      files: null
    };

    this.closeSolution = this.closeSolution.bind(this);
    this.renderCompletion = this.renderCompletion.bind(this);
    this.viewSolution = this.viewSolution.bind(this);
    this.firstPage = this.firstPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.renderViewButton = this.renderViewButton.bind(this);
  }

  renderViewButton(
    id: string,
    files: IFile[],
    githubLink: string,
    solution: string
  ): React.ReactNode {
    const { t } = this.props;
    if (files && files.length) {
      return (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          id={`btn-for-${id}`}
          onClick={() => this.viewSolution(id, solution, files)}
        >
          {t('buttons.show-code')}
        </Button>
      );
    } else if (githubLink) {
      return (
        <div className='solutions-dropdown'>
          <DropdownButton
            block={true}
            bsStyle='primary'
            className='btn-invert'
            id={`dropdown-for-${id}`}
            title='View'
          >
            <MenuItem
              bsStyle='primary'
              href={solution}
              rel='noopener noreferrer'
              target='_blank'
            >
              {t('buttons.frontend')}
            </MenuItem>
            <MenuItem
              bsStyle='primary'
              href={githubLink}
              rel='noopener noreferrer'
              target='_blank'
            >
              {t('buttons.backend')}
            </MenuItem>
          </DropdownButton>
        </div>
      );
    } else if (maybeUrlRE.test(solution)) {
      return (
        <Button
          block={true}
          bsStyle='primary'
          className='btn-invert'
          href={solution}
          id={`btn-for-${id}`}
          rel='noopener noreferrer'
          target='_blank'
        >
          {t('buttons.view')}
        </Button>
      );
    } else {
      return null;
    }
  }

  renderCompletion(completed: ISortedTimeline): JSX.Element {
    const { idToNameMap, username } = this.props;
    const { id, files, githubLink, solution } = completed;
    const completedDate = new Date(completed.completedDate);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { challengeTitle, challengePath, certPath } = idToNameMap.get(id);
    return (
      <tr className='timeline-row' key={id}>
        <td>
          {certPath ? (
            <Link
              className='timeline-cert-link'
              external={true}
              to={`certification/${username}/${certPath}`}
            >
              {challengeTitle}
              <CertificationIcon />
            </Link>
          ) : (
            <Link to={challengePath}>{challengeTitle}</Link>
          )}
        </td>
        <td>{this.renderViewButton(id, files, githubLink, solution)}</td>
        <td className='text-center'>
          <time dateTime={completedDate.toISOString()}>
            {completedDate.toLocaleString([localeCode, 'en-US'], {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </time>
        </td>
      </tr>
    );
  }
  viewSolution(id: string, solution: string, files: IFile[]): void {
    this.setState(state => ({
      ...state,
      solutionToView: id,
      solutionOpen: true,
      solution,
      files
    }));
  }

  closeSolution() {
    this.setState(state => ({
      ...state,
      solutionToView: null,
      solutionOpen: false,
      solution: null,
      files: null
    }));
  }

  firstPage() {
    this.setState({
      pageNo: 1
    });
  }
  nextPage() {
    this.setState(state => ({
      pageNo: state.pageNo + 1
    }));
  }

  prevPage() {
    this.setState(state => ({
      pageNo: state.pageNo - 1
    }));
  }
  lastPage() {
    this.setState((_, props) => ({
      pageNo: props.totalPages
    }));
  }
  render() {
    const {
      completedMap,
      idToNameMap,
      username,
      sortedTimeline,
      t,
      totalPages = 1
    } = this.props;
    const { solutionToView: id, solutionOpen, pageNo = 1 } = this.state;
    const startIndex = (pageNo - 1) * ITEMS_PER_PAGE;
    const endIndex = pageNo * ITEMS_PER_PAGE;

    return (
      <FullWidthRow>
        <h2 className='text-center'>{t('profile.timeline')}</h2>
        {completedMap.length === 0 ? (
          <p className='text-center'>
            {t('profile.none-completed')}&nbsp;
            <Link to='/learn'>{t('profile.get-started')}</Link>
          </p>
        ) : (
          <Table condensed={true} striped={true}>
            <thead>
              <tr>
                <th>{t('profile.challenge')}</th>
                <th>{t('settings.labels.solution')}</th>
                <th className='text-center'>{t('profile.completed')}</th>
              </tr>
            </thead>
            <tbody>
              {sortedTimeline
                .slice(startIndex, endIndex)
                .map(this.renderCompletion)}
            </tbody>
          </Table>
        )}
        {id && (
          <Modal
            aria-labelledby='contained-modal-title'
            onHide={this.closeSolution}
            show={solutionOpen}
          >
            <Modal.Header closeButton={true}>
              <Modal.Title id='contained-modal-title'>
                {`${username}'s Solution to ${
                  // @ts-expect-error Need better TypeDef for this
                  idToNameMap.get(id).challengeTitle
                }`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SolutionViewer
                // @ts-expect-error Need Better TypeDef
                files={this.state.files}
                solution={this.state.solution}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeSolution}>{t('buttons.close')}</Button>
            </Modal.Footer>
          </Modal>
        )}
        {totalPages > 1 && (
          <TimelinePagination
            firstPage={this.firstPage}
            lastPage={this.lastPage}
            nextPage={this.nextPage}
            pageNo={pageNo}
            prevPage={this.prevPage}
            totalPages={totalPages}
          />
        )}
      </FullWidthRow>
    );
  }
}

function useIdToNameMap(): Map<string, string> {
  const {
    allChallengeNode: { edges }
  } = useStaticQuery(graphql`
    query challengeNodes {
      allChallengeNode {
        edges {
          node {
            fields {
              slug
            }
            id
            title
          }
        }
      }
    }
  `);
  const idToNameMap = new Map();
  for (const id of getCertIds()) {
    idToNameMap.set(id, {
      challengeTitle: `${getTitleFromId(id)} Certification`,
      certPath: getPathFromID(id)
    });
  }
  edges.forEach(
    ({
      node: {
        // @ts-ignore
        id,
        // @ts-ignore
        title,
        // @ts-ignore
        fields: { slug }
      }
    }) => {
      idToNameMap.set(id, { challengeTitle: title, challengePath: slug });
    }
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return idToNameMap;
}

const Timeline = (props: ITimelineProps): JSX.Element => {
  const idToNameMap = useIdToNameMap();
  const { completedMap } = props;
  // Get the sorted timeline along with total page count.
  const { sortedTimeline, totalPages } = useMemo(() => {
    const sortedTimeline = reverse(
      sortBy(completedMap, ['completedDate']).filter(challenge => {
        return idToNameMap.has(challenge.id);
      })
    );
    const totalPages = Math.ceil(sortedTimeline.length / ITEMS_PER_PAGE);
    return { sortedTimeline, totalPages };
  }, [completedMap, idToNameMap]);
  return (
    <TimelineInner
      idToNameMap={idToNameMap}
      sortedTimeline={sortedTimeline}
      totalPages={totalPages}
      {...props}
    />
  );
};

Timeline.displayName = 'Timeline';

export default withTranslation()(Timeline);
