import React from 'react';
import sanitizeHtml from 'sanitize-html';

function BlockIntros({ intros }: { intros: string[] }): JSX.Element {
  return (
    <div className='block-description'>
      {intros.map((title, i) => (
        <p
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(title, {
              allowedTags: ['a', 'b', 'br', 'code', 'em', 'i', 'p', 'pre', 'span', 'strong', 'ul', 'ol', 'li'],
              allowedAttributes: {
                a: ['href', 'rel', 'target'],
                span: ['class'],
                pre: ['class'],
                code: ['class']
              },
              allowedSchemes: ['http', 'https', 'mailto']
            })
          }}
          key={i}
        />
      ))}
    </div>
  );
}

export default BlockIntros;
