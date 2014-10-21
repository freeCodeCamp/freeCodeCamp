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
exports.createAndDeployAWebsite = function(req, res) {
    res.render('challenges/create-and-deploy-a-website', {
        name: 'Create and Deploy a Website',
        image: 'http://startbootstrap.com/assets/img/templates/landing-page.jpg',
        video: "109134466",
        directions: ["In the next 5 minutes, you'll create a website and deploy it to the internet!"],
        links: ["http://startbootstrap.com", "http://bitballoon.com", "http://atom.io"],
        challenges: ["Now that you have Atom installed, open up the index page of the template you downloaded. Go through the index page and change all the text to be about cats.", "The images used on a website are stored in the \"images\" directory. Browse the web for cat pictures, save them to the \"images\" directory.", "Change the image href's so that your cat pictures show up in the template."]
    });
};

exports.startAPairProgrammingSession = function(req, res) {
    res.render('challenges/start-a-pair-programming-session', {
        name: "Start Your First Pair Programming Session",
        source: "Free Code Camp",
        video: "109547811",
        image: "https://screenhero.com/img/anim-collaboration.gif",
        directions: [
            "What's all this Pair Programming stuff about? Let's find out!", "We'll use a popular pair programming tool called Screen Hero. We'll also visit the Free Code Camp chat room.", "We'll show you how to launch pair programming sessions right inside the chat room.", "Once you've \"paired\" with someone, they become your \"pair\". Show your new pair the website your website."
        ],
        links: ["https://screenhero.com/download.html", "https://www.hipchat.com/invite/178107/cc2f6ea4dfac9e48b9a88b305adae48a"],
        challenges: ["Show your new pair the website you created.", "Open up Atom and let them change some of the cat-related text on your website."]
    });
};

exports.addDynamicContentToYourWebsite = function(req, res) {
    res.render('challenges/add-dynamic-content-to-your-website', {
        name: "Add Dynamic Content to your Website with POWr.io",
        source: "Free Code Camp",
        video: "109599487",
        image: "https://s3-us-west-1.amazonaws.com/powr/images/powr_showcase_bg_1.jpg",
        directions: [
            "The website you created earlier is cool, but it's not very interactive.", "Let's make it dynamic with POWr.io's drag-and-drop form and database tools!"
        ],
        links: ["http://startbootstrap.com", "http://www.powr.io", "http://bitballoon.com"],
        challenges: ["Add a POWr Twitter Feed widget to your website.", "Redeploy your website with BitBalloon and customize it to display tweets from a cat-related twitter account, like @TheDaiIyKitten"]
    });
};

exports.experimentWithHtmlAndCssInCodepen = function(req, res) {
    res.render('challenges/experiment-with-html-and-css-in-codepen', {
        name: "Create your first CodePen",
        source: "Free Code Camp",
        video: "109611164",
        image: "http://www.designtrending.com/wp-content/uploads/2013/02/codepen_split.png",
        directions: [
            "Let's put those HTML and CSS skills to work!",
            "You'll learn bootstrap and see how you can build websites right in your browser with CodePen."
        ],
        links: ["http://getbootstrap.com/", "http://www.usatoday.com/", "http://codepen.io/"],
        challenges: ["Load the HealthCare.gov page in CodePen.", "Find some cat pictures online, copy their image URLs, and change the HealthCare.gov page to use these cat pictures instead of its normal images.", "HealthCare.gov uses a multi-column bootstrap layout. See if you can change the layout to be a single-column layout at all widths, not just mobile width. Hint: the \"row\" and \"col-\" classes control this. Check the Bootstrap documentation linked to above if you get stuck."]
    });
};