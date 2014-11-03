/**
* GET /
* Home page.
*/
var Challenge = require('./../models/Challenge')

exports.aOneMinuteIntroToFreeCodeCamp = function(req, res) {
    res.render('challenges/a-one-minute-introduction-to-free-code-camp', {
        name: 'A one-minute introduction to Free Code Camp',
        video: "110729062",
        time: "1 minute",
        next: '/challenges/enter-the-free-code-camp-chat-room',
        steps: ["Watch this video.", "When you're done, click the \"I've completed this challenge\" button to move on to your next challenge."]
    });
};

exports.enterTheFreeCodeCampChatRoom = function(req, res) {
    res.render('challenges/enter-the-free-code-camp-chat-room', {
        name: 'Enter the Free Code Camp Chat Room',
        video: "110753794",
        time: "5 minutes",
        next: '/challenges/create-and-deploy-a-website',
        steps: ["Register for the Free Code Camp chat room at <a href='https://www.hipchat.com/invite/178107/cc2f6ea4dfac9e48b9a88b305adae48a' target='_blank'>https://www.hipchat.com/invite/178107/cc2f6ea4dfac9e48b9a88b305adae48a</a>", "Introduce yourself to our chat room by typing: \"hello world!\""]
    });
};

exports.createAndDeployAWebsite = function(req, res) {
    res.render('challenges/create-and-deploy-a-website', {
        name: 'Create a Website and Deploy it to the Internet',
        video: "110753793",
        time: "5 minutes",
        next: '/challenges/install-github-atom-text-editor',
        steps: ["Download a template from <a href='http://startbootstrap.com' target='_blank'>http://startbootstrap.com</a>", "Go to <a href='http://bitballoon.com' target='_blank'>http://bitballoon.com</a>", "Find the template you downloaded in your file manager (Finder on Mac, Windows Explorer on Windows)", "Drag the entire template directory onto BitBalloon to deploy it", "Once it's deployed, share the link to it in the Free Code Camp chat room."]
    });
};

exports.installGithubAtomTextEditor = function(req, res) {
    res.render('challenges/install-github-atom-text-editor', {
        name: "Install Github's Atom Text Editor",
        video: "",
        time: "5 minutes",
        next: '/challenges/modify-and-redeploy-your-website',
        steps: ["Download the Atom editor at <a href='http://atom.io' target='_blank'>http://atom.io</a>", "Unzip it and install Atom.", "Open up Atom.", "Now you have a dedicated text editor!"]
    });
};

exports.modifyAndRedeployYourWebsite = function(req, res) {
    res.render('challenges/modify-and-redeploy-your-website', {
        name: 'Modify and Redeploy Your Website',
        video: "110753792",
        time: "5 minutes",
        next: '/challenges/start-a-pair-programming-session',
        steps: ["Open up the template you downloaded from <a href='http://startbootstrap.com' target='_blank'>http://startbootstrap.com</a> in your file manager (Finder on Mac and Windows Explorer on Windows).", "Open up the index.html file with Atom", "Find the title tag in the HTML and change it.", "Go to <a href='http://bitballoon.com' target='_blank'>http://bitballoon.com</a>", "Drag the entire template directory onto BitBalloon to deploy it", "Verify that the title has indeed changed."]
    });
};

exports.startAPairProgrammingSession = function(req, res) {
    res.render('challenges/start-a-pair-programming-session', {
        name: "Start Your First Pair Programming Session",
        video: "110753642",
        time: "5 minutes",
        next: '/challenges/add-dynamic-content-to-your-website',
        steps: [
            "Download Screen Hero, the popular pair programming tool, here: <a href='https://screenhero.com/download.html' target='_blank'>https://screenhero.com/download.html</a>", "Register your account with the same email address you used when you registered for the Free Code Camp chat room.", "Go to the Free Code Camp chat room.", "Say hi to somebody, and ask if they can pair program with you real quick.", "Type '/hero @' and their name to start a Screen Hero session with them.", "Once you've \"paired\" with someone, they become your \"pair\". Show your new pair the website your just created."
        ]
    });
};

