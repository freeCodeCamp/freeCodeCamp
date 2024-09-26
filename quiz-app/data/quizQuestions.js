const quizQuestions = [
    {
        question: "What is the JavaScript engine used by Node.js?",
        options: ["V8", "SpiderMonkey", "Chakra", "Deno"],
        answer: "V8"
    },
    {
        question: "Which command is used to install a package with npm?",
        options: ["npm start", "npm install", "npm add", "npm init"],
        answer: "npm install"
    },
    {
        question: "Which framework is built on top of Node.js for building web applications?",
        options: ["Deno", "Express", "React", "Angular"],
        answer: "Express"
    },
    {
        question: "Which command initializes a new npm project?",
        options: ["npm init", "npm create", "npm start", "npm new"],
        answer: "npm init"
    },
    {
        question: "What does the 'next' function do in Express middleware?",
        options: ["Ends the request", "Moves to the next middleware", "Creates a new route", "Handles errors"],
        answer: "Moves to the next middleware"
    },
    {
        question: "Which statement is true about Deno?",
        options: ["It is built on the V8 engine", "It uses npm for package management", "It does not support TypeScript", "It is synchronous by default"],
        answer: "It is built on the V8 engine"
    },
    {
        question: "How do you connect to a SQL database in Node.js?",
        options: ["Using Express", "Using mongoose", "Using sequelize", "Using fetch"],
        answer: "Using sequelize"
    },
    {
        question: "Which of the following is a package manager for JavaScript?",
        options: ["Yarn", "pip", "gem", "cargo"],
        answer: "Yarn"
    },
    {
        question: "Which method is used to parse incoming request bodies in Express?",
        options: ["express.json()", "bodyParser()", "express.urlencoded()", "bodyParser.json()"],
        answer: "express.json()"
    },
    {
        question: "What is the default port for an Express app?",
        options: ["3000", "8000", "5000", "8080"],
        answer: "3000"
    },
    {
        question: "How do you start an Express server?",
        options: ["app.listen(port)", "server.start(port)", "http.createServer()", "app.run(port)"],
        answer: "app.listen(port)"
    },
    {
        question: "Which command updates a package in npm?",
        options: ["npm update", "npm install --update", "npm upgrade", "npm refresh"],
        answer: "npm update"
    },
    {
        question: "Which library is commonly used for SQL database interactions in Node.js?",
        options: ["Mongoose", "Sequelize", "Knex", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which command removes a package from your project?",
        options: ["npm delete", "npm uninstall", "npm remove", "npm purge"],
        answer: "npm uninstall"
    },
    {
        question: "How do you define a route in Express?",
        options: ["app.route('/path')", "app.get('/path')", "app.use('/path')", "app.method('/path')"],
        answer: "app.get('/path')"
    },
    {
        question: "What file is created when you run 'npm init'?",
        options: ["package.lock.json", "package.json", "config.json", "npm.json"],
        answer: "package.json"
    },
    {
        question: "Which statement is true about the V8 engine?",
        options: ["It is only for Node.js", "It is developed by Microsoft", "It is written in C++", "It does not support ES6"],
        answer: "It is written in C++"
    },
    {
        question: "What is the purpose of the 'cors' package in Express?",
        options: ["Database connection", "Enable Cross-Origin Resource Sharing", "File uploads", "Session management"],
        answer: "Enable Cross-Origin Resource Sharing"
    },
    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: "MongoDB"
    },
    {
        question: "What is the main purpose of using a SQL database?",
        options: ["To store unstructured data", "To store data in a structured format", "For caching", "For logging"],
        answer: "To store data in a structured format"
    }
];

module.exports = quizQuestions;
