/* eslint-disable */
// @ts-nocheck Likely need to not use ShallowRenderer
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import envData from '../../config/env.json';
import { ShowSettings } from './show-settings';

const { useFeatureIsOnMock, storeGetMock, translateFn } = vi.hoisted(() => ({
  useFeatureIsOnMock: vi.fn(),
  storeGetMock: vi.fn(),
  translateFn: (key: string, options?: Record<string, string>) =>
    options && options.username ? `${key} ${options.username}` : key
}));

vi.mock('../analytics');
vi.mock('@growthbook/growthbook-react', () => ({
  useFeatureIsOn: useFeatureIsOnMock
}));
vi.mock('store', () => ({
  default: {
    get: storeGetMock
  }
}));
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: translateFn
  }),
  withTranslation: () => (Component: React.ComponentType) => {
    const Wrapped = (props: Record<string, unknown>) =>
      React.createElement(Component, { ...props, t: translateFn });
    Wrapped.displayName =
      Component.displayName || Component.name || 'Component';
    return Wrapped;
  }
}));

const { apiLocation } = envData as Record<string, string>;

const createUser = () => ({
  about: '',
  completedChallenges: [],
  email: 'test@example.com',
  is2018DataVisCert: false,
  isA2EnglishCert: false,
  isApisMicroservicesCert: false,
  isJavascriptCertV9: false,
  isJsAlgoDataStructCert: false,
  isBackEndCert: false,
  isDataVisCert: false,
  isFrontEndCert: false,
  isInfosecQaCert: false,
  isQaCertV7: false,
  isInfosecCertV7: false,
  isFrontEndLibsCert: false,
  isFullStackCert: false,
  isRespWebDesignCert: false,
  isRespWebDesignCertV9: false,
  isSciCompPyCertV7: false,
  isDataAnalysisPyCertV7: false,
  isMachineLearningPyCertV7: false,
  isRelationalDatabaseCertV8: false,
  isCollegeAlgebraPyCertV8: false,
  isFoundationalCSharpCertV8: false,
  isJsAlgoDataStructCertV8: false,
  isEmailVerified: false,
  isHonest: true,
  sendQuincyEmail: false,
  username: 'test-user',
  keyboardShortcuts: false
});

const createProps = (
  overrides: Partial<React.ComponentProps<typeof ShowSettings>> = {}
) => ({
  createFlashMessage: vi.fn(),
  isSignedIn: true,
  toggleSoundMode: vi.fn(),
  toggleKeyboardShortcuts: vi.fn(),
  resetEditorLayout: vi.fn(),
  user: createUser(),
  navigate: vi.fn(),
  showLoading: false,
  updateQuincyEmail: vi.fn(),
  updateIsHonest: vi.fn(),
  verifyCert: vi.fn(),
  submitNewAbout: vi.fn(),
  userToken: null,
  path: undefined,
  ...overrides
});

const renderShowSettings = (
  overrides: Partial<React.ComponentProps<typeof ShowSettings>> = {}
) => {
  const props = createProps(overrides);
  const renderer = new ShallowRenderer();
  renderer.render(<ShowSettings {...props} />);
  return { result: renderer.getRenderOutput(), props };
};

const getSidebarNavLinkTargets = (
  result: ReturnType<typeof renderShowSettings>['result']
) => {
  const children = React.Children.toArray(result.props.children);
  const settingsContainer = children.find(
    child =>
      React.isValidElement(child) &&
      child.props.className === 'settings-container'
  );

  if (!settingsContainer) return [];

  const [sidebarNav] = React.Children.toArray(
    settingsContainer.props.children
  ).filter(
    child =>
      React.isValidElement(child) &&
      child.type.displayName === 'SettingsSidebarNav'
  );

  if (!sidebarNav || !React.isValidElement(sidebarNav)) return [];

  const aside = React.Children.only(sidebarNav.type(sidebarNav.props));
  const list = React.Children.only(aside.props.children);
  const items = React.Children.toArray(list.props.children);

  const targets: string[] = [];
  items.forEach(item => {
    if (!React.isValidElement(item)) return;
    React.Children.toArray(item.props.children).forEach(child => {
      if (React.isValidElement(child) && child.props?.to) {
        targets.push(child.props.to);
      }
    });
  });

  return targets;
};

