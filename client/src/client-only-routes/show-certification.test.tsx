import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { Certification } from '@freecodecamp/shared/config/certification-settings';
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
  vi
} from 'vitest';

import i18nTestConfig from '../../i18n/config-for-tests';
import translations from '../../i18n/locales/english/translations.json';
import { createStore } from '../redux/create-store';
import { initialState } from '../redux';
import ShowCertification, {
  CertificateDisplay,
  DonationSection,
  ShareCertBtns
} from './show-certification';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

vi.mock('../utils/get-words');

vi.mock('../components/Donation/multi-tier-donation-form', () => ({
  default: () => <div data-testid='donation-tier-selector' />
}));

const certDate = new Date(2018, 7, 1);
const certURL =
  'https://freecodecamp.org/certification/certifieduser/responsive-web-design';

const renderWithI18n = (ui: React.ReactElement) =>
  render(<I18nextProvider i18n={i18nTestConfig}>{ui}</I18nextProvider>);

describe('<CertificateDisplay />', () => {
  test('renders a non-Microsoft certificate', () => {
    const { container } = renderWithI18n(
      <CertificateDisplay
        certDate={certDate}
        certSlug={Certification.RespWebDesign}
        certTitle='Legacy Responsive Web Design V8'
        certURL={certURL}
        completionTime={300}
        displayName='Full Stack User'
      />
    );

    expect(screen.getByText('Legacy Responsive Web Design V8')).toBeVisible();
    expect(screen.getByTestId('cert-fcc-logo')).toBeInTheDocument();
    expect(screen.queryByTestId('cert-microsoft-logo')).not.toBeInTheDocument();
    expect(
      screen.getByAltText("Quincy Larson's Signature")
    ).toBeInTheDocument();
    expect(
      screen.queryByAltText("Julia Liuson's Signature")
    ).not.toBeInTheDocument();
    expect(container).toHaveTextContent(certURL);
  });

  test('renders a Microsoft certificate', () => {
    renderWithI18n(
      <CertificateDisplay
        certDate={certDate}
        certSlug={Certification.FoundationalCSharp}
        certTitle='Foundational C# with Microsoft'
        certURL='https://freecodecamp.org/certification/certifieduser/foundational-c-sharp-with-microsoft'
        completionTime={300}
        displayName='Full Stack User'
      />
    );

    expect(screen.getByText('Foundational C# with Microsoft')).toBeVisible();
    expect(screen.getByTestId('cert-fcc-logo')).toBeInTheDocument();
    expect(screen.getByTestId('cert-microsoft-logo')).toBeInTheDocument();
    expect(
      screen.getByAltText("Quincy Larson's Signature")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Julia Liuson's Signature")).toBeInTheDocument();
  });

  test.each([
    [Certification.PythonV9, 'Python'],
    [Certification.A2English, 'A2 English for Developers (Beta)'],
    [Certification.B1English, 'B1 English for Developers (Beta)'],
    [Certification.JsV9, 'JavaScript'],
    [Certification.RelationalDbV9, 'Relational Database'],
    [Certification.RespWebDesignV9, 'Responsive Web Design'],
    [Certification.FoundationalCSharp, 'Foundational C# with Microsoft']
  ])('renders the %s certificate title', (certSlug, certTitle) => {
    renderWithI18n(
      <CertificateDisplay
        certDate={certDate}
        certSlug={certSlug}
        certTitle={certTitle}
        certURL={`https://freecodecamp.org/certification/certifieduser/${certSlug}`}
        completionTime={300}
        displayName='Full Stack User'
      />
    );

    expect(screen.getByText(certTitle)).toBeVisible();
  });
});

describe('<DonationSection />', () => {
  test('renders donation copy and form', () => {
    renderWithI18n(
      <DonationSection
        handleProcessing={vi.fn()}
        hideDonationSection={vi.fn()}
        isDonationSubmitted={false}
      />
    );

    expect(
      screen.getByText(translations.donate['only-you'])
    ).toBeInTheDocument();
    expect(screen.getByTestId('donation-tier-selector')).toBeInTheDocument();
  });

  test('renders close button after donation submission', () => {
    const hideDonationSection = vi.fn();

    renderWithI18n(
      <DonationSection
        handleProcessing={vi.fn()}
        hideDonationSection={hideDonationSection}
        isDonationSubmitted={true}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: translations.buttons.close })
    );

    expect(hideDonationSection).toHaveBeenCalledTimes(1);
  });
});

