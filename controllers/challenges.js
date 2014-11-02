/**
* GET /
* Home page.
*/
var Challenge = require('./../models/Challenge')

exports.aOneMinuteIntroToFreeCodeCamp = function(req, res) {
    res.render('challenges/a-one-minute-introduction-to-free-code-camp', {
        name: 'A one-minute introduction to Free Code Camp',
        video: "109134466",
        time: "1 minute",
        steps: ["Watch this video.", "When you're done, click the \"I've completed this challenge\" button to move on to your next challenge."]
    });
};

exports.enterTheFreeCodeCampChatRoom = function(req, res) {
    res.render('challenges/enter-the-free-code-camp-chat-room', {
        name: 'Enter the Free Code Camp Chat Room',
        video: "109134466",
        time: "5 minutes",
        steps: ["Register for the Free Code Camp chat room at <a href='https://www.hipchat.com/invite/178107/cc2f6ea4dfac9e48b9a88b305adae48a' target='_blank'>https://www.hipchat.com/invite/178107/cc2f6ea4dfac9e48b9a88b305adae48a</a>", "Introduce yourself to our chat room by typing: \"hello world!\""]
    });
};

exports.createAndDeployAWebsite = function(req, res) {
    res.render('challenges/create-and-deploy-a-website', {
        name: 'Create a Website and Deploy it to the Internet',
        video: "109134466",
        time: "5 minutes",
        steps: ["Download a template from <a href='http://startbootstrap.com' target='_blank'>http://startbootstrap.com</a>", "Go to <a href='http://bitballoon.com' target='_blank'>http://bitballoon.com</a>", "Find the template you downloaded in your file manager (Finder on Mac, Windows Explorer on Windows)", "Drag the entire template directory onto BitBalloon to deploy it", "Once it's deployed, share the link to it in the Free Code Camp chat room."]
    });
};

exports.installGithubAtomTextEditor = function(req, res) {
    res.render('challenges/install-github-atom-text-editor', {
        name: "Install Github's Atom Text Editor",
        video: "109134466",
        time: "5 minutes",
        steps: ["Download the Atom editor at <a href='http://atom.io'>http://atom.io</a>", "Unzip it and install Atom.", "Open up Atom.", "Now you have a dedicated text editor!"]
    });
};

exports.modifyAndRedeployYourWebsite = function(req, res) {
    res.render('challenges/modify-and-redeploy-your-website', {
        name: 'Modify and Redeploy Your Website',
        video: "109134466",
        time: "5 minutes",
        steps: ["Open up the template you downloaded from <a href='http://startbootstrap.com' target='_blank'>http://startbootstrap.com</a> in your file manager (Finder on Mac and Windows Explorer on Windows).", "Open up the index.html file with Atom", "Find the title tag in the HTML and change it.", "Go to <a href='http://bitballoon.com' target='_blank'>http://bitballoon.com</a>", "Drag the entire template directory onto BitBalloon to deploy it", "Verify that the title has indeed changed."]
    });
};

exports.startAPairProgrammingSession = function(req, res) {
    res.render('challenges/start-a-pair-programming-session', {
        name: "Start Your First Pair Programming Session",
        video: "109547811",
        time: "5 minutes",
        steps: [
            "Download Screen Hero, the popular pair programming tool, here: <a href='https://screenhero.com/download.html' target='_blank'>https://screenhero.com/download.html</a>", "Register your account with the same email address you used when you registered for the Free Code Camp chat room.", "Go to the Free Code Camp chat room.", "Say hi to somebody, and ask if they can pair program with you real quick.", "Type '/hero @' and their name to start a Screen Hero session with them.", "Once you've \"paired\" with someone, they become your \"pair\". Show your new pair the website your just created."
        ]
    });
};

