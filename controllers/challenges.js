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
        directions: ["Link up with the Free Code Camp community in our HipChat chat room.", "Just follow this link"],
        links: ["http://startbootstrap.com", "http://bitballoon.com", "http://atom.io"],
        challenges: [""]
    });
};

exports.installGithubAtomTextEditor = function(req, res) {
    res.render('challenges/install-github-atom-text-editor', {
        name: "Install Github's Atom Text Editor",
        video: "109134466",
        directions: [""],
        links: ["http://atom.io"],
        challenges: [""]
    });
};

exports.createAndDeployAWebsite = function(req, res) {
    res.render('challenges/create-and-deploy-a-website', {
        name: 'Create and Deploy a Website',
        video: "109134466",
        directions: ["In the next 5 minutes, you'll create a website and deploy it to the internet!"],
        links: ["http://startbootstrap.com", "http://bitballoon.com"],
        challenges: ["Now that you have Atom installed, open up the index page of the template you downloaded. Go through the index page and change all the text to be about cats.", "The images used on a website are stored in the \"images\" directory. Browse the web for cat pictures, save them to the \"images\" directory.", "Change the image href's so that your cat pictures show up in the template."]
    });
};

exports.startAPairProgrammingSession = function(req, res) {
    res.render('challenges/start-a-pair-programming-session', {
        name: "Start Your First Pair Programming Session",
        source: "Free Code Camp",
        video: "109547811",
        directions: [
            "What's all this Pair Programming stuff about? Let's find out!", "We'll use a popular pair programming tool called Screen Hero. We'll also visit the Free Code Camp chat room.", "We'll show you how to launch pair programming sessions right inside the chat room.", "Once you've \"paired\" with someone, they become your \"pair\". Show your new pair the website your just created."
        ],
        links: ["https://screenhero.com/download.html", "https://www.hipchat.com/invite/178107/cc2f6ea4dfac9e48b9a88b305adae48a"],
        challenges: ["Show your new pair the website you just created.", "Open up Atom and let them change some of the cat-related text on your website."]
    });
};

exports.addDynamicContentToYourWebsite = function(req, res) {
    res.render('challenges/add-dynamic-content-to-your-website', {
        name: "Add Dynamic Content to your Website with POWr.io",
        source: "Free Code Camp",
        video: "109599487",
        directions: [
            "The website you created earlier is cool, but it's not very interactive.", "Let's make it dynamic with POWr.io's drag-and-drop form and database tools!"
        ],
        links: ["http://startbootstrap.com", "http://www.powr.io", "http://bitballoon.com"],
        challenges: ["Add a POWr Twitter Feed widget to your website.", "Redeploy your website with BitBalloon and customize it to display tweets from a cat-related twitter account, like @TheDaiIyKitten"]
    });
};

exports.codecademyHtmlAndCssTrack = function(req, res) {
    res.render('courses/codecademy-html-and-css-track', {
        name: "Codecademy HTML & CSS Track",
        links: [ "http://www.codecademy.com/tracks/web"],
        time: 7,
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
        directions: [
            "Let's put those HTML and CSS skills to work!",
            "You'll learn bootstrap and see how you can build websites right in your browser with CodePen."
        ],
        links: ["http://getbootstrap.com/", "http://www.usatoday.com/", "http://codepen.io/"],
        challenges: ["Load the HealthCare.gov page in CodePen.", "Find some cat pictures online, copy their image URLs, and change the HealthCare.gov page to use these cat pictures instead of its normal images.", "HealthCare.gov uses a multi-column bootstrap layout. See if you can change the layout to be a single-column layout at all widths, not just mobile width. Hint: the \"row\" and \"col-\" classes control this. Check the Bootstrap documentation linked to above if you get stuck."]
    });
};

exports.codeSchoolTryJqueryCourse = function(req, res) {
    res.render('courses/code-school-try-jquery-course', {
        name: "Code School's Try jQuery Course",
        links: [ "https://www.codeschool.com/courses/try-jquery"],
        time: 7,
        directions: [
            "jQuery gives you an easy way to modify your HTML and CSS without reloading your page.",
            "Code School's interactive jQuery course will help you understand how to manipulate page elements and capture information that your users give you."
        ]
    });
};

