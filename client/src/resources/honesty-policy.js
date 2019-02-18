import React from 'react';

const policy = [
  <p>
    Before we issue our verified certification to a camper, he or she must
    accept our Academic Honesty Pledge, which reads:
  </p>,
  <p>
    "I understand that plagiarism means copying someone else’s work and
    presenting the work as if it were my own, without clearly attributing the
    original author."
  </p>,
  <p>
    "I understand that plagiarism is an act of intellectual dishonesty, and that
    people usually get kicked out of university or fired from their jobs if they
    get caught plagiarizing".
  </p>,
  <p>
    "Aside from using open source libraries such as jQuery and Bootstrap, and
    short snippets of code which are clearly attributed to their original
    author, 100% of the code in my projects was written by me, or along with
    another camper with whom I was pair programming in real time."
  </p>,
  <p>
    "I pledge that I did not plagiarize any of my freeCodeCamp.org work. I
    understand that freeCodeCamp.org’s team will audit my projects to confirm
    this."
  </p>,
  <p>
    In the situations where we discover instances of unambiguous plagiarism, we
    will replace the camper in question’s certification with a message that
    "Upon review, this account has been flagged for academic dishonesty."
  </p>,
  <p>
    As an academic institution that grants achievement-based certifications, we
    take academic honesty very seriously. If you have any questions about this
    policy, or suspect that someone has violated it, you can email{' '}
    <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a>
    &thinsp;and we will investigate.
  </p>
].map((el, i) => ({...el, key: `honesty-${i}`}));

export default policy;
