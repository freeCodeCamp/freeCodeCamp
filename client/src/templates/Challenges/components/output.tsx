import { isEmpty } from 'lodash-es';
import React from 'react';
import i18next from 'i18next';
import sanitizeHtml from 'sanitize-html';
import './output.css';

interface OutputProps {
  defaultOutput: string;
  output: string;
}

function reformatHTMLEntities(message: string, priorMessage: string) {
  let reformattedHTML = message;
  console.log('OG MESSAGE: ' + message);
  console.log('PRIOR: ' + priorMessage);

  if (priorMessage.includes('&apos;')) {
    reformattedHTML = reformattedHTML.replaceAll("'", '&amp;apos;');
  }

  if (priorMessage.includes('&quot;')) {
    reformattedHTML = reformattedHTML.replaceAll('"', '&amp;quot;');
  }

  if (priorMessage.includes('&gt;')) {
    reformattedHTML = reformattedHTML.replaceAll('&gt;', '&amp;gt;');
  }

  if (priorMessage.includes('&lt;')) {
    reformattedHTML = reformattedHTML.replaceAll('&lt;', '&amp;lt;');
  }

  if (priorMessage.includes('&amp;')) {
    reformattedHTML = reformattedHTML.replaceAll('&amp;', '&amp;amp;');
  }

  return reformattedHTML;
}

function Output({ defaultOutput, output }: OutputProps): JSX.Element {
  const priorMessage = output;
  const message = sanitizeHtml(!isEmpty(output) ? output : defaultOutput, {
    allowedTags: ['b', 'i', 'em', 'strong', 'code', 'wbr']
  });

  return (
    <pre
      className='output-text'
      data-playwright-test-label='output-text'
      role='region'
      aria-label={i18next.t('learn.editor-tabs.console')}
      dangerouslySetInnerHTML={{
        __html: reformatHTMLEntities(message, priorMessage)
      }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    />
  );
}

export default Output;