const CERT_SLUG = 'responsive-web-design';
const USERNAME = 'certifieduser';
const PATHNAME = `/certification/${USERNAME}/${CERT_SLUG}`;

const certData = {
  username: USERNAME,
  name: 'Certified User',
  certSlug: CERT_SLUG,
  certTitle: 'Legacy Responsive Web Design',
  completionTime: 300,
  date: new Date('2018-08-03').getTime()
};

const server = setupServer(
  http.get(`*/certificate/showCert/${USERNAME}/${CERT_SLUG}`, () =>
    HttpResponse.json(certData)
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const certifiedUserProfile = {
  username: USERNAME,
  completedChallenges: [],
  isDonating: true
};

const completedFetchState = { pending: false, complete: true, errored: false };

function makeStore(
  sessionUser: object | null,
  otherUser: object | null = null
) {
  return createStore({
    app: {
      ...initialState,
      user: { sessionUser, otherUser },
      userFetchState: completedFetchState
    }
  });
}

const defaultProps = {
  username: USERNAME,
  certSlug: CERT_SLUG,
  location: { pathname: PATHNAME }
};

const renderShowCertification = (store: ReturnType<typeof createStore>) =>
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <ShowCertification {...defaultProps} />
      </I18nextProvider>
    </Provider>
  );

describe('<ShowCertification />', () => {
  test("renders cert details when viewing someone else's cert", async () => {
    renderShowCertification(makeStore(null, certifiedUserProfile));

    expect(
      await screen.findByTestId('successful-completion')
    ).toBeInTheDocument();
    expect(screen.getByTestId('certification-title')).toBeInTheDocument();
    expect(screen.getByTestId('issue-date')).toBeInTheDocument();
  });

  test("hides share buttons when viewing someone else's cert", async () => {
    renderShowCertification(makeStore(null, certifiedUserProfile));

    await screen.findByTestId('certification-title');
    expect(screen.queryByTestId('linkedin-share-btn')).not.toBeInTheDocument();
    expect(screen.queryByTestId('twitter-share-btn')).not.toBeInTheDocument();
  });

  test('renders cert details when viewing your own cert', async () => {
    renderShowCertification(makeStore(certifiedUserProfile));

    expect(
      await screen.findByTestId('successful-completion')
    ).toBeInTheDocument();
    expect(screen.getByTestId('certification-title')).toBeInTheDocument();
  });

  test('shows share buttons when viewing your own cert', async () => {
    renderShowCertification(makeStore(certifiedUserProfile));

    expect(await screen.findByTestId('linkedin-share-btn')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-share-btn')).toBeInTheDocument();
  });
});

describe('<ShareCertBtns />', () => {
  test('renders LinkedIn and Twitter share links', () => {
    renderWithI18n(
      <ShareCertBtns
        certDate={certDate}
        certSlug={Certification.RespWebDesign}
        certTitle='Legacy Responsive Web Design V8'
        certURL={certURL}
        username='certifieduser'
      />
    );

    expect(
      screen.getByRole('link', { name: translations.profile['add-linkedin'] })
    ).toHaveAttribute(
      'href',
      `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Legacy%20Responsive%20Web%20Design%20V8&organizationId=4831032&issueYear=2018&issueMonth=8&certUrl=${certURL}&certId=certifieduser-rwd`
    );
    expect(
      screen.getByRole('link', { name: translations.profile['add-twitter'] })
    ).toHaveAttribute(
      'href',
      `https://x.com/intent/post?text=I just earned the Legacy%20Responsive%20Web%20Design%20V8 certification @freeCodeCamp! Check it out here: ${certURL}`
    );
  });
});