const collectScrollElementNames = (children: React.ReactNode): string[] => {
  return React.Children.toArray(children).flatMap(child => {
    if (!React.isValidElement(child)) return [];
    const nestedNames = child.props?.children
      ? collectScrollElementNames(child.props.children)
      : [];
    return child.props?.name ? [child.props.name, ...nestedNames] : nestedNames;
  });
};

const getScrollElementNames = (
  result: ReturnType<typeof renderShowSettings>['result']
) => {
  const children = React.Children.toArray(result.props.children);
  const settingsContainer = children.find(
    child =>
      React.isValidElement(child) &&
      child.props.className === 'settings-container'
  );

  if (!settingsContainer) return [];

  const [main] = React.Children.toArray(
    settingsContainer.props.children
  ).filter(child => React.isValidElement(child) && child.type === 'main');

  if (!main || !React.isValidElement(main)) return [];

  return collectScrollElementNames(main.props.children);
};

describe('<ShowSettings />', () => {
  beforeEach(() => {
    useFeatureIsOnMock.mockReset();
    useFeatureIsOnMock.mockReturnValue(false);
    storeGetMock.mockReset();
    storeGetMock.mockReturnValue(false);
  });

  it('renders to the DOM when user is logged in', () => {
    const { result, props } = renderShowSettings();
    expect(props.navigate).toHaveBeenCalledTimes(0);

    const children = React.Children.toArray(result.props.children);
    const helmet = children[0] as React.ReactElement;

    expect(result.type.toString()).toBe('Symbol(react.fragment)');
    expect(helmet.props.title).toEqual('buttons.settings | freeCodeCamp.org');
  });

  it('redirects to sign in page when user is not logged in', () => {
    const { result, props } = renderShowSettings({ isSignedIn: false });
    expect(props.navigate).toHaveBeenCalledWith(`${apiLocation}/signin`);
    expect(result.type.displayName).toBe('Loader');
  });

  it('renders the sidebar nav with default sections', () => {
    const { result } = renderShowSettings();
    const targets = getSidebarNavLinkTargets(result);

    expect(targets).toStrictEqual([
      'account',
      'privacy',
      'email',
      'honesty',
      'certifications',
      'legacy-certifications',
      'danger-zone'
    ]);

    const elementNames = getScrollElementNames(result);

    [
      'username',
      'account',
      'privacy',
      'email',
      'honesty',
      'certifications',
      'danger-zone'
    ].forEach(name => expect(elementNames).toContain(name));

    const unmetTargets = targets.filter(
      target => !elementNames.includes(target)
    );
    expect(unmetTargets).toStrictEqual(['legacy-certifications']);
    expect(elementNames).not.toContain('exam-token');
    expect(elementNames).not.toContain('user-token');
  });

  it('includes exam token section when feature flag is enabled', () => {
    useFeatureIsOnMock.mockReturnValue(true);
    const { result } = renderShowSettings();
    const targets = getSidebarNavLinkTargets(result);

    expect(targets).toContain('exam-token');

    const elementNames = getScrollElementNames(result);
    expect(elementNames).toContain('exam-token');
  });

  it('shows user token section only when a user token is present', () => {
    const { result: noTokenResult } = renderShowSettings();
    expect(getSidebarNavLinkTargets(noTokenResult)).not.toContain('user-token');

    const { result: withTokenResult } = renderShowSettings({
      userToken: 'test-token'
    });

    const targets = getSidebarNavLinkTargets(withTokenResult);
    expect(targets).toContain('user-token');

    const elementNames = getScrollElementNames(withTokenResult);
    expect(elementNames).toContain('user-token');
  });
});
