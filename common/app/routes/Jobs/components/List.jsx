import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default React.createClass({
  displayName: 'ListJobs',

  propTypes: {
    handleClick: PropTypes.func,
    jobs: PropTypes.array
  },

  addLocation(locale) {
    if (!locale) {
      return null;
    }
    return (
      <span className='hidden-xs hidden-sm'>
        { locale }
      </span>
    );
  },

  renderJobs(handleClick, jobs = []) {
    return jobs
      .filter(({ isPaid, isApproved, isFilled }) => {
        return isPaid && isApproved && !isFilled;
      })
      .map(({
        id,
        company,
        position,
        isHighlighted,
        locale
      }) => {

        const className = classnames({
          'jobs-list': true,
          'col-xs-12': true,
          'jobs-list-highlight': isHighlighted
        });

        return (
          <ListGroupItem
            className={ className }
            key={ id }
            onClick={ () => handleClick(id) }>
            <div>
              <h4 className='pull-left' style={{ display: 'inline-block' }}>
                <bold>{ company }</bold>
                {' '}
                <span className='hidden-xs hidden-sm'>
                  - { position }
                </span>
              </h4>
              <h4
                className='pull-right'
                style={{ display: 'inline-block' }}>
                { this.addLocation(locale) }
              </h4>
            </div>
          </ListGroupItem>
        );
      });
  },

  render() {
    const {
      handleClick,
      jobs
    } = this.props;

    return (
      <ListGroup>
        { this.renderJobs(handleClick, jobs) }
      </ListGroup>
    );
  }
});
