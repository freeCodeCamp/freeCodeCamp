import React from 'react';

import CertificationLayout from '../../src/components/layouts/certification';
import DefaultLayout from '../../src/components/layouts/default';
import FourOhFourPage from '../../src/pages/404';

interface LayoutSelectorProps {
  element: JSX.Element;
  props: {
    data: { challengeNode?: { challenge?: { usesMultifileEditor?: boolean } } };
    location: { pathname: string };
    pageContext?: { challengeMeta?: { block?: string; superBlock?: string } };
    params: { '*'?: string };
    path: string;
  };
}
export default function layoutSelector({
  element,
  props
}: LayoutSelectorProps): JSX.Element {
  const {
    location: { pathname }
  } = props;

  const isDailyChallenge = props.path === '/learn/daily-coding-challenge/*';
  const dailyChallengeParam = props.params['*'];

  const isChallenge = !!props.pageContext?.challengeMeta || isDailyChallenge;

  // Return raw element for status endpoints without any layout
  if (/^\/status\//.test(pathname)) {
    return element;
  }

  if (element.type === FourOhFourPage) {
    return (
      <DefaultLayout pathname={pathname} showFooter={true}>
        {element}
      </DefaultLayout>
    );
  } else if (/\/certification\//.test(pathname)) {
    return (
      <CertificationLayout pathname={pathname}>{element}</CertificationLayout>
    );
  } else if (isChallenge) {
    return (
      <DefaultLayout
        pathname={pathname}
        showFooter={false}
        isChallenge={true}
        isDailyChallenge={isDailyChallenge}
        dailyChallengeParam={dailyChallengeParam}
        usesMultifileEditor={
          props.data?.challengeNode?.challenge?.usesMultifileEditor
        }
        block={props.pageContext?.challengeMeta?.block}
        superBlock={props.pageContext?.challengeMeta?.superBlock}
      >
        {element}
      </DefaultLayout>
    );
  } else {
    return (
      <DefaultLayout pathname={pathname} showFooter={true}>
        {element}
      </DefaultLayout>
    );
  }
}