exports.addDynamicContentToYourWebsite = function(req, res) {
    res.render('challenges/add-dynamic-content-to-your-website', {
        name: "Add Dynamic Content to your Website",
        video: "",
        time: "10 minutes",
        next: '/challenges/codecademy-html-and-css-track',
        steps: ["Go to <a href='http://www.powr.io' target='_blank'>http://www.powr.io</a>", "From the dropdown menus, choose 'Contact Form' and 'HTML'", "Find the template you downloaded from <a href='http://startbootstrap.com' target='_blank'>http://startbootstrap.com</a> in your file manager (Finder on Mac and Windows Explorer on Windows).", "Drag the file to Atom", "Copy the lines of HTML from the POWr tutorial to your index.html file, being careful to put them where they belong.", "Drag the entire template directory onto BitBalloon to deploy it", "Go to <a href='http://bitballoon.com' target='_blank'>http://bitballoon.com</a>", "Verify that the form works by filling it out and submitting it. You can then go back to POWr.io and view the new database record that the form created.", "Now add a the POWr.io Twitter feed to your portfolio website, then redeploy it to BitBalloon."]
    });
};

exports.codecademyHtmlAndCssTrack = function(req, res) {
    res.render('challenges/codecademy-html-and-css-track', {
        name: "Codecademy's HTML & CSS Track",
        video: "110753641",
        time: "7 hours",
        next: '/challenges/experiment-with-html-and-css-in-codepen',
        steps: [
            "Go to <a href='http://www.codecademy.com/tracks/web' target='_blank'>http://www.codecademy.com/tracks/web</a> and complete the course."
        ]
    });
};

exports.experimentWithHtmlAndCssInCodepen = function(req, res) {
    res.render('challenges/experiment-with-html-and-css-in-codepen', {
        name: "Experiment with HTML and CSS in CodePen",
        video: "110752744",
        time: "10 minutes",
        next: '/challenges/code-school-try-jquery-course',
        steps: [
            "Go to <a href='http://www.newsweek.com/' target='_blank'>http://www.newsweek.com/</a>", "Change the window size. Note that Newsweek.com is using <strong>Responsive Design</strong>.", "Right-click an area of the page that doesn't have any HTML elements on it, then choose 'view page source'.", "Select all the text, then copy it.", "Go to <a href='http://codepen.io/pen/' target='_blank'>http://codepen.io/pen/</a>", "Paste the HTML you copied from Newsweek.com into the HTML field of Codepen.", "You now have your own customizable version of the Newsweek.com webpage. See if you can change some of the text and images."
        ]
    });
};

exports.codeSchoolTryJqueryCourse = function(req, res) {
    res.render('challenges/code-school-try-jquery-course', {
        name: "Code School's Try jQuery Course",
        time: "4 hours",
        next: '/challenges/jquery-exercises',
        video: "110753638",
        steps: [
            "Go to <a href='https://www.codeschool.com/courses/try-jquery' target='_blank'>https://www.codeschool.com/courses/try-jquery</a> and complete the course."
        ]
    });
};

exports.jqueryExercises = function(req, res) {
    res.render('challenges/jquery-exercises', {
        name: "jQuery Exercises",
        time: "3 hours",
        next: '/challenges/code-school-discover-devtools-course',
        video: "110752745",
        steps: [
            "Go to <a href='http://jqexercise.droppages.com/' target='_blank'>http://jqexercise.droppages.com/</a> and complete all of the exercises.", "The person who created it was not a native English speaker, so please excuse the spelling and grammar mistakes.", "This will be a lot more fun if you pair program with someone from the Free Code Camp chat room."
        ]
    });
};

exports.codeSchoolDiscoverDevtoolsCourse = function(req, res) {
    res.render('challenges/code-school-discover-devtools-course', {
        name: "Code School's Discover DevTools",
        time: "2 hours",
        next: '/challenges/customize-bootstrap-with-bootswatch',
        video: "110752743",
        steps: [
            "Go to <a href='http://discover-devtools.codeschool.com/' target='_blank'>http://discover-devtools.codeschool.com/</a> and complete the course."
        ]
    });
};

