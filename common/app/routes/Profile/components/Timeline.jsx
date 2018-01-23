import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import _ from 'lodash';
import {
  Table
} from 'react-bootstrap';

import { challengeIdToNameMapSelector } from '../../../entities';
import { userSelector } from '../../../redux';
import { homeURL } from '../../../../utils/constantStrings.json';
import blockNameify from '../../../utils/blockNameify';
import { FullWidthRow } from '../../../helperComponents';
import { Link } from '../../../Router';

const mapStateToProps = createSelector(
  challengeIdToNameMapSelector,
  userSelector,
  (
    idToNameMap,
    { challengeMap: completedMap = {} }
  ) => ({
    completedMap,
    idToNameMap
  })
);

const propTypes = {
  completedMap: PropTypes.shape({
    id: PropTypes.string,
    completedDate: PropTypes.number,
    lastUpdated: PropTypes.number
  }),
  idToNameMap: PropTypes.objectOf(PropTypes.string)
};

function renderCompletion(idToNameMap, completed) {
  const { id, completedDate, lastUpdated } = completed;
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
        <td>{
          lastUpdated ?
          <time dateTime={ format(lastUpdated, 'YYYY-MM-DDTHH:MM:SSZ') }>
            {
              format(lastUpdated, 'MMMM DD YYYY')
            }
          </time> :
          ''
          }</td>
      </tr>
    );
}

function Timeline({ completedMap, idToNameMap }) {
  if (!idToNameMap) {
    return null;
  }
  const renderCompletionWithIdNameMap = _.curry(renderCompletion)(idToNameMap);

  return (
      <FullWidthRow>
        <h2 className='text-center'>Timeline</h2>
        {
          Object.keys(completedMap).length === 0 ?
          <p className='text-center'>
            No challenges have been completed yet.&nbsp;
            <Link to={ `/${homeURL}` }>
              Get started here.
            </Link>
          </p> :
          <Table condensed={true} striped={true}>
            <thead>
              <tr>
                <th>Challenge</th>
                <th>First Completed</th>
                <th>Last Changed</th>
              </tr>
            </thead>
            <tbody>
              {
                _.reverse(
                  _.sortBy(
                    Object.keys(completedMap).map(key => completedMap[key]),
                  [ 'completedDate' ]
                  )
                )
                .map(renderCompletionWithIdNameMap)
              }
            </tbody>
          </Table>
        }
      </FullWidthRow>
  );
}


Timeline.displayName = 'Timeline';
Timeline.propTypes = propTypes;

export default connect(mapStateToProps)(Timeline);