exports.addDynamicContentToYourWebsite = function(req, res) {
    res.render('challenges/add-dynamic-content-to-your-website', {
        name: "Add Dynamic Content to your Website",
        video: "109599487",
        time: "10 minutes",
        steps: ["Go to <a href='http://www.powr.io' target='_blank'>http://www.powr.io</a>", "From the dropdown menus, choose 'Contact Form' and 'HTML'", "Open up the template you downloaded from <a href='http://startbootstrap.com' target='_blank'>http://startbootstrap.com</a> in your file manager (Finder on Mac and Windows Explorer on Windows).", "Open up the index.html file with Atom", "Copy the lines of HTML from the POWr tutorial to your index.html file, being careful to put them where they belong.", "Drag the entire template directory onto BitBalloon to deploy it", "Go to <a href='http://bitballoon.com' target='_blank'>http://bitballoon.com</a>", "Verify that the form works by filling it out and submitting it. You can then go back to POWr.io and view the new database record that the form created."]
    });
};

exports.codecademyHtmlAndCssTrack = function(req, res) {
    res.render('challenges/codecademy-html-and-css-track', {
        name: "Codecademy's HTML & CSS Track",
        video: "109599487",
        time: "7 hours",
        steps: [
            "Go to <a href='http://www.codecademy.com/tracks/web' target='_blank'>http://www.codecademy.com/tracks/web</a> and complete the course."
        ]
    });
};

exports.experimentWithHtmlAndCssInCodepen = function(req, res) {
    res.render('challenges/experiment-with-html-and-css-in-codepen', {
        name: "Experiment with HTML and CSS in CodePen",
        video: "109611164",
        time: "30 minutes",
        steps: [
            "You'll learn bootstrap and see how you can build websites right in your browser with CodePen.",
            "Load the HealthCare.gov page in CodePen.", "Find some cat pictures online, copy their image URLs, and change the HealthCare.gov page to use these cat pictures instead of its normal images.", "HealthCare.gov uses a multi-column bootstrap layout. See if you can change the layout to be a single-column layout at all widths, not just mobile width. Hint: the \"row\" and \"col-\" classes control this. Check the Bootstrap documentation linked to above if you get stuck."
        ]
    });
};

exports.codeSchoolTryJqueryCourse = function(req, res) {
    res.render('challenges/code-school-try-jquery-course', {
        name: "Code School's Try jQuery Course",
        time: "3 hours",
        steps: [
            "Go to <a href='https://www.codeschool.com/courses/try-jquery' target='_blank'>https://www.codeschool.com/courses/try-jquery</a> and complete the course."
        ]
    });
};

exports.completeJqueryExercises = function(req, res) {
    res.render('challenges/complete-jquery-exercises', {
        name: "Complete jQuery Exercises",
        links: ["http://jqexercise.droppages.com/"],
        time: "3 hours",
        steps: [
            "Go to <a href='http://jqexercise.droppages.com/' target='_blank'>http://jqexercise.droppages.com/</a> and complete all of the exercises.", "The person who created it was not a native English speaker, so please excuse the spelling and grammar mistakes.", "This will be a lot more fun if you pair program with someone from the Free Code Camp chat room."
        ]
    });
};

exports.codeSchoolDiscoverDevtoolsCourse = function(req, res) {
    res.render('challenges/code-school-discover-devtools-course', {
        name: "Code School's Discover DevTools",
        links: ["http://discover-devtools.codeschool.com/"],
        time: "2 hours",
        steps: [
            "Go to <a href='http://discover-devtools.codeschool.com/' target='_blank'>http://discover-devtools.codeschool.com/</a> and complete the course."
        ]
    });
};

exports.customizeBootstrapWithBootswatch = function(req, res) {
    res.render('challenges/customize-bootstrap-with-bootswatch', {
        name: "Customize Bootstrap with Bootswatch",
        time: "15 minutes",
        links: ["http://bootswatch.com/"],
        steps: []
    });
};

exports.injectLifeWithCssTransformations = function(req, res) {
    res.render('challenges/inject-life-with-css-transformations', {
        name: "Inject Life with CSS Transformations",
        links: [""],
        time: "15 minutes",
        steps: [
        ]
    });
};

exports.codecademyJavascriptTrack = function(req, res) {
    res.render('challenges/codecademy-javascript-track', {
        name: "Codecademy JavaScript Track",
        links: [ "http://www.codecademy.com/tracks/javascript"],
        time: "10 hours",
        steps: [
            "All right, now let's start coding!",
            "Codecademy's popular JavaScript track will teach you some basic syntax and common programming data structures in just a few hours."
        ]
    });
};

