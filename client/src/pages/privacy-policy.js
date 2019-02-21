import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import { Link, Spacer } from '../components/helpers';

import './common-pages.css';

const PrivacyPolicyPage = () => {
  return (
    <Fragment>
      <Helmet title='Privacy Policy | freeCodeCamp.org' />
      <Spacer />
      <Grid>
        <Row>
          <Col
            className='questions'
            md={6}
            mdOffset={3}
            sm={10}
            smOffset={1}
            xs={12}
          >
            <h2 className='text-center'>
              freeCodeCamp.org Privacy Policy: Questions and Answers
            </h2>
            <hr />
            <p>
              We take your privacy seriously. And we give you full control over
              your data.
            </p>
            <p>
              freeCodeCamp doesn't show you ads or sell your data to anyone. Our
              nonprofit is instead supported by thousands of donors - many of
              whom have learned to code on freeCodeCamp, gotten developer jobs,
              and want to help you do the same.
            </p>
            <h4>Does freeCodeCamp collect anonymous data?</h4>
            <p>
              When you use use the freeCodeCamp.org website, we may collect some
              anonymous data so we can understand how people are using
              freeCodeCamp, and basic facts like which browser they're using.
            </p>
            <h4>In what situations does freeCodeCamp collect personal data?</h4>
            <p>
              If you create a freeCodeCamp account, we will collect some
              personal data so we can follow your progress toward earning
              developer certifications, and so you can customize your developer
              portfolio.
            </p>
            <h4>Can I use freeCodeCamp anonymously?</h4>
            <p>
              Yes. You can access all of freeCodeCamp's articles, videos,
              podcasts, and interactive coding lessons without creating an
              account. And if you don't create an account, we won't collect any
              personal data about you.
            </p>
            <p>
              This said, if you want to earn freeCodeCamp's developer
              certifications, you will need to create an account so we can
              follow your progress through our curriculum.
            </p>
            <h4>If I create an account, what data will you collect?</h4>
            <p>
              We'll ask you for your email address so you can use it to sign
              into freeCodeCamp, and so we can send you announcements and
              helpful programming-related links.
            </p>
            <p>
              When you create an account on freeCodeCamp, we publish a developer
              portfolio page for you on freeCodeCamp.org. If you want, you can
              add details about yourself, like your name, geographic location,
              and a link to your personal website.
            </p>
            <p>
              By default, your developer portfolio will show which freeCodeCamp
              lessons you have completed and when you completed them. It will
              also show your code solutions for our algorithm challenges, links
              any projects you've submitted, and any developer certifications
              you've earned.
            </p>
            <p>
              You have full control over your data, and can set any of these
              details to private, or delete them at any time.
            </p>
            <h4>
              You said I have full control over my data. What does that mean,
              exactly?
            </h4>
            <p>
              It means that at any time, you can download all of your data in a
              convenient JSON format.
            </p>
            <p>
              You can control which data shows up on your developer portfolio.
            </p>
            <p>
              You can also delete any of your personal data, or even delete your
              entire account.
            </p>
            <h4>
              When I delete my personal data from freeCodeCamp, is it really
              deleted from freeCodeCamp's servers?
            </h4>
            <p>
              Yes. When you delete personal data from freeCodeCamp, we
              immediately delete it from our servers.
            </p>
            <p>
              We make emergency backups of our database every day, and we delete
              each of these backups after a few days. So within a few days, your
              personal data won't even exist in our backups.
            </p>
            <h4>Does freeCodeCamp meet Europe's GDPR privacy regulations?</h4>
            <p>
              Yes. freeCodeCamp respects the privacy rights covered by
              Regulation (EU) 2016/679 - the European Union's General Data
              Protection Regulation (GDPR). Our legal team has studied the GDPR,
              and we've built new features to comply with all of its rules.
            </p>
            <p>
              Even though GDPR only protects European citizens, freeCodeCamp is
              extending these protections to everyone all over the world.
            </p>
            <p>
              freeCodeCamp has organized all the information that GDPR requires
              us to give you into this easy-to-read question-and-answer format.
              Our goal is to inform you of your specific rights to access data,
              erase it, port it, rectify it, and object to automated
              decision-making.
            </p>
            <h4>Who has access to my personal data?</h4>
            <p>
              Even though freeCodeCamp has thousands of volunteers, none of
              those people have access to your private data.
            </p>
            <p>
              freeCodeCamp has a few full-time staff, some of whom work directly
              on our databases. They have the ability to view your private data,
              but only do so when providing you with technical support.
            </p>
            <p>
              As for the personal data that you choose to share on your
              developer portfolio, anyone on the internet can see it by
              navigating to your developer portfolio's public URL. Again, we've
              given you full control over what parts of your developer profile
              are public.
            </p>
            <h4>What is freeCodeCamp's Donor Privacy Policy?</h4>
            <p>
              freeCodeCamp will not share our donors' names or personal
              information with anyone outside of our nonprofit organization's
              team. Donors may choose to display that they are donating to
              freeCodeCamp on their freeCodeCamp profile. Otherwise, donor
              information will only be used to process donations and send email
              confirmations. This policy applies to any written, verbal, or
              electronic communication.
            </p>
            <h4>Can any other organizations access my data?</h4>
            <p>
              We don't sell your data to anyone. In order to provide service to
              you, your data does pass through some other services. All of these
              companies are based in the United States.
            </p>
            <p>
              We use Amazon Web Services, Azure, and mLab for our servers and
              databases. You can read the privacy policy for{' '}
              <Link to='https://aws.amazon.com/privacy/'>
                Amazon Web Services
              </Link>
              ,{' '}
              <Link to='https://privacy.microsoft.com/en-us/privacystatement'>
                Microsoft Azure
              </Link>
              , and{' '}
              <Link to='https://mlab.com/company/legal/privacy/'>mLab</Link>.
            </p>
            <p>
              We use Stripe and PayPal to process donations. You can read the
              privacy policy for{' '}
              <Link to='https://stripe.com/us/privacy'>Stripe</Link> and for{' '}
              <Link to='https://www.paypal.com/us/webapps/mpp/ua/privacy-full'>
                PayPal
              </Link>
              .
            </p>
            <p>
              We use the CloudFlare and Netlify Content Delivery Networks so
              that freeCodeCamp is fast in all parts of the world. You can read
              the privacy policy for{' '}
              <Link to='https://www.cloudflare.com/privacypolicy/'>
                CloudFlare
              </Link>{' '}
              and <Link to='https://www.netlify.com/privacy/'>Netlify</Link>{' '}
              online.
            </p>
            <p>
              We use Auth0 to sign you into freeCodeCamp. You can read{' '}
              <Link to='https://auth0.com/privacy'>
                the privacy policy for Auth0 online
              </Link>
              .
            </p>
            <p>
              We use Google Analytics to help us understand the demographics of
              our community and how people are using freeCodeCamp. You can opt
              out of Google Analytics on freeCodeCamp by{' '}
              <Link to='https://tools.google.com/dlpage/gaoptout'>
                installing this browser plugin
              </Link>
              . You can read{' '}
              <Link to='https://www.google.com/analytics/terms/'>
                the privacy policy for Google Analytics online
              </Link>
              .
            </p>
            <p>
              For your convenience, we give you the option to sign in using
              GitHub, Google, or Facebook if you don't want to use your email
              address to sign in. If you choose to use one of these sign in
              options, some of your freeCodeCamp data will be shared with these
              companies. You can read{' '}
              <Link to='https://help.github.com/articles/github-privacy-statement/'>
                the privacy policy for GitHub
              </Link>{' '}
              and for{' '}
              <Link to='https://policies.google.com/privacy'>Google</Link> and
              for <Link to='https://www.facebook.com/policy.php'>Facebook</Link>
              .
            </p>
            <h4>I have questions about my privacy on freeCodeCamp.</h4>
            <p>
              We're happy to answer them. Email us at{' '}
              <a href='mailto:privacy@freecodecamp.org'>
                privacy@freecodecamp.org
              </a>
              .
            </p>
            <h4>How can I find out about changes?</h4>
            <p>
              This version of freeCodeCamp’s privacy questions and answers took
              effect May 25, 2018.
            </p>
            <p>
              freeCodeCamp will announce the next version by email. In the
              meantime, freeCodeCamp may update its contact information in these
              questions and answers by updating this page
              (https://www.freecodecamp.org/privacy-policy).
            </p>
            <p>
              freeCodeCamp may change how it announces changes in a future
              version of these questions and answers.
            </p>
            <h4>
              That's all, folks. Know your privacy rights, and stay safe out
              there!
            </h4>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

PrivacyPolicyPage.displayName = 'PrivacyPolicyPage';

export default PrivacyPolicyPage;