exports.completeJqueryExercises = function(req, res) {
    res.render('courses/complete-jquery-exercises', {
        name: "Complete jQuery Exercises",
        links: ["http://jqexercise.droppages.com/"],
        time: 7,
        directions: [
            "jQuery gives you an easy way to modify your HTML and CSS without reloading your page.",
            "Code School's interactive jQuery course will help you understand how to manipulate page elements and capture information that your users give you."
        ]
    });
};

exports.codeSchoolDiscoverDevtoolsCourse = function(req, res) {
    res.render('courses/code-school-discover-devtools-course', {
        name: "Code School's Discover DevTools",
        links: [ "http://discover-devtools.codeschool.com/"],
        time: 4,
        directions: [
            "Did you know you can change the HTML and CSS on this page? You can even inject JavaScript. In fact, you can do this on any webpage!",
            "Chrome has built in DevTools that allow you to debug webpages, right in your browser. This is a super handy tool when you're building web applications.",
            "This course will walk you through using these tools, and test your new skills with 75 exercises."
        ]
    });
};

exports.customizeBootstrapWithBootswatch = function(req, res) {
    res.render('courses/customize-bootstrap-with-bootswatch', {
        name: "Customize Bootstrap with Bootswatch",
        links: [""],
        time: 4,
        directions: []
    });
};

exports.injectLifeWithCssTransformations = function(req, res) {
    res.render('courses/inject-life-with-css-transformations', {
        name: "Inject Life with CSS Transformations",
        links: [ ""],
        time: 4,
        directions: [
        ]
    });
};

exports.codecademyJavascriptTrack = function(req, res) {
    res.render('courses/codecademy-javascript-track', {
        name: "Codecademy JavaScript Track",
        links: [ "http://www.codecademy.com/tracks/javascript"],
        time: 10,
        directions: [
            "All right, now let's start coding!",
            "Codecademy's popular JavaScript track will teach you some basic syntax and common programming data structures in just a few hours."
        ]
    });
};