exports.getHelpTheHackerWayWithRsap = function(req, res) {
    res.render("challenges/get-help-the-hacker-way-with-rsap", {
        name: "Get Help the Hacker Way with RSAP",
        links: ["http://webchat.freenode.net/", "http://stackoverflow.com/"],
        time: "30 minutes",
        steps: [
        ]
    });
};

exports.easyAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/easy-algorthim-scripting-challenges-on-coderbyte', {
        name: "Easy Algorithm Scripting Challenges on Coderbyte",
        links: [""],
        time: "15 hours",
        steps: [
        ]
    });
};

exports.harvardIntroductionToComputerScienceCs50Course = function(req, res) {
    res.render('challenges/harvard-introduction-to-computer-science-cs50-course', {
        name: "Introduction to Computer Science",
        links: ["https://www.edx.org/course/harvardx/harvardx-cs50x-introduction-computer-1022#.VDWSfSldWpQ"],
        time: "150 hours",
        steps: [
            "Harvard's CS50 course is one of the most popular online courses of all time. It will give you a solid programming foundation.",
            "This course will introduce you to algorithms, databases, data structures, and a ton of theory.",
            "It's a long course, so be sure to mix it up with frequent pair programming sessions on FreeCodeCamp challenges."
        ]
    });
};

exports.mediumAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/medium-algorthim-scripting-challenges-on-coderbyte', {
        name: "Medium Algorithm Scripting Challenges on Coderbyte",
        links: [""],
        time: "15 hours",
        steps: [
        ]
    });
};

exports.stanfordsRelationalDatabasesMiniCourse = function(req, res) {
    res.render('challenges/stanfords-relational-databases-mini-course', {
        name: "Stanford's Relational Databases Mini-course",
        links: [""],
        time: "10 hours",
        steps: [
        ]
    });
};

exports.stanfordsJsonMiniCourse = function(req, res) {
    res.render('challenges/stanfords-json-mini-course', {
        name: "Stanford's JSON Mini-course",
        links: [""],
        time: "2 hours",
        steps: [
        ]
    });
};

exports.buildATextBasedAdventure = function(req, res) {
    res.render('challenges/build-a-text-based-adventure', {
        name: "Build a Text-based Adventure",
        links: [""],
        time: "5 hours",
        steps: [
        ]
    });
};

exports.hardAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/hard-algorthim-scripting-challenges-on-coderbyte', {
        name: "Hard Algorithm Scripting Challenges on Coderbyte",
        links: [""],
        time: "15 hours",
        steps: [
        ]
    });
};

exports.stanfordsSqlMiniCourse = function(req, res) {
    res.render('challenges/stanfords-sql-mini-course', {
        name: "Stanford's SQL Mini-course",
        links: [""],
        time: "10 hours",
        steps: [
        ]
    });
};

exports.buildAnInterviewQuestionMachine = function(req, res) {
    res.render('challenges/build-an-interview-question-machine', {
        name: "Build an Interview Question Machine",
        links: [""],
        time: "5 hours",
        steps: [
        ]
    });
};

exports.codeSchoolTryGitCourse = function(req, res) {
    res.render('challenges/code-school-try-git-course', {
        name: "Code School's Try Git Course",
        links: ["https://www.codeschool.com/courses/try-git"],
        time: "15 minutes",
        steps: [
            "Have you ever accidentally deleted something? With Git, you will never have that problem again.",
            "Git is a Version Control System. It will track all changes to your files. That way you don't have to worry about your code breaking. You can just rewind time to back when your code worked right.",
            "This short course will help you install git and learn how it works."
        ]
    });
};

exports.installNodeJs = function(req, res) {
    res.render('challenges/install-node-js', {
        name: "Install Node.js",
        links: [""],
        time: "15 minutes",
        steps: [
        ]
    });
};

exports.cloneAGithubRepo = function(req, res) {
    res.render('challenges/clone-a-github-repo', {
        name: "Clone a Github Repo",
        links: [""],
        time: "15 minutes",
        steps: [
        ]
    });
};

