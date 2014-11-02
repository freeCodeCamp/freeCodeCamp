/**
* GET /
* Home page.
*/
var Challenge = require('./../models/Challenge')

exports.index = function(req, res) {
    Challenge.find(function(err, challenges){
        res.render('challenges/index', {
            title: 'Challenges',
            challenges: challenges
        });
    });
};
exports.view = function(req, res) {
    Challenge.findById(req.param.id, function(err, challenge){
        res.render('challenges/view', {
            title: 'Challenge',
            challenge: challenge
        });
    });
};

exports.enterTheFreeCodeCampChatRoom = function(req, res) {
    res.render('challenges/enter-the-free-code-camp-chat-room', {
        name: 'Enter the Fre Code Camp Chat Room',
        video: "109134466",
        time: "5 minutes",
        directions: ["Link up with the Free Code Camp community in our HipChat chat room."],
        links: ["https://www.hipchat.com/invite/178107/cc2f6ea4dfac9e48b9a88b305adae48a"]
    });
};

exports.installGithubAtomTextEditor = function(req, res) {
    res.render('challenges/install-github-atom-text-editor', {
        name: "Install Github's Atom Text Editor",
        video: "109134466",
        time: "5 minutes",
        directions: [""],
        links: ["http://atom.io"]
    });
};

exports.createAndDeployAWebsite = function(req, res) {
    res.render('challenges/create-and-deploy-a-website', {
        name: 'Create and Deploy a Website',
        video: "109134466",
        time: "5 minutes",
        directions: ["In the next 5 minutes, you'll create a website and deploy it to the internet!"],
        links: ["http://startbootstrap.com", "http://bitballoon.com"]
    });
};

exports.startAPairProgrammingSession = function(req, res) {
    res.render('challenges/start-a-pair-programming-session', {
        name: "Start Your First Pair Programming Session",
        source: "Free Code Camp",
        video: "109547811",
        time: "5 minutes",
        directions: [
            "What's all this Pair Programming stuff about? Let's find out!", "We'll use a popular pair programming tool called Screen Hero. We'll also visit the Free Code Camp chat room.", "We'll show you how to launch pair programming sessions right inside the chat room.", "Once you've \"paired\" with someone, they become your \"pair\". Show your new pair the website your just created."
        ],
        links: ["https://screenhero.com/download.html"]
    });
};

exports.addDynamicContentToYourWebsite = function(req, res) {
    res.render('challenges/add-dynamic-content-to-your-website', {
        name: "Add Dynamic Content to your Website with POWr.io",
        source: "Free Code Camp",
        video: "109599487",
        time: "10 minutes",
        directions: [
            "The website you created earlier is cool, but it's not very interactive.", "Let's make it dynamic with POWr.io's drag-and-drop form and database tools!"
        ],
        links: ["http://startbootstrap.com", "http://www.powr.io", "http://bitballoon.com"]
    });
};

exports.codecademyHtmlAndCssTrack = function(req, res) {
    res.render('challenges/codecademy-html-and-css-track', {
        name: "Codecademy HTML & CSS Track",
        links: ["http://www.codecademy.com/tracks/web"],
        time: "7 hours",
        directions: [
            "Let's learn HTML and CSS! Then we'll understand the structure (HTML) and the style (CSS) that makes up all webpages.",
            "More than 5 million people have worked their way through this short, interactive course. Once you finish it, you'll be able create your own webpages from scratch."
        ]
    });
};

exports.experimentWithHtmlAndCssInCodepen = function(req, res) {
    res.render('challenges/experiment-with-html-and-css-in-codepen', {
        name: "Create your first CodePen",
        source: "Free Code Camp",
        video: "109611164",
        time: "30 minutes",
        directions: [
            "Let's put those HTML and CSS skills to work!",
            "You'll learn bootstrap and see how you can build websites right in your browser with CodePen.",
            "Load the HealthCare.gov page in CodePen.", "Find some cat pictures online, copy their image URLs, and change the HealthCare.gov page to use these cat pictures instead of its normal images.", "HealthCare.gov uses a multi-column bootstrap layout. See if you can change the layout to be a single-column layout at all widths, not just mobile width. Hint: the \"row\" and \"col-\" classes control this. Check the Bootstrap documentation linked to above if you get stuck."
        ],
        links: ["http://getbootstrap.com/", "http://www.usatoday.com/", "http://codepen.io/"]
    });
};