exports.customizeBootstrapWithBootswatch = function(req, res) {
    res.render('challenges/customize-bootstrap-with-bootswatch', {
        name: "Customize Bootstrap with Bootswatch",
        time: "10 minutes",
        next: '/challenges/inject-life-with-css-transformations',
        video: "110752741",
        steps: ["Go to <a href='http://getbootstrap.com/components/' target='_blank'>http://getbootstrap.com/components/</a>", "Right-click an area of the page that doesn't have any HTML elements on it, then choose 'view page source'.", "Select all the text, then copy it.", "Go to <a href='http://codepen.io/pen/' target='_blank'>http://codepen.io/pen/</a>", "Paste the HTML you copied from GetBootStrap.com into the HTML field of Codepen.","Go to <a href='http://bootswatch.com/' target='_blank'>http://bootswatch.com/</a>", "Decide which theme you want to use.", "Click the down arrow next to the download button and choose 'bootstrap.css'", "Select all the text, then copy it.", "Go back to CodePen and paste the CSS you copied from Bootswatch.com into the CSS field of Codepen.", "Your Bootswatch CSS should now be applied to the HTML from the GetBootStrap page.", "This page is currently using a two-column layout, with the main content on the left and additional navigation on the right. See if you can make it a one-column layout."]
    });
};

exports.injectLifeWithCssTransformations = function(req, res) {
    res.render('challenges/inject-life-with-css-transformations', {
        name: "Inject Life with CSS Transformations",
        time: "15 minutes",
        next: '/challenges/codecademy-javascript-track',
        video: "110752740",
        steps: [
            "Go to <a href='http://daneden.github.io/animate.css/' target='_blank'>http://daneden.github.io/animate.css/</a> and try out some of the CSS animations.", "Go to <a href='http://codepen.io/ossia/pen/bGegt' target='_blank'>http://codepen.io/ossia/pen/bGegt</a>.", "Press the \"Fork\" button. This will fork, meaning create a copy of, the CodePen.", "Click the gear in the CSS column.", "Click \"Add another resource\" and start typing \"animate.css\". Click on the dropdown results to autocomplete it.", "Now that you have Animate.css enabled, use jQuery and the \"toggleClass\" method to add an animated class to all h1 elements when you click the \"Press Me\" button."
        ]
    });
};

exports.codecademyJavascriptTrack = function(req, res) {
    res.render('challenges/codecademy-javascript-track', {
        name: "Codecademy JavaScript Track",
        time: "10 hours",
        next: 'challenges/get-help-the-hacker-way-with-rsap',
        video: "110795564",
        steps: [
            "Go to <a href='http://www.codecademy.com/en/tracks/javascript-combined' target='_blank'>http://www.codecademy.com/en/tracks/javascript-combined</a> and complete the course."
        ]
    });
};

exports.getHelpTheHackerWayWithRsap = function(req, res) {
    res.render('challenges/get-help-the-hacker-way-with-rsap', {
        name: "Get Help the Hacker Way with RSAP",
        video: "",
        time: "30 minutes",
        next: '/challenges/easy-algorthim-scripting-challenges-on-coderbyte',
        steps: [
            "Watch the video to learn the RSAP (Read, Search, Ask, Post) methodology for getting help.",
            "Try an intelligent Google query that involves JavaScript and filters for this year (since JavaScript changes)",
            "Go to <a href='http://stackoverflow.com/' target='_blank'>http://stackoverflow.com/</a> and view the recent questions.",
            "Go to <a href='http://webchat.freenode.net/' target='_blank'>http://webchat.freenode.net/</a> and create an IRC account.",
            "Join the #JavaScript chat room and introduce yourself as a Free Code Camp student.",
            "Now you have several ways of getting help when you're stuck."
        ]
    });
};

