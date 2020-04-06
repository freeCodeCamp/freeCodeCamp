import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';

const propTypes = {
  text: PropTypes.string.isRequired
};

function SanitizedSpan({ text = '' }) {
  const sanitizedText = sanitizeHtml(text, {
    allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr', 'br', 'pre']
  });
  return <span dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
}

SanitizedSpan.displayName = 'SanitizedSpan';
SanitizedSpan.propTypes = propTypes;

export default SanitizedSpan;