exports.codeSchoolTryJqueryCourse = function(req, res) {
    res.render('challenges/code-school-try-jquery-course', {
        name: "Code School's Try jQuery Course",
        links: ["https://www.codeschool.com/courses/try-jquery"],
        time: "2 hours",
        directions: [
            "jQuery gives you an easy way to modify your HTML and CSS without reloading your page.",
            "Code School's interactive jQuery course will help you understand how to manipulate page elements and capture information that your users give you."
        ]
    });
};

exports.completeJqueryExercises = function(req, res) {
    res.render('challenges/complete-jquery-exercises', {
        name: "Complete jQuery Exercises",
        links: ["http://jqexercise.droppages.com/"],
        time: "3 hours",
        directions: [
            "jQuery gives you an easy way to modify your HTML and CSS without reloading your page."
        ]
    });
};

exports.codeSchoolDiscoverDevtoolsCourse = function(req, res) {
    res.render('challenges/code-school-discover-devtools-course', {
        name: "Code School's Discover DevTools",
        links: ["http://discover-devtools.codeschool.com/"],
        time: "2 hours",
        directions: [
            "Did you know you can change the HTML and CSS on this page? You can even inject JavaScript. In fact, you can do this on any webpage!",
            "Chrome has built in DevTools that allow you to debug webpages, right in your browser. This is a super handy tool when you're building web applications.",
            "This course will walk you through using these tools, and test your new skills with 75 exercises."
        ]
    });
};

exports.customizeBootstrapWithBootswatch = function(req, res) {
    res.render('challenges/customize-bootstrap-with-bootswatch', {
        name: "Customize Bootstrap with Bootswatch",
        time: "15 minutes",
        links: ["http://bootswatch.com/"],
        directions: []
    });
};

exports.injectLifeWithCssTransformations = function(req, res) {
    res.render('challenges/inject-life-with-css-transformations', {
        name: "Inject Life with CSS Transformations",
        links: [""],
        time: "15 minutes",
        directions: [
        ]
    });
};

exports.codecademyJavascriptTrack = function(req, res) {
    res.render('challenges/codecademy-javascript-track', {
        name: "Codecademy JavaScript Track",
        links: [ "http://www.codecademy.com/tracks/javascript"],
        time: "10 hours",
        directions: [
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
        directions: [
        ]
    });
};

exports.completeTheEasyAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/complete-the-easy-algorthim-scripting-challenges-on-coderbyte', {
        name: "Complete the Easy Algorithm Scripting Challenges on Coderbyte",
        links: [""],
        time: "15 hours",
        directions: [
        ]
    });
};

exports.harvardIntroductionToComputerScienceCs50Course = function(req, res) {
    res.render('challenges/harvard-introduction-to-computer-science-cs50-course', {
        name: "Introduction to Computer Science",
        links: ["https://www.edx.org/course/harvardx/harvardx-cs50x-introduction-computer-1022#.VDWSfSldWpQ"],
        time: "150 hours",
        directions: [
            "Harvard's CS50 course is one of the most popular online courses of all time. It will give you a solid programming foundation.",
            "This course will introduce you to algorithms, databases, data structures, and a ton of theory.",
            "It's a long course, so be sure to mix it up with frequent pair programming sessions on FreeCodeCamp challenges."
        ]
    });
};

exports.completeTheMediumAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/complete-the-medium-algorthim-scripting-challenges-on-coderbyte', {
        name: "Complete the Medium Algorithm Scripting Challenges on Coderbyte",
        links: [""],
        time: "15 hours",
        directions: [
        ]
    });
};

exports.stanfordsRelationalDatabasesMiniCourse = function(req, res) {
    res.render('challenges/stanfords-relational-databases-mini-course', {
        name: "Stanford's Relational Databases Mini-course",
        links: [""],
        time: "10 hours",
        directions: [
        ]
    });
};

exports.stanfordsJsonMiniCourse = function(req, res) {
    res.render('challenges/stanfords-json-mini-course', {
        name: "Stanford's JSON Mini-course",
        links: [""],
        time: "2 hours",
        directions: [
        ]
    });
};

exports.buildATextBasedAdventure = function(req, res) {
    res.render('challenges/build-a-text-based-adventure', {
        name: "Build a Text-based Adventure",
        links: [""],
        time: "5 hours",
        directions: [
        ]
    });
};