exports.easyAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/easy-algorthim-scripting-challenges-on-coderbyte', {
        name: "Easy Algorithm Scripting Challenges on Coderbyte",
        video: "",
        time: "15 hours",
        next: '/challenges/harvard-introduction-to-computer-science-cs50-course',
        steps: [
            "Create a CoderByte account at <a href='http://coderbyte.com/sl/' target='_blank'>http://coderbyte.com/sl/</a>",
            "Now go to <a href='http://coderbyte.com/CodingArea/Challenges/#easyChals' target='_blank'>http://coderbyte.com/CodingArea/Challenges/#easyChals</a> and start working through Coderbyte's easy algorithm scripting challenges using JavaScript.",
            "Be sure to pair programming on these challenges, and remember to apply the RSAP methodology."
        ]
    });
};

exports.harvardIntroductionToComputerScienceCs50Course = function(req, res) {
    res.render('challenges/harvard-introduction-to-computer-science-cs50-course', {
        name: "Introduction to Computer Science",
        video: "",
        time: "150 hours",
        next: '/challenges/medium-algorthim-scripting-challenges-on-coderbyte',
        steps: [
            "Harvard's CS50 course is one of the most popular online courses of all time. It will give you a solid programming foundation. It will introduce you to important concepts in computer science like algorithms, databases, data structures.",
            "Go to <a href='https://www.edx.org/course/harvardx/harvardx-cs50x-introduction-computer-1022#.VDWSfSldWpQ' target='_blank'>https://www.edx.org/course/harvardx/harvardx-cs50x-introduction-computer-1022#.VDWSfSldWpQ</a> and register for the course."
        ]
    });
};

exports.mediumAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/medium-algorthim-scripting-challenges-on-coderbyte', {
        name: "Medium Algorithm Scripting Challenges on Coderbyte",
        video: "",        
        time: "15 hours",
        next: '/challenges/stanfords-relational-databases-mini-course',
        steps: [
            "Go to <a href='http://coderbyte.com/CodingArea/Challenges/#medChals' target='_blank'>http://coderbyte.com/CodingArea/Challenges/#medChals</a> and start working through Coderbyte's medium algorithm scripting challenges using JavaScript.",
            "Be sure to pair programming on these challenges, and remember to apply the RSAP methodology."
        ]
    });
};

exports.stanfordsRelationalDatabasesMiniCourse = function(req, res) {
    res.render('challenges/stanfords-relational-databases-mini-course', {
        name: "Stanford's Relational Databases Mini-course",
        video: "",
        time: "10 hours",
        next: '/challenges/stanfords-json-mini-course',
        steps: [
            "Go to <a href='https://class.stanford.edu/courses/DB/RDB/SelfPaced/about' target='_blank'>https://class.stanford.edu/courses/DB/RDB/SelfPaced/about</a> and register for this course.",
            "Be sure to watch the videos, in addition to doing the exercises, because they have embedded challenges."
        ]
    });
};

exports.stanfordsJsonMiniCourse = function(req, res) {
    res.render('challenges/stanfords-json-mini-course', {
        name: "Stanford's JSON Mini-course",
        video: "",
        time: "2 hours",
        next: '/challenges/build-a-text-based-adventure',
        steps: [
            "Go to <a href='https://class.stanford.edu/courses/DB/JSON/SelfPaced/about' target='_blank'>https://class.stanford.edu/courses/DB/JSON/SelfPaced/about</a> and register for this course.",
            "Be sure to watch the videos, in addition to doing the exercises, because they have embedded challenges."
        ]
    });
};

exports.buildATextBasedAdventure = function(req, res) {
    res.render('challenges/build-a-text-based-adventure', {
        name: "Build a Text-based Adventure",
        video: "",
        time: "5 hours",
        next: '/challenges/hard-algorthim-scripting-challenges-on-coderbyte',
        steps: [
            "Go to <a href='http://www.amctv.com/shows/halt-and-catch-fire/colossal-cave-adventure' target='_blank'>http://www.amctv.com/shows/halt-and-catch-fire/colossal-cave-adventure</a> and play the original text-based adventure (known simply as \"Adventure\".",
            "Using CodePen, create a text based adventure, using buttons instead of text input.",
            "Create a player object, and give the player an inventory of items.",
            "Create a definite beginning, end, and at least 10 different locations a player can go to and interact with"
        ]
    });
};

