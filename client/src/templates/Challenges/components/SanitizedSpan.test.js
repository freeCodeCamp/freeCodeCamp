/* global expect */

import React from 'react';
import { render } from '@testing-library/react';

import SanitizedSpan from './SanitizedSpan';

describe('<SanitizedSpan />', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SanitizedSpan
        text={`some text <script>dangerous code</script>
    more <wbr>text <br> <img alt='danger' src='https://attack.com'>`}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('removes scripts, images, etc', () => {
    const { queryByAltText, queryByText } = render(
      <SanitizedSpan
        text={`some text <script>dangerous code</script>
       more text <img alt='danger' src='https://attack.com'>`}
      />
    );

    expect(queryByText('dangerous code', { ignore: false })).toBeNull();
    expect(queryByAltText('danger')).toBeNull();
  });

  it('leaves in line breaks', () => {
    const { container } = render(
      <SanitizedSpan
        text={`some text <br>
       more text`}
      />
    );
    expect(container.querySelector('br')).not.toBeNull();
  });
});
