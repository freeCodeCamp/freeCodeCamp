import React, { PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

export default React.createClass({
  displayName: 'FlashQueue',

  propTypes: {
    messages: PropTypes.array
  },

  renderMessages(messages) {
    return messages.map(() => {
      return (
        <Alert />
      );
    });
  },

  render() {
    const { messages = [] } = this.props;
    return (
      <div>
        { this.renderMessages(messages) }
      </div>
    );
  }
});
