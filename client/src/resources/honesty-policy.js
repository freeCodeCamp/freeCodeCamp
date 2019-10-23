import React, { Fragment } from 'react';

const HonestyPolicy = () => {
  return (
    <Fragment>
      <p key={1}>
        Before you can claim a verified certification, you must accept our
        Academic Honesty Pledge, which reads:
      </p>
      <p key={2}>
        "I understand that plagiarism means copying someone else’s work and
        presenting the work as if it were my own, without clearly attributing
        the original author."
      </p>
      <p key={3}>
        "I understand that plagiarism is an act of intellectual dishonesty, and
        that people usually get kicked out of university or fired from their
        jobs if they get caught plagiarizing".
      </p>
      <p key={4}>
        "Aside from using open source libraries such as jQuery and Bootstrap,
        and short snippets of code which are clearly attributed to their
        original author, 100% of the code in my projects was written by me, or
        along with another person going through the freeCodeCamp curriculum with
        whom I was pair programming in real time."
      </p>
      <p key={5}>
        "I pledge that I did not plagiarize any of my freeCodeCamp.org work. I
        understand that freeCodeCamp.org’s team will audit my projects to
        confirm this."
      </p>
      <p key={6}>
        In the situations where we discover instances of unambiguous plagiarism,
        we will replace the person in question’s certification with a message
        that "Upon review, this account has been flagged for academic
        dishonesty."
      </p>
      <p key={7}>
        As an academic institution that grants achievement-based certifications,
        we take academic honesty very seriously. If you have any questions about
        this policy, or suspect that someone has violated it, you can email{' '}
        <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a> and we
        will investigate.
      </p>
    </Fragment>
  );
};

export default HonestyPolicy;