exports.getHelpTheHackerWayWithRsap = function(req, res) {
    res.render('courses/get-help-the-hacker-way-with-rsap', {
        name: "Get Help the Hacker Way with RSAP',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.completeTheEasyAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('courses/complete-the-easy-algorthim-scripting-challenges-on-coderbyte', {
        name: "Complete the Easy Algorithm Scripting Challenges on Coderbyte',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.harvardIntroductionToComputerScienceCs50Course = function(req, res) {
    res.render('courses/harvard-introduction-to-computer-science-cs50-course', {
        name: "Introduction to Computer Science",
        links: [ "https://www.edx.org/course/harvardx/harvardx-cs50x-introduction-computer-1022#.VDWSfSldWpQ"],
        time: 150,
        directions: [
            "Harvard's CS50 course is one of the most popular online courses of all time. It will give you a solid programming foundation.",
            "This course will introduce you to algorithms, databases, data structures, and a ton of theory.",
            "It's a long course, so be sure to mix it up with frequent pair programming sessions on FreeCodeCamp challenges."
        ]
    });
};

exports.completeTheMediumAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('courses/complete-the-medium-algorthim-scripting-challenges-on-coderbyte', {
        name: "Complete the Medium Algorithm Scripting Challenges on Coderbyte',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.stanfordsRelationalDatabasesMiniCourse = function(req, res) {
    res.render('courses/stanfords-relational-databases-mini-course', {
        name: "Stanford's Relational Databases Mini-course',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.stanfordsJsonMiniCourse = function(req, res) {
    res.render('courses/stanfords-json-mini-course', {
        name: "Stanford's JSON Mini-course',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.buildATextBasedAdventure = function(req, res) {
    res.render('courses/build-a-text-based-adventure', {
        name: "Build a Text-based Adventure',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.completeTheHardAlgorithmScriptingChallengesOnCoderbyte = function(req, res) {
    res.render('courses/complete-the-hard-algorthim-scripting-challenges-on-coderbyte', {
        name: "Complete the Hard Algorithm Scripting Challenges on Coderbyte',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.stanfordsSqlMiniCourse = function(req, res) {
    res.render('courses/stanfords-sql-mini-course', {
        name: "Stanford's SQL Mini-course',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.buildAnInterviewQuestionMachine = function(req, res) {
    res.render('courses/build-an-interview-question-machine', {
        name: "Build an Interview Question Machine',
        links: [""],
        time: 150,
        directions: [
        ]
    });
};

exports.codeSchoolTryGitCourse = function(req, res) {
    res.render('courses/code-school-try-git-course', {
        name: "Code School's Try Git Course",
        links: [ "https://www.codeschool.com/courses/try-git"],
        time: 2,
        directions: [
            "Have you ever accidentally deleted something? With Git, you will never have that problem again.",
            "Git is a Version Control System. It will track all changes to your files. That way you don't have to worry about your code breaking. You can just rewind time to back when your code worked right.",
            "This short course will help you install git and learn how it works."
        ]
    });
};

exports.installNodeJs = function(req, res) {
    res.render('courses/install-node-js', {
        name: "Install Node.js",
        links: [ ""],
        time: 2,
        directions: [
        ]
    });
};

exports.cloneAGithubRepo = function(req, res) {
    res.render('courses/clone-a-github-repo', {
        name: "Clone a Github Repo",
        links: [""],
        time: 2,
        directions: [
        ]
    });
};

exports.deployAnAppToHeroku = function(req, res) {
    res.render('courses/deploy-an-app-to-heroku', {
        name: "Deploy an app to Heroku",
        links: [""],
        time: 2,
        directions: [
        ]
    });
};

exports.codeSchoolRealTimeWithNodeJsCourse = function(req, res) {
    res.render('courses/code-school-real-time-with-node-js-course', {
        name: "Code School's Real-time web with Node.JS",
        links: [ "https://www.codeschool.com/courses/real-time-web-with-node-js"],
        time: 10,
        directions: [
            "Learn NodeJS, the web server that makes the MEAN Stack possible.",
            "You'll also get exposure to related technologies, like the web development framework ExpressJS, Redis and WebSockets.",
            "Only the first section of this course is free, but you can use your two-day Code School free trial to finish it."
        ]
    });
};

exports.tryMongoDb = function(req, res) {
    res.render('courses/try-mongodb', {
        name: "Try MongoDB",
        links: ["http://try.mongodb.org/"],
        time: 10,
        directions: [

        ]
    });
};

exports.exploreYourNetworkWithTheLinkedInApi = function(req, res) {
    res.render('courses/explore-your-network-with-the-linkedin-api', {
        name: "Explore Your Network with the LinkedIn API",
        links: ["http://developers.linkedin.com/"],
        time: 10,
        directions: [
        ]
    });
};

exports.buildYourFirstApi = function(req, res) {
    res.render('courses/build-your-first-api', {
        name: "Build Your First API",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};

exports.aggregateDataWithChronJobsAndScreenScraping = function(req, res) {
    res.render('courses/aggregate-data-with-chron-jobs-and-screen-scraping', {
        name: "Aggregate Data with Chron Jobs and Screen Scraping",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};

exports.codeSchoolShapingUpWithAngularJsCourse = function(req, res) {
    res.render('courses/code-school-shaping-up-with-angular-js-course', {
        name: "Codeschool's Shaping up with Angular.js",
        links: [ "https://www.codeschool.com//courses/shaping-up-with-angular-js"],
        time: 10,
        directions: [
            "AngularJS is a powerful front end JavaScript framework. It's more powerful than jQuery, but it's also more challenging to master.",
            "AngularJS is used heavily by Google and many other high tech companies. As such, it is a hot skill, and employers are looking for software engineers who are good with AngularJS."
        ]
    });
};

exports.reverseEngineerSnapchat = function(req, res) {
    res.render('courses/reverseEngineerSnapchat', {
        name: "Reverse Engineer Snapchat",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};

exports.reverseEngineerReddit = function(req, res) {
    res.render('courses/reverseEngineerReddit', {
        name: "Reverse Engineer Reddit",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};

exports.reverseEngineerPintrest = function(req, res) {
    res.render('courses/reverseEngineerPintrest', {
        name: "Reverse Engineer Pintrest",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};

exports.helpANonprofitTeamProject = function(req, res) {
    res.render('courses/help-a-nonprofit-team-project', {
        name: "Help a Nonprofit Team Project",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};

exports.helpANonprofitSoloProject = function(req, res) {
    res.render('courses/help-a-nonprofit-solo-project', {
        name: "Help a Nonprofit Solo Project",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};

exports.crackTheCodingInterview = function(req, res) {
    res.render('courses/crack-the-coding-interview', {
        name: "Crack the Coding Interview",
        links: [""],
        time: 10,
        directions: [
        ]
    });
};