import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import { Link, Spacer } from '../components/helpers';

import './common-pages.css';

const TermsOfServicePage = () => {
  return (
    <Fragment>
      <Helmet title='Terms of Service | freeCodeCamp.org' />
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
            <h2 className='text-center'>freeCodeCamp's Terms of Service</h2>
            <hr />
            <p>
              These terms govern use of the website{' '}
              <Link to='https://www.freecodecamp.org'>
                https://www.freecodecamp.org
              </Link>
              . To use the website, you must agree to these terms with Free Code
              camp, Inc., the nonprofit company that runs the website.
            </p>
            <p>
              The company may offer other products and services, under different
              terms. These terms apply only to use of the website.
            </p>
            <h4>Skip to:</h4>
            <ul>
              <li>
                <a href='#important-terms'>Important Terms</a>
              </li>
              <li>
                <a href='#permission'>Your Permission to Use the Website</a>
              </li>
              <li>
                <a href='#conditions'>Conditions for Use of the Website</a>
              </li>
              <li>
                <a href='#acceptable-use'>Acceptable Use</a>
              </li>
              <li>
                <a href='#content-standards'>Content Standards</a>
              </li>
              <li>
                <a href='#enforcement'>Enforcement</a>
              </li>
              <li>
                <a href='#your-account'>Your Account</a>
              </li>
              <li>
                <a href='#your-content'>Your Content</a>
              </li>
              <li>
                <a href='#your-responsibility'>Your Responsibility</a>
              </li>
              <li>
                <a href='#disclaimers'>Disclaimers</a>
              </li>
              <li>
                <a href='#limits-on-liability'>Limits on Liability</a>
              </li>
              <li>
                <a href='#feedback'>Feedback</a>
              </li>
              <li>
                <a href='#termination'>Termination</a>
              </li>
              <li>
                <a href='#disputes'>Disputes</a>
              </li>
              <li>
                <a href='#general-terms'>General Terms</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <a href='#changes'>Changes</a>
              </li>
            </ul>
            <h4 id='important-terms'>Important Terms</h4>
            <p>
              These terms include a number of important provisions that affect
              your rights and responsibilities, such as the disclaimers in
              Disclaimers, limits on the company’s liability to you in Limits on
              Liability, your agreement to cover the company for damages caused
              by your misuse of the website in Responsibility for Your Use, and
              an agreement to arbitrate disputes in Disputes.
            </p>
            <h4 id='permission'>Your Permission to Use the Website</h4>
            <p>
              Subject to these terms, the company gives you permission to use
              the website. That permission isn’t exclusive to you, and you can’t
              transfer it to anyone else. Others need to agree to these terms
              for themselves to use the website.
            </p>
            <h4 id='conditions'>Conditions for Use of the Website</h4>
            <p>
              Your permission to use the website is subject to the following
              conditions:
            </p>
            <p>You must be at least thirteen years old.</p>
            <p>
              You may no longer use the website if the company contacts you
              directly to say that you may not.
            </p>
            <p>
              You must use the website in accordance with Acceptable Use and
              Content Standards.
            </p>
            <h4 id='acceptable-use'>Acceptable Use</h4>
            <p>You may not break the law using the website.</p>
            <p>
              You may not use or try to use another’s account on the website
              without their specific permission.
            </p>
            <p>
              You may not buy, sell, or otherwise trade in user names or other
              unique identifiers on the website.
            </p>
            <p>
              You may not send advertisements, chain letters, or other
              solicitations through the website, or use the website to gather
              addresses for commercial mailing lists.
            </p>
            <p>
              You may not automate access to the website, or monitor the
              website, such as with a web crawler, browser plug-in or add-on, or
              other computer program that is not a web browser. You may crawl
              the website to index it for a publicly available search engine.
            </p>
            <p>
              You may not use the website to send e-mail to distribution lists,
              newsgroups, or group mail aliases.
            </p>
            <p>
              You may not falsely imply that you’re affiliated with or endorsed
              by the company.
            </p>
            <p>
              You may not hyperlink to images or other non-hypertext content on
              the website.
            </p>
            <p>
              You may not remove any marks showing proprietary ownership from
              materials you download from the website.
            </p>
            <p>
              You may not show any part of the website on other websites with
              using iframes.
            </p>
            <p>
              You may not disable, avoid, or circumvent any security or access
              restrictions of the website.
            </p>
            <p>
              You may not strain infrastructure of the website with an
              unreasonable volume of requests, or requests designed to impose an
              unreasonable load on information systems underlying the website.
            </p>
            <p>
              You may not encourage or help anyone in violation of these terms.
            </p>
            <p>You may not impersonate others through the website.</p>
            <h4 id='content-standards'>Content Standards</h4>
            <p>
              You may not submit content to the website that is illegal,
              offensive, or otherwise harmful to others. This includes content
              that is harassing, inappropriate, or abusive.
            </p>
            <p>
              You may not submit content to the website that violates the law,
              infringes anyone’s intellectual property rights, violates anyone’s
              privacy, or breaches agreements you have with others.
            </p>
            <p>
              You may not submit content to the website containing malicious
              computer code, such as computer viruses or spyware.
            </p>
            <p>
              You may not submit content to the website as a mere placeholder,
              to hold a particular address, user name, or other unique
              identifier.
            </p>
            <p>
              You may not use the website to disclose information that you don’t
              have the right to disclose, like others’ confidential information.
            </p>
            <h4 id='enforcement'>Enforcement</h4>
            <p>
              The company may investigate and prosecute violations of these
              terms to the fullest legal extent. The company may notify and
              cooperate with law enforcement authorities in prosecuting
              violations of the law and these terms.
            </p>
            <p>
              The company reserves the right to change, redact, and delete
              content on the website for any reason. If you believe someone has
              submitted content to the website in violation of these terms,
              please contact us immediately.
            </p>
            <h4 id='your-account'>Your Account</h4>
            <p>
              You must create and log into an account to use some features of
              the website.
            </p>
            <p>
              To create an account, you must provide some information about
              yourself. If you create an account, you agree to provide, at a
              minimum, a valid e-mail address, and to keep that address
              up-to-date. You may close your account at any time by logging into
              your account and clicking the button on your account settings
              page.
            </p>
            <p>
              You agree to be responsible for all action taken using your
              account, whether authorized by you or not, until you either close
              your account or notify the company that your account has been
              compromised. You agree to notify the company immediately if you
              suspect your account has been compromised. You agree to select a
              secure password for your account, and keep it secret.
            </p>
            <p>
              The company may restrict, suspend, or close your account on the
              website according to its policy for handling copyright-related
              takedown requests, or if the company reasonably believes that
              you’ve breached these terms.
            </p>
            <h4 id='your-content'>Your Content</h4>
            <p>
              Nothing in these terms gives the company any ownership rights in
              intellectual property that you share with the website, such as
              your account information or other content you submit to the
              website. Nothing in these terms gives you any ownership rights in
              the company’s intellectual property, either.
            </p>
            <p>
              Between you and the company, you remain solely responsible for
              content you submit to the website. You agree not to wrongly imply
              that content you submit to the website is sponsored or approved by
              the company. These terms do not obligate the company to store,
              maintain, or provide copies of content you submit.
            </p>
            <p>
              Content you submit to the website belongs to you, and you decide
              what permission to give others for it. But at a minimum, you
              license the company to provide content that you submit to the
              website to other users of the website. That special license allows
              the company to copy, publish, and analyze content you submit to
              the website.
            </p>
            <p>
              When content you submit is removed from the website, whether by
              you or by the company, the company’s special license ends when the
              last copy disappears from the company’s backups, caches, and other
              systems. Other licenses you apply to content you submit may
              continue after your content is removed. Those licenses may give
              others, or the company itself, the right to share your content
              through the website again.
            </p>
            <p>
              Others who receive content you submit to the website may violate
              the terms on which you license your content. You agree that the
              company will not be liable to you for those violations or their
              consequences.
            </p>
            <h4 id='your-responsibility'>Your Responsibility</h4>
            <p>
              You agree to indemnify the company from legal claims by others
              related to your breach of these terms, or breach of these terms by
              others using your account on the website. Both you and the company
              agree to notify the other side of any legal claims for which you
              might have to indemnify the company as soon as possible. If the
              company fails to notify you of a legal claim promptly, you won’t
              have to indemnify the company for damages that you could have
              defended against or mitigated with prompt notice. You agree to
              allow the company to control investigation, defense, and
              settlement of legal claims for which you would have to indemnify
              the company, and to cooperate with those efforts. The company
              agrees not to agree to any settlement that admits fault for you or
              imposes obligations on you without your prior agreement.
            </p>
            <h4 id='disclaimers'>Disclaimers</h4>
            <p>
              You accept all risk of using the website and content on the
              website. As far as the law allows, the company provides the
              website as is, without any warranty whatsoever.
            </p>
            <p>
              The website may hyperlink to and integrate websites and services
              run by others. The company does not make any warranty about
              services run by others, or content they may provide. Use of
              services run by others may be governed by other terms between you
              and the one running service.
            </p>
            <h4 id='limits-on-liability'>Limits on Liability</h4>
            <p>
              The company will not be liable to you for breach-of-contract
              damages company personnel could not have reasonably foreseen when
              you agreed to these terms.
            </p>
            <p>
              As far as the law allows, the company’s total liability to you for
              claims of any kind that are related to the website or content on
              the website will be limited to $50.
            </p>
            <h4 id='feedback'>Feedback</h4>
            <p>
              The company welcomes your feedback and suggestions for the
              website. See the Contact section below for ways to get in touch
              with us.
            </p>
            <p>
              You agree that the company will be free to act on feedback and
              suggestions you provide, and that the company won’t have to notify
              you that your feedback was used, get your permission to use it, or
              pay you. You agree not to submit feedback or suggestions that you
              believe might be confidential or proprietary, to you or others.
            </p>
            <h4 id='termination'>Termination</h4>
            <p>
              Either you or the company may end the agreement written out in
              these terms at any time. When our agreement ends, your permission
              to use the website also ends.
            </p>
            <p>
              The following provisions survive the end of our agreement: Your
              Content, Feedback, Your Responsibility, Disclaimers, Limits on
              Liability, and General Terms.
            </p>
            <h4 id='disputes'>Disputes</h4>
            <p>
              California law will govern any dispute, including any legal
              proceedings, related to these terms or your use of the website.
            </p>
            <p>
              You and the company agree to seek injunctions related to these
              terms only in state or federal court in San Francisco, California.
              Neither you nor the company will object to jurisdiction, forum, or
              venue in those courts.
            </p>
            <p>
              Other than to seek an injunction or for claims under the Computer
              Fraud and Abuse Act, you and the company will resolve any Dispute
              by binding American Arbitration Association arbitration.
              Arbitration will follow the AAA’s Commercial Arbitration Rules and
              Supplementary Procedures for Consumer Related Disputes.
              Arbitration will happen in San Francisco, California. You will
              settle any dispute as an individual, and not as part of a class
              action or other representative proceeding, whether as the
              plaintiff or a class member. No arbitrator will consolidate any
              dispute with any other arbitration without the company’s
              permission.
            </p>
            <p>
              Any arbitration award will include costs of the arbitration,
              reasonable attorneys’ fees, and reasonable costs for witnesses.
              You or the company may enter arbitration awards in any court with
              jurisdiction.
            </p>
            <h4 id='general-terms'>General Terms</h4>
            <p>
              If a provision of these terms is unenforceable as written, but
              could be changed to make it enforceable, that provision should be
              modified to the minimum extent necessary to make it enforceable.
              Otherwise, that provision should be removed.
            </p>
            <p>
              You may not assign your agreement with the company. The company
              may assign your agreement to any affiliate of the company, any
              other company that obtains control of the company, or any other
              company that buys assets of the company related to the website.
              Any attempted assignment against these terms has no legal effect.
            </p>
            <p>
              Neither the exercise of any right under this Agreement, nor waiver
              of any breach of this Agreement, waives any other breach of this
              Agreement.
            </p>
            <p>
              These terms embody all the terms of agreement between you and the
              company about use of the website. These terms entirely replace any
              other agreements about your use of the website, written or not.
            </p>
            <h4 id='contact'>Contact</h4>
            <p>
              You may notify the company under these terms, and send questions
              to the company, at team@freecodecamp.org.
            </p>
            <p>
              The company may notify you under these terms using the e-mail
              address you provide for your account on the website, or by posting
              a message to the homepage of the website or your account page.
            </p>
            <h4 id='changes'>Changes</h4>
            <p>
              The company last updated these terms on May 25, 2018, and may
              update these terms again. The company will post all updates to the
              website. For updates that contain substantial changes, the company
              agrees to e-mail you, if you’ve created an account and provided a
              valid e-mail address. The company may also announce updates with
              special messages or alerts on the website.
            </p>
            <p>
              Once you get notice of an update to these terms, you must agree to
              the new terms in order to keep using the website.
            </p>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

TermsOfServicePage.displayName = 'TermsOfServicePage';

export default TermsOfServicePage;