exports.hardAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/hard-algorthim-scripting-challenges-on-coderbyte', {
        name: "Hard Algorithm Scripting Challenges on Coderbyte",
        video: "",
        time: "15 hours",
        next: '/challenges/stanfords-sql-mini-course',
        steps: [
            "Go to <a href='http://coderbyte.com/CodingArea/Challenges/#hardChals' target='_blank'>http://coderbyte.com/CodingArea/Challenges/#medChals</a> and start working through Coderbyte's hard algorithm scripting challenges using JavaScript.",
            "Be sure to pair programming on these challenges, and remember to apply the RSAP methodology."
        ]
    });
};

exports.stanfordsSqlMiniCourse = function(req, res) {
    res.render('challenges/stanfords-sql-mini-course', {
        name: "Stanford's SQL Mini-course",
        time: "10 hours",
        next: '/challenges/build-an-interview-question-machine',
        steps: [
            "Go to <a href='https://class.stanford.edu/courses/DB/SQL/SelfPaced/about' target='_blank'>https://class.stanford.edu/courses/DB/SQL/SelfPaced/about</a> and register for this course.",
            "Be sure to watch the videos, in addition to doing the exercises, because they have embedded challenges."
        ]
    });
};

exports.buildAnInterviewQuestionMachine = function(req, res) {
    res.render('challenges/build-an-interview-question-machine', {
        name: "Build an Interview Question Machine",
        video: "",
        time: "5 hours",
        next: '/challenges/code-school-try-git-course',
        steps: [
            "Using CodePen, create an interview question machine that will show an interview question, count down from 5, then shows the answer.",
            "Create a button the user can press to see the next question.",
            "Go to <a href='https://gist.github.com/QuincyLarson/b18d7366440af0f37054' target='_blank'>https://gist.github.com/QuincyLarson/b18d7366440af0f37054</a> to see an example list of interview questions (dealing with the time complexity of algorthims and duration of common computational tasks).",
            "Add the ability for users to say they got it right or wrong. If they got it right, don't show them that question any more."
        ]
    });
};

exports.codeSchoolTryGitCourse = function(req, res) {
    res.render('challenges/code-school-try-git-course', {
        name: "Code School's Try Git Course",
        video: "",
        time: "15 minutes",
        next: '/challenges/install-node-js',
        steps: [
            "Go to <a href='https://www.codeschool.com/courses/try-git' target='_blank'>https://www.codeschool.com/courses/try-git</a> and complete this short interactive course."
        ]
    });
};

exports.installNodeJs = function(req, res) {
    res.render('challenges/install-node-js', {
        name: "Install Node.js",
        time: "15 minutes",
        next: '/challenges/clone-a-github-repo',
        video: "",
        steps: [
        ]
    });
};

exports.cloneAGithubRepo = function(req, res) {
    res.render('challenges/clone-a-github-repo', {
        name: "Clone a Github Repo",
        video: "",
        time: "15 minutes",
        next: '/challenges/deploy-an-app-to-heroku',
        steps: [
        ]
    });
};

exports.deployAnAppToHeroku = function(req, res) {
    res.render('challenges/deploy-an-app-to-heroku', {
        name: "Deploy an app to Heroku",
        video: "",
        time: "15 minutes",
        next: '/challenges/code-school-real-time-with-node-js-course',
        steps: [
        ]
    });
};

exports.codeSchoolRealTimeWithNodeJsCourse = function(req, res) {
    res.render('challenges/code-school-real-time-with-node-js-course', {
        name: "Code School's Real-time web with Node.JS",
        video: "",
        time: "5 hours",
        next: '/challenges/try-mongodb',
        steps: [
            "Go to <a href='https://www.codeschool.com/courses/real-time-web-with-node-js' target='_blank'>https://www.codeschool.com/courses/real-time-web-with-node-js</a> and work through the course.",
            "Note that this course is a paid course, but that if you can find time to finish the course within two consecutive days, you can use Code School's free two-day hall pass to complete it for free here: <a href='https://www.codeschool.com/hall_passes/213f3fedb6b9/claim_shared' target='_blank'>https://www.codeschool.com/hall_passes/213f3fedb6b9/claim_shared</a>"
        ]
    });
};

