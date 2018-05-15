import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { reverse, sortBy } from 'lodash';
import {
  Table
} from 'react-bootstrap';

import { challengeIdToNameMapSelector } from '../../../entities';
import { userByNameSelector } from '../../../redux';
import { homeURL } from '../../../../utils/constantStrings.json';
import blockNameify from '../../../utils/blockNameify';
import { FullWidthRow } from '../../../helperComponents';
import { Link } from '../../../Router';

const mapStateToProps = createSelector(
  challengeIdToNameMapSelector,
  userByNameSelector,
  (
    idToNameMap,
    { completedChallenges: completedMap = [] }
  ) => ({
    completedMap,
    idToNameMap
  })
);

const propTypes = {
  completedMap: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completedDate: PropTypes.number,
      challengeType: PropTypes.number
    })
  ),
  idToNameMap: PropTypes.objectOf(PropTypes.string)
};

class Timeline extends PureComponent {
  constructor(props) {
    super(props);

    this.renderCompletion = this.renderCompletion.bind(this);
  }

  renderCompletion(completed) {
    const { idToNameMap } = this.props;
    const { id, completedDate } = completed;
    return (
        <tr key={ id }>
          <td>{ blockNameify(idToNameMap[id]) }</td>
          <td>
            <time dateTime={ format(completedDate, 'YYYY-MM-DDTHH:MM:SSZ') }>
              {
                format(completedDate, 'MMMM DD YYYY')
              }
            </time>
          </td>
        </tr>
      );
  }

  render() {
    const { completedMap, idToNameMap } = this.props;
    if (!Object.keys(idToNameMap).length) {
      return null;
    }
    return (
      <FullWidthRow>
        <h2 className='text-center'>Timeline</h2>
        {
          completedMap.length === 0 ?
          <p className='text-center'>
            No challenges have been completed yet.&nbsp;
            <Link to={ homeURL }>
              Get started here.
            </Link>
          </p> :
          <Table condensed={true} striped={true}>
            <thead>
              <tr>
                <th>Challenge</th>
                <th>First Completed</th>
              </tr>
            </thead>
            <tbody>
              {
                reverse(
                  sortBy(
                    completedMap,
                    [ 'completedDate' ]
                  ).filter(({id}) => id in idToNameMap)
                )
                .map(this.renderCompletion)
              }
            </tbody>
          </Table>
        }
      </FullWidthRow>
    );
  }
}


Timeline.displayName = 'Timeline';
Timeline.propTypes = propTypes;

export default connect(mapStateToProps)(Timeline);