exports.completeTheHardAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('challenges/complete-the-hard-algorthim-scripting-challenges-on-coderbyte', {
        name: "Complete the Hard Algorithm Scripting Challenges on Coderbyte",
        links: [""],
        time: "15 hours",
        directions: [
        ]
    });
};

exports.stanfordsSqlMiniCourse = function(req, res) {
    res.render('challenges/stanfords-sql-mini-course', {
        name: "Stanford's SQL Mini-course",
        links: [""],
        time: "10 hours",
        directions: [
        ]
    });
};

exports.buildAnInterviewQuestionMachine = function(req, res) {
    res.render('challenges/build-an-interview-question-machine', {
        name: "Build an Interview Question Machine",
        links: [""],
        time: "5 hours",
        directions: [
        ]
    });
};

exports.codeSchoolTryGitCourse = function(req, res) {
    res.render('challenges/code-school-try-git-course', {
        name: "Code School's Try Git Course",
        links: ["https://www.codeschool.com/courses/try-git"],
        time: "15 minutes",
        directions: [
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
        directions: [
        ]
    });
};

exports.cloneAGithubRepo = function(req, res) {
    res.render('challenges/clone-a-github-repo', {
        name: "Clone a Github Repo",
        links: [""],
        time: "15 minutes",
        directions: [
        ]
    });
};

exports.deployAnAppToHeroku = function(req, res) {
    res.render('challenges/deploy-an-app-to-heroku', {
        name: "Deploy an app to Heroku",
        links: [""],
        time: "15 minutes",
        directions: [
        ]
    });
};

exports.codeSchoolRealTimeWithNodeJsCourse = function(req, res) {
    res.render('challenges/code-school-real-time-with-node-js-course', {
        name: "Code School's Real-time web with Node.JS",
        links: ["https://www.codeschool.com/courses/real-time-web-with-node-js"],
        time: "5 hours",
        directions: [
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
        directions: [

        ]
    });
};

exports.exploreYourNetworkWithTheLinkedInApi = function(req, res) {
    res.render('challenges/explore-your-network-with-the-linkedin-api', {
        name: "Explore Your Network with the LinkedIn API",
        links: ["http://developers.linkedin.com/"],
        time: "2 hours",
        directions: [
        ]
    });
};

exports.buildYourFirstApi = function(req, res) {
    res.render('challenges/build-your-first-api', {
        name: "Build Your First API",
        links: [""],
        time: "5 hours",
        directions: [
        ]
    });
};

exports.aggregateDataWithChronJobsAndScreenScraping = function(req, res) {
    res.render('challenges/aggregate-data-with-chron-jobs-and-screen-scraping', {
        name: "Aggregate Data with Chron Jobs and Screen Scraping",
        links: [""],
        time: "5 hours",
        directions: [
        ]
    });
};

exports.codeSchoolShapingUpWithAngularJsCourse = function(req, res) {
    res.render('challenges/code-school-shaping-up-with-angular-js-course', {
        name: "Codeschool's Shaping up with Angular.js",
        links: ["https://www.codeschool.com//courses/shaping-up-with-angular-js"],
        time: "5 hours",
        directions: [
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
        directions: [
        ]
    });
};

exports.reverseEngineerReddit = function(req, res) {
    res.render('challenges/reverse-engineer-reddit', {
        name: "Reverse Engineer Reddit",
        links: [""],
        time: "50 hours",
        directions: [
        ]
    });
};

exports.reverseEngineerPintrest = function(req, res) {
    res.render('challenges/reverse-engineer-pintrest', {
        name: "Reverse Engineer Pintrest",
        links: [""],
        time: "50 hours",
        directions: [
        ]
    });
};

exports.helpANonprofitTeamProject = function(req, res) {
    res.render('challenges/help-a-nonprofit-team-project', {
        name: "Help a Nonprofit Team Project",
        links: [""],
        time: "200 hours",
        directions: [
        ]
    });
};

exports.helpANonprofitSoloProject = function(req, res) {
    res.render('challenges/help-a-nonprofit-solo-project', {
        name: "Help a Nonprofit Solo Project",
        links: [""],
        time: "200 hours",
        directions: [
        ]
    });
};

exports.crackTheCodingInterview = function(req, res) {
    res.render('challenges/crack-the-coding-interview', {
        name: "Crack the Coding Interview",
        links: [""],
        time: "20 hours",
        directions: [
        ]
    });
};