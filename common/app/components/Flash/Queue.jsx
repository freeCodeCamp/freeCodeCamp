import React, { createClass, PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

export default createClass({
  displayName: 'FlashQueue',

  propTypes: {
    messages: PropTypes.array
  },

  renderMessages(messages) {
    return messages.map(message => {
      return (
        <Alert>
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