exports.tryMongoDb = function(req, res) {
    res.render('challenges/try-mongodb', {
        name: "Try MongoDB",
        video: "",
        time: "30 minutes",
        next: '/challenges/explore-your-network-with-the-linkedin-api',
        steps: [
            "Go to <a href='http://try.mongodb.org/' target='_blank'>http://try.mongodb.org/</a> and work through their interactive MongoDB tutorial"
        ]
    });
};

exports.exploreYourNetworkWithTheLinkedInApi = function(req, res) {
    res.render('challenges/explore-your-network-with-the-linkedin-api', {
        name: "Explore Your Network with the LinkedIn API",
        video: "",
        time: "2 hours",
        next: '/challenges/build-your-first-api',
        steps: [
            "Go to <a href='http://developers.linkedin.com/' target='_blank'>http://developers.linkedin.com/</a> and register a LinkedIn app.",
            "Using the API keys provided by LinkedIn, write a script that pulls your LinkedIn profile and and connections."
        ]
    });
};

exports.buildYourFirstApi = function(req, res) {
    res.render('challenges/build-your-first-api', {
        name: "Build Your First API",
        video: "",
        time: "5 hours",
        next: '/challenges/aggregate-data-with-chron-jobs-and-screen-scraping',
        steps: [
        ]
    });
};

exports.aggregateDataWithChronJobsAndScreenScraping = function(req, res) {
    res.render('challenges/aggregate-data-with-chron-jobs-and-screen-scraping', {
        name: "Aggregate Data with Chron Jobs and Screen Scraping",
        video: "",
        time: "5 hours",
        next: '/challenges/code-school-shaping-up-with-angular-js-course',
        steps: [
        ]
    });
};

exports.codeSchoolShapingUpWithAngularJsCourse = function(req, res) {
    res.render('challenges/code-school-shaping-up-with-angular-js-course', {
        name: "Codeschool's Shaping up with Angular.js",
        video: "",
        time: "5 hours",
        next: '/challenges/reverse-engineer-snapchat',
        steps: [
            "Go to <a href='https://www.codeschool.com//courses/shaping-up-with-angular-js' target='_blank'>hhttps://www.codeschool.com//courses/shaping-up-with-angular-js</a> and complete this free course."
        ]
    });
};

exports.reverseEngineerSnapchat = function(req, res) {
    res.render('challenges/reverse-engineer-snapchat', {
        name: "Reverse Engineer Snapchat",
        video: "",
        time: "50 hours",
        next: '/challenges/reverse-engineer-reddit',
        steps: [
        ]
    });
};

exports.reverseEngineerReddit = function(req, res) {
    res.render('challenges/reverse-engineer-reddit', {
        name: "Reverse Engineer Reddit",
        video: "",
        time: "50 hours",
        next: '/challenges/reverse-engineer-pintrest',
        steps: [
        ]
    });
};

exports.reverseEngineerPintrest = function(req, res) {
    res.render('challenges/reverse-engineer-pintrest', {
        name: "Reverse Engineer Pintrest",
        video: "",
        time: "50 hours",
        next: '/challenges/help-a-nonprofit-team-project',
        steps: [
        ]
    });
};

exports.helpANonprofitTeamProject = function(req, res) {
    res.render('challenges/help-a-nonprofit-team-project', {
        name: "Help a Nonprofit Team Project",
        video: "",
        time: "200 hours",
        next: '/challenges/help-a-nonprofit-solo-project',
        steps: [
        ]
    });
};

exports.helpANonprofitSoloProject = function(req, res) {
    res.render('challenges/help-a-nonprofit-solo-project', {
        name: "Help a Nonprofit Solo Project",
        video: "",
        time: "200 hours",
        next: '/challenges/crack-the-coding-interview',
        steps: [
        ]
    });
};

exports.crackTheCodingInterview = function(req, res) {
    res.render('challenges/crack-the-coding-interview', {
        name: "Crack the Coding Interview",
        video: "",
        time: "20 hours",
        next: "",
        steps: [
        ]
    });
};