/* eslint-disable camelcase */
/* This is used for testing. If a translations.json file doesn't match the
 * structure here exactly, the tests will fail.
 */
const translationsSchema = {
  meta: {
    title: 'Learn to Code — For Free — Coding Courses for Busy People',
    description: 'Learn to Code — For Free',
    'social-description': 'Learn to Code — For Free',
    keywords: [
      'javascript',
      'js',
      'website',
      'web',
      'development',
      'free',
      'code',
      'camp',
      'course',
      'courses',
      'html',
      'css',
      'react',
      'redux',
      'api',
      'front',
      'back',
      'end',
      'learn',
      'tutorial',
      'programming'
    ],
    'youre-unsubscribed': 'You have been unsubscribed'
  },
  buttons: {
    'logged-in-cta-btn': "Get started (it's free)",
    'logged-out-cta-btn': "Sign in to save your progress (it's free)",
    'view-curriculum': 'View the Curriculum',
    'first-lesson': 'Go to the first lesson',
    close: 'Close',
    edit: 'Edit',
    'show-code': 'Show Code',
    'show-solution': 'Show Solution',
    frontend: 'Front End',
    backend: 'Back End',
    view: 'View',
    'show-cert': 'Show Certification',
    'claim-cert': 'Claim Certification',
    'save-progress': 'Save Progress',
    'accepted-honesty': 'You have accepted our Academic Honesty Policy.',
    agree: 'Agree',
    'save-portfolio': 'Save this portfolio item',
    'remove-portfolio': 'Remove this portfolio item',
    'add-portfolio': 'Add a new portfolio Item',
    'download-data': 'Download your data',
    public: 'Public',
    private: 'Private',
    off: 'Off',
    on: 'On',
    'sign-in': 'Sign in',
    'sign-out': 'Sign out',
    curriculum: 'Curriculum',
    forum: 'Forum',
    radio: 'Radio',
    profile: 'Profile',
    news: 'News',
    donate: 'Donate',
    'update-settings': 'Update my account settings',
    'sign-me-out': 'Sign me out of freeCodeCamp',
    'flag-user': "Flag This User's Account for Abuse",
    'current-challenge': 'Go to current challenge',
    'try-again': 'Try again',
    menu: 'Menu',
    settings: 'Settings',
    'take-me': 'Take me to the Challenges',
    'check-answer': 'Check your answer',
    'get-hint': 'Get a Hint',
    'ask-for-help': 'Ask for Help',
    'create-post': 'Create a help post on the forum',
    cancel: 'Cancel',
    'reset-lesson': 'Reset this lesson',
    run: 'Run',
    'run-test': 'Run the Tests',
    reset: 'Reset',
    'reset-code': 'Reset All Code',
    help: 'Help',
    'get-help': 'Get Help',
    'watch-video': 'Watch a Video',
    resubscribe: 'You can click here to resubscribe',
    'click-here': 'Click here to sign in',
    save: 'Save',
    'no-thanks': 'No thanks',
    'yes-please': 'Yes please',
    'update-email': 'Update my Email',
    'verify-email': 'Verify Email',
    'submit-and-go': 'Submit and go to next challenge',
    'go-to-next': 'Go to next challenge',
    'ask-later': 'Ask me later'
  },
  landing: {
    'big-heading-1': 'Learn to code at home.',
    'big-heading-2': 'Build projects.',
    'big-heading-3': 'Earn certifications.',
    'h2-heading':
      'Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:',
    'hero-img-description':
      'freeCodeCamp students at a local study group in South Korea.',
    'as-seen-in': 'As seen in:',
    testimonials: {
      heading: 'Here is what our alumni say about freeCodeCamp:',
      shawn: {
        location: '<strong>Shawn Wang</strong> in Singapore',
        occupation: 'Software Engineer at <strong>Amazon</strong>',
        testimony:
          '"It\'s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life.</strong>"'
      },
      sarah: {
        location: '<strong>Sarah Chima</strong> in Nigeria',
        occupation: 'Software Engineer at <strong>ChatDesk</strong>',
        testimony:
          '"<strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."'
      },
      emma: {
        location: '<strong>Emma Bostian</strong> in Sweden',
        occupation: 'Software Engineer at <strong>Spotify</strong>',
        testimony:
          "\"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify.\""
      }
    },
    'certification-heading': 'Earn free verified certifications in:'
  },
  settings: {
    'share-projects':
      'Share your non-freeCodeCamp projects, articles or accepted pull requests.',
    privacy:
      'The settings in this section enable you to control what is shown on your freeCodeCamp public portfolio.',
    data:
      'To see what data we hold on your account, click the "Download your data" button below',
    disabled: 'Your certifications will be disabled, if set to private.',
    'claim-legacy':
      "Once you've earned the following freeCodeCamp certifications, you'll be able to claim the {{cert}}:",
    for: 'Account Settings for {{username}}',
    username: {
      'contains invalid characters':
        'Username "{{username}}" contains invalid characters',
      'is too short': 'Username "{{username}}" is too short',
      'is a reserved error code':
        'Username "{{username}}" is a reserved error code',
      unavailable: 'Username not available',
      validating: 'Validating username...',
      available: 'Username is available',
      change:
        'Please note, changing your username will also change the URL to your profile and your certifications.'
    },
    labels: {
      username: 'Username',
      name: 'Name',
      location: 'Location',
      picture: 'Picture',
      about: 'About',
      personal: 'Personal Website',
      title: 'Title',
      url: 'URL',
      image: 'Image',
      description: 'Description',
      'project-name': 'Project Name',
      solution: 'Solution',
      'solution-for': 'Solution for {{projectTitle}}',
      'my-profile': 'My profile',
      'my-name': 'My name',
      'my-location': 'My location',
      'my-about': 'My about',
      'my-points': 'My points',
      'my-heatmap': 'My heatmap',
      'my-certs': 'My certifications',
      'my-portfolio': 'My portfolio',
      'my-timeline': 'My timeline',
      'my-donations': 'My donations',
      'night-mode': 'Night Mode'
    },
    headings: {
      certs: 'Certifications',
      'legacy-certs': 'Legacy Certifications',
      honesty: 'Academic Honesty Policy',
      internet: 'Your Internet Presence',
      portfolio: 'Portfolio Settings',
      privacy: 'Privacy Settings'
    },
    danger: {
      heading: 'Danger Zone',
      'be-careful': 'Please be careful. Changes in this section are permanent.',
      reset: 'Reset all of my progress',
      delete: 'Delete my account',
      'delete-title': 'Delete My Account',
      'delete-p1':
        'This will really delete all your data, including all your progress and account information.',
      'delete-p2':
        "We won't be able to recover any of it for you later, even if you change your mind.",
      'delete-p3':
        "If there's something we could do better, send us an email instead and we'll do our best: <0>{{email}}</0>",
      nevermind: "Nevermind, I don't want to delete my account",
      certain: 'I am 100% certain. Delete everything related to this account',
      'reset-heading': 'Reset My Progress',
      'reset-p1':
        'This will really delete all of your progress, points, completed challenges, our records of your projects, any certifications you have, everything.',
      'reset-p2':
        "We won't be able to recover any of it for you later, even if you change your mind.",
      'nevermind-2': "Nevermind, I don't want to delete all of my progress",
      'reset-confirm': 'Reset everything. I want to start from the beginning'
    },
    email: {
      missing: 'You do not have an email associated with this account.',
      heading: 'Email Settings',
      'not-verified': 'Your email has not been verified.',
      check:
        'Please check your email, or <0>request a new verification email here</0>.',
      current: 'Current Email',
      new: 'New Email',
      confirm: 'Confirm New Email',
      weekly: "Send me Quincy's weekly email"
    },
    honesty: {
      p1:
        'Before you can claim a verified certification, you must accept our Academic Honesty Pledge, which reads:',
      p2:
        '"I understand that plagiarism means copying someone else’s work and presenting the work as if it were my own, without clearly attributing the original author."',
      p3:
        '"I understand that plagiarism is an act of intellectual dishonesty, and that people usually get kicked out of university or fired from their jobs if they get caught plagiarizing."',
      p4:
        '"Aside from using open source libraries such as jQuery and Bootstrap, and short snippets of code which are clearly attributed to their original author, 100% of the code in my projects was written by me, or along with another person going through the freeCodeCamp curriculum with whom I was pair programming in real time."',
      p5:
        '"I pledge that I did not plagiarize any of my freeCodeCamp.org work. I understand that freeCodeCamp.org’s team will audit my projects to confirm this."',
      p6:
        'In the situations where we discover instances of unambiguous plagiarism, we will replace the person in question’s certification with a message that "Upon review, this account has been flagged for academic dishonesty."',
      p7:
        'As an academic institution that grants achievement-based certifications, we take academic honesty very seriously. If you have any questions about this policy, or suspect that someone has violated it, you can email <0>{{email}}</0> and we will investigate.'
    }
  },
  profile: {
    'you-not-public': 'You have not made your portfolio public.',
    'username-not-public': '{{username}} has not made their portfolio public.',
    'you-change-privacy':
      'You need to change your privacy setting in order for your portfolio to be seen by others. This is a preview of how your portfolio will look when made public.',
    'username-change-privacy':
      '{{username}} needs to change their privacy setting in order for you to view their portfolio.',
    supporter: 'Supporter',
    contributor: 'Top Contributor',
    'no-certs':
      'No certifications have been earned under the current curriculum',
    'fcc-certs': 'freeCodeCamp Certifications',
    'longest-streak': 'Longest Streak:',
    'current-streak': 'Current Streak:',
    portfolio: 'Portfolio',
    timeline: 'Timeline',
    'none-completed': 'No challenges have been completed yet.',
    'get-started': 'Get started here.',
    challenge: 'Challenge',
    completed: 'Completed',
    'add-linkedin': 'Add this certification to my LinkedIn profile',
    'add-twitter': 'Share this certification on Twitter',
    tweet:
      'I just earned the {{certTitle}} certification @freeCodeCamp! Check it out here: {{certURL}}',
    avatar: "{{username}}'s avatar",
    joined: 'Joined {{date}}',
    'total-points': '{{count}} total point',
    'total-points_plural': '{{count}} total points',
    points: '{{count}} point on {{date}}',
    points_plural: '{{count}} points on {{date}}',
    'screen-shot': 'A screen shot of {{title}}',
    'page-number': '{{pageNumber}} of {{totalPages}}'
  },
  footer: {
    'tax-exempt-status':
      'freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit organization (United States Federal Tax Identification Number: 82-0779546)',
    'mission-statement':
      'Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.',
    'donation-initiatives':
      'Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.',
    'donate-text': 'You can',
    'donate-link': 'make a tax-deductible donation here',
    'trending-guides': 'Trending Guides',
    'our-nonprofit': 'Our Nonprofit',
    links: {
      about: 'About',
      'about-url': 'https://www.freecodecamp.org/news/about/',
      alumni: 'Alumni Network',
      'open-source': 'Open Source',
      shop: 'Shop',
      'shop-url': 'https://www.freecodecamp.org/shop/',
      support: 'Support',
      'support-url': 'https://www.freecodecamp.org/news/support/',
      sponsors: 'Sponsors',
      'sponsors-url': 'https://www.freecodecamp.org/news/sponsors/',
      honesty: 'Academic Honesty',
      'honesty-url':
        'https://www.freecodecamp.org/news/academic-honesty-policy/',
      coc: 'Code of Conduct',
      'coc-url': 'https://www.freecodecamp.org/news/code-of-conduct/',
      privacy: 'Privacy Policy',
      'privacy-url': 'https://www.freecodecamp.org/news/privacy-policy/',
      tos: 'Terms of Service',
      'tos-url': 'https://www.freecodecamp.org/news/terms-of-service/',
      copyright: 'Copyright Policy',
      'copyright-url': 'https://www.freecodecamp.org/news/copyright-policy/'
    },
    language: 'Language:'
  },
  learn: {
    heading: "Welcome to freeCodeCamp's curriculum.",
    'welcome-1': 'Welcome back, {{name}}.',
    'welcome-2': 'Welcome to freeCodeCamp.org',
    'start-at-beginning':
      'If you are new to coding, we recommend you <0>start at the beginning</0>.',
    'read-this': {
      heading: 'Please slow down and read this.',
      p1: 'freeCodeCamp is a proven path to your first software developer job.',
      p2:
        'More than 40,000 people have gotten developer jobs after completing this – including at big companies like Google and Microsoft.',
      p3:
        'If you are new to programming, we recommend you start at the beginning and earn these certifications in order.',
      p4:
        'To earn each certification, build its 5 required projects and get all their tests to pass.',
      p5:
        'You can add these certifications to your résumé or LinkedIn. But more important than the certifications is the practice you get along the way.',
      p6: 'If you feel overwhelmed, that is normal. Programming is hard.',
      p7: 'Practice is the key. Practice, practice, practice.',
      p8:
        'And this curriculum will give you thousands of hours of hands-on programming practice.',
      p9:
        "And if you want to learn more math and computer science theory, we also have thousands of hours of video courses on <0>freeCodeCamp's YouTube channel</0>.",
      p10:
        'If you want to get a developer job or freelance clients, programming skills will be just part of the puzzle. You also need to build your personal network and your reputation as a developer.',
      p11:
        'You can do this on Twitter and GitHub, and also on <0>the freeCodeCamp forum</0>.',
      p12: 'Happy coding!'
    },
    'upcoming-lessons': 'Upcoming Lessons',
    learn: 'Learn',
    'add-subtitles': 'Help improve or add subtitles',
    'wrong-answer': "Sorry, that's not the right answer. Give it another try?",
    'check-answer': 'Click the button below to check your answer.',
    'solution-link': 'Solution Link',
    'github-link': 'GitHub Link',
    'submit-and-go': 'Submit and go to my next challenge',
    'i-completed': "I've completed this challenge",
    'test-output': 'Your test output will go here',
    'running-tests': '// running tests',
    'tests-completed': '// tests completed',
    'console-output': '// console output',
    'sign-in-save': 'Sign in to save your progress',
    'download-solution': 'Download my solution',
    'percent-complete': '{{percent}}% complete',
    'tried-rsa':
      "If you've already tried the <0>Read-Search-Ask</0> method, then you can ask for help on the freeCodeCamp forum.",
    rsa: 'Read, search, ask',
    reset: 'Reset this lesson?',
    'reset-warn':
      'Are you sure you wish to reset this lesson? The editors and tests will be reset.',
    'reset-warn-2': 'This cannot be undone',
    'scrimba-tip':
      'Tip: If the mini-browser is covering the code, click and drag to move it. Also, feel free to stop and edit the code in the video at any time.',
    'chal-preview': 'Challenge Preview',
    'cert-map-estimates': {
      certs: 'Certification (300\u00A0hours)',
      'coding-prep': '(Thousands of hours of challenges)'
    }
  },
  donate: {
    title: 'Support our nonprofit',
    processing: 'We are processing your donation.',
    thanks: 'Thanks for donating',
    'thank-you': 'Thank you for being a supporter.',
    'thank-you-2':
      'Thank you for being a supporter of freeCodeCamp. You currently have a recurring donation.',
    additional:
      'You can make an additional one-time donation of any amount using this link: <0>{{url}}</0>',
    'help-more': 'Help us do more',
    error: 'Something went wrong with your donation.',
    'free-tech':
      'Your donations will support free technology education for people all over the world.',
    'gift-frequency': 'Select gift frequency:',
    'gift-amount': 'Select gift amount:',
    confirm: 'Confirm your donation',
    'confirm-2': 'Confirm your one-time donation of ${{usd}}',
    'confirm-3': 'Confirm your donation of ${{usd}} / month',
    'confirm-4': 'Confirm your donation of ${{usd}} / year',
    'your-donation':
      'Your ${{usd}} donation will provide {{hours}} hours of learning to people around the world.',
    'your-donation-2':
      'Your ${{usd}} donation will provide {{hours}} hours of learning to people around the world each month.',
    'your-donation-3':
      'Your ${{usd}} donation will provide {{hours}} hours of learning to people around the world each year.',
    duration: 'Become a one-time supporter of our nonprofit.',
    'duration-2': 'Become a monthly supporter of our nonprofit.',
    'duration-3': 'Become an annual supporter of our nonprofit',
    'duration-4': 'Become a supporter of our nonprofit',
    'nicely-done': 'Nicely done. You just completed {{block}}.',
    'credit-card': 'Credit Card',
    'credit-card-2': 'Or donate with a credit card:',
    paypal: 'with PayPal:',
    'need-email':
      'We need a valid email address to which we can send your donation tax receipt.',
    'went-wrong':
      'Something went wrong processing your donation. Your card has not been charged.',
    'valid-info':
      'Please enter valid email address, credit card number, and expiration date.',
    'valid-email': 'Please enter a valid email address.',
    'valid-card': 'Please enter valid credit card number and expiration date.',
    'email-receipt':
      "Email (we'll send you a tax-deductible donation receipt):",
    'need-help': 'Need help with your current or past donations?',
    'forward-receipt':
      'Forward a copy of your donation receipt to donors@freecodecamp.org and tell us how we can help.',
    efficiency: 'freeCodeCamp is a highly efficient education nonprofit.',
    'why-donate-1':
      'When you donate to freeCodeCamp, you help people learn new skills and provide for their families.',
    'why-donate-2':
      'You also help us create new resources for you to use to expand your own technology skills.',
    'bigger-donation':
      'Want to make a bigger one-time donation, mail us a check, or give in other ways?',
    'other-ways':
      "Here are many <0>other ways you can support our non-profit's mission</0>.",
    'other-ways-url':
      'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp',
    'failed-pay':
      "Uh - oh. It looks like your transaction didn't go through. Could you please try again?",
    'try-again': 'Please try again.',
    'card-number': 'Your Card Number:',
    expiration: 'Expiration Date:',
    'only-you':
      'Only you can see this message. Congratulations on earning this certification. It’s no easy task. Running freeCodeCamp isn’t easy either. Nor is it cheap. Help us help you and many other people around the world. Make a tax-deductible supporting donation to our nonprofit today.'
  },
  report: {
    'sign-in': 'You need to be signed in to report a user',
    details:
      'Please provide as much detail as possible about the account or behavior you are reporting.',
    portfolio: 'Report a users portfolio',
    'portfolio-2': "Do you want to report {{username}}'s portfolio for abuse?",
    'notify-1':
      "We will notify the community moderators' team, and a send copy of this report to your email: <strong>{{email}}</strong>",
    'notify-2': 'We may get back to you for more information, if required.',
    what: 'What would you like to report?',
    submit: 'Submit the report'
  },
  '404': {
    'page-not-found': 'Page not found',
    'not-found': '404 Not Found:',
    'heres-a-quote':
      "We couldn't find what you were looking for, but here is a quote:"
  },
  search: {
    label: 'Search',
    placeholder: 'Search 6,000+ tutorial',
    'see-results': 'See all results for {{searchQuery}}',
    'no-tutorials': 'No tutorials found',
    try: 'Looking for something? Try the search bar on this page.',
    'no-results': 'We could not find anything relating to <0>{{query}}</0>'
  },
  misc: {
    offline: 'You appear to be offline, your progress may not be saved',
    unsubscribed: 'You have successfully been unsubscribed',
    'keep-coding': 'Whatever you go on to, keep coding!',
    'email-signup': 'Email Sign Up',
    quincy: '- Quincy Larson, the teacher who founded freeCodeCamp.org',
    'email-blast':
      'By the way, each Friday I send an email with 5 links about programming and computer science. I send these to about 4 million people. Would you like me to send this to you, too?',
    'update-email-1': 'Update your email address',
    'update-email-2': 'Update your email address here:',
    email: 'Email',
    and: 'and'
  },
  icons: {
    'gold-cup': 'Gold Cup',
    avatar: 'Default Avatar',
    'avatar-2': 'An avatar coding with a laptop',
    donate: 'Donate with PayPal',
    fail: 'Test Failed',
    'not-passed': 'Not Passed',
    passed: 'Passed',
    heart: 'Heart',
    initial: 'Initial',
    info: 'Intro Information',
    spacer: 'Spacer',
    toggle: 'Toggle Checkmark',
    'responsive-design': 'Laptop and mobile phone icon',
    javascript: 'JavaScript icon',
    react: 'React icon',
    d3: 'D3 icon',
    api: 'A stack of servers',
    clipboard: 'A clipboard with a checkmark',
    python: 'Python icon',
    analytics: 'A bar chart and line graph',
    shield: 'A shield with a checkmark',
    tensorflow: 'Tensorflow icon',
    algorithm: 'Branching nodes'
  },
  aria: {
    'fcc-logo': 'freeCodeCamp Logo',
    answer: 'Answer',
    linkedin: "Link to {{username}}'s LinkedIn",
    github: "Link to {{username}}'s GitHub",
    website: "Link to {{username}}'s website",
    twitter: "Link to {{username}}'s Twitter",
    'first-page': 'Go to first page',
    'previous-page': 'Go to previous page',
    'next-page': 'Go to next page',
    'last-page': 'Go to last page'
  },
  flash: {
    'honest-first':
      'To claim a certification, you must first accept our academic honesty policy',
    'really-weird':
      'Something really weird happened, if it happens again, please consider raising an issue on https://github.com/freeCodeCamp/freeCodeCamp/issues/new',
    'not-right':
      'Something is not quite right. A report has been generated and the freeCodeCamp.org team have been notified',
    'went-wrong': 'Something went wrong, please check and try again',
    'account-deleted': 'Your account has been successfully deleted',
    'progress-reset': 'Your progress has been reset',
    'not-authorized': 'You are not authorized to continue on this route',
    'could-not-find':
      "We couldn't find what you were looking for. Please check and try again",
    'wrong-updating':
      'Something went wrong updating your account. Please check and try again',
    'updated-preferences': 'We have updated your preferences',
    'email-invalid': 'Email format is invalid',
    'bad-challengeId': 'currentChallengeId is not a valid challenge ID',
    'theme-invalid': 'Theme is invalid',
    'theme-set': 'Theme already set',
    'theme-updated': 'Your theme has been updated!',
    'username-used': 'Username is already associated with this account',
    'username-taken': 'Username is already associated with a different account',
    'username-updated': 'We have updated your username to {{username}}',
    'could-not-logout':
      'We could not log you out, please try again in a moment',
    'email-encoded-wrong':
      'The email encoded in the link is incorrectly formatted',
    'oops-not-right':
      'Oops, something is not right, please request a fresh link to sign in / sign up',
    'expired-link':
      'Looks like the link you clicked has expired, please request a fresh link, to sign in',
    'signin-success':
      'Success! You have signed in to your account. Happy Coding!',
    'social-auth-gone':
      'We are moving away from social authentication for privacy reasons. Next time we recommend using your email address: {{email}} to sign in instead.',
    'name-needed':
      'We need your name so we can put it on your certification. Add your name to your account settings and click the save button. Then we can issue your certification.',
    'incomplete-steps':
      'It looks like you have not completed the necessary steps. Please complete the required projects to claim the {{name}} Certification.',
    'already-claimed':
      'It looks like you already have claimed the {{name}} Certification',
    'cert-claim-success':
      '@{{username}}, you have successfully claimed the {{name}} Certification! Congratulations on behalf of the freeCodeCamp.org team!',
    'wrong-name':
      'Something went wrong with the verification of {{name}}, please try again. If you continue to receive this error, you can send a message to support@freeCodeCamp.org to get help.',
    'error-claiming': 'Error claiming {{certName}}',
    'username-not-found':
      'We could not find a user with the username "{{username}}"',
    'add-name':
      'This user needs to add their name to their account in order for others to be able to view their certification.',
    'not-eligible':
      'This user is not eligible for freeCodeCamp.org certifications at this time.',
    'profile-private':
      '{{username}} has chosen to make their portfolio private. They will need to make their portfolio public in order for others to be able to view their certification.',
    'certs-private':
      '{{username}} has chosen to make their certifications private. They will need to make their certifications public in order for others to be able to view them.',
    'not-honest':
      '{{username}} has not yet agreed to our Academic Honesty Pledge.',
    'user-not-certified':
      'It looks like user {{username}} is not {{cert}} certified',
    'invalid-challenge':
      'That does not appear to be a valid challenge submission',
    'no-links-provided':
      'You have not provided the valid links for us to inspect your work.',
    'no-social': 'No social account found',
    'invalid-social': 'Invalid social account',
    'no-account': 'No {{website}} account associated',
    'unlink-success': "You've successfully unlinked your {{website}}",
    'provide-username': 'Check if you have provided a username and a report',
    'report-sent': 'A report was sent to the team with {{email}} in copy'
  },
  validation: {
    'max-characters':
      'There is a maximum limit of 288 characters, you have {{charsLeft}} left',
    'same-email': 'This email is the same as your current email',
    'invalid-email':
      'We could not validate your email correctly, please ensure it is correct',
    'email-mismatch': 'Both new email addresses must be the same',
    'title-required': 'A title is required',
    'title-short': 'Title is too short',
    'title-long': 'Title is too long',
    'invalid-url':
      'We could not validate your URL correctly, please ensure it is correct',
    'invalid-protocol': 'URL must start with http or https',
    'url-not-image': 'URL must link directly to an image file',
    'use-valid-url': 'Please use a valid URL'
  }
};

exports.translationsSchema = translationsSchema;