exports.deployAnAppToHeroku = function(req, res) {
    res.render('challenges/deploy-an-app-to-heroku', {
        name: "Deploy an app to Heroku",
        links: [""],
        time: "15 minutes",
        steps: [
        ]
    });
};

exports.codeSchoolRealTimeWithNodeJsCourse = function(req, res) {
    res.render('challenges/code-school-real-time-with-node-js-course', {
        name: "Code School's Real-time web with Node.JS",
        links: ["https://www.codeschool.com/courses/real-time-web-with-node-js"],
        time: "5 hours",
        steps: [
            "Learn NodeJS, the web server that makes the MEAN Stack possible.",
            "You'll also get exposure to related technologies, like the web development framework ExpressJS, Redis and WebSockets.",
            "Only the first section of this course is free, but you can use your two-day Code School free trial to finish it."
        ]
    });
};

exports.tryMongoDb = function(req, res) {
    res.render('challenges/try-mongodb', {
        name: "Try MongoDB",
        links: ["http://try.mongodb.org/"],
        time: "30 minutes",
        steps: [

        ]
    });
};

exports.exploreYourNetworkWithTheLinkedInApi = function(req, res) {
    res.render('challenges/explore-your-network-with-the-linkedin-api', {
        name: "Explore Your Network with the LinkedIn API",
        links: ["http://developers.linkedin.com/"],
        time: "2 hours",
        steps: [
        ]
    });
};

exports.buildYourFirstApi = function(req, res) {
    res.render('challenges/build-your-first-api', {
        name: "Build Your First API",
        links: [""],
        time: "5 hours",
        steps: [
        ]
    });
};

exports.aggregateDataWithChronJobsAndScreenScraping = function(req, res) {
    res.render('challenges/aggregate-data-with-chron-jobs-and-screen-scraping', {
        name: "Aggregate Data with Chron Jobs and Screen Scraping",
        links: [""],
        time: "5 hours",
        steps: [
        ]
    });
};

exports.codeSchoolShapingUpWithAngularJsCourse = function(req, res) {
    res.render('challenges/code-school-shaping-up-with-angular-js-course', {
        name: "Codeschool's Shaping up with Angular.js",
        links: ["https://www.codeschool.com//courses/shaping-up-with-angular-js"],
        time: "5 hours",
        steps: [
            "AngularJS is a powerful front end JavaScript framework. It's more powerful than jQuery, but it's also more challenging to master.",
            "AngularJS is used heavily by Google and many other high tech companies. As such, it is a hot skill, and employers are looking for software engineers who are good with AngularJS."
        ]
    });
};

exports.reverseEngineerSnapchat = function(req, res) {
    res.render('challenges/reverse-engineer-snapchat', {
        name: "Reverse Engineer Snapchat",
        links: [""],
        time: "50 hours",
        steps: [
        ]
    });
};

exports.reverseEngineerReddit = function(req, res) {
    res.render('challenges/reverse-engineer-reddit', {
        name: "Reverse Engineer Reddit",
        links: [""],
        time: "50 hours",
        steps: [
        ]
    });
};

exports.reverseEngineerPintrest = function(req, res) {
    res.render('challenges/reverse-engineer-pintrest', {
        name: "Reverse Engineer Pintrest",
        links: [""],
        time: "50 hours",
        steps: [
        ]
    });
};

exports.helpANonprofitTeamProject = function(req, res) {
    res.render('challenges/help-a-nonprofit-team-project', {
        name: "Help a Nonprofit Team Project",
        links: [""],
        time: "200 hours",
        steps: [
        ]
    });
};

exports.helpANonprofitSoloProject = function(req, res) {
    res.render('challenges/help-a-nonprofit-solo-project', {
        name: "Help a Nonprofit Solo Project",
        links: [""],
        time: "200 hours",
        steps: [
        ]
    });
};

exports.crackTheCodingInterview = function(req, res) {
    res.render('challenges/crack-the-coding-interview', {
        name: "Crack the Coding Interview",
        links: [""],
        time: "20 hours",
        steps: [
        ]
    });
};