[![freeCodeCamp Social Banner](https://cdn.freecodecamp.org/platform/universal/fcc_banner_new.png)](https://www.freecodecamp.org/)

[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](https://www.firsttimersonly.com/)
[![Discord](https://img.shields.io/discord/692816967895220344?logo=discord&label=Discord&color=5865F2)](https://discord.gg/PRyKn3Vbay)
[![LFX Active Contributors](https://insights.linuxfoundation.org/api/badge/active-contributors?project=freecodecamp&repos=https://github.com/freeCodeCamp/freeCodeCamp)](https://insights.linuxfoundation.org/project/freecodecamp/repository/freecodecamp-freecodecamp)

## freeCodeCamp.org's open-source codebase and curriculum

[freeCodeCamp.org](https://www.freecodecamp.org) is a friendly community where you can learn to code for free. It is run by a [donor-supported 501(c)(3) charity](https://www.freecodecamp.org/donate) to help millions of busy adults transition into tech. Our community has already helped more than 100,000 people get their first developer job.

Our full-stack web development and machine learning curriculum is completely free and self-paced. We have thousands of interactive coding challenges to help you expand your skills.

## Table of Contents

- [Certifications](#certifications)
- [The Learning Platform](#the-learning-platform)
- [Reporting Bugs and Issues](#reporting-bugs-and-issues)
- [Reporting Security Issues and Responsible Disclosure](#reporting-security-issues-and-responsible-disclosure)
- [Contributing](#contributing)
- [Platform, Build and Deployment Status](#platform-build-and-deployment-status)
- [License](#license)

### Certifications

freeCodeCamp.org offers several free developer certifications that make up the [Full-Stack Developer Curriculum](https://www.freecodecamp.org/learn/full-stack-developer-v9/):

- [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9/)
- [JavaScript](https://www.freecodecamp.org/learn/javascript-v9/)
- [Front-End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries-v9/)
- [Python](https://www.freecodecamp.org/learn/python-v9/)
- [Relational Databases](https://www.freecodecamp.org/learn/relational-databases-v9/)
- [Back-End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/)

Each of these certifications involves completing interactive lessons, workshops, labs, reviews, and quizzes. Throughout the certification, you'll need to complete 5 required projects to qualify for the exam. Once you pass the exam, then you can claim the certification.

freeCodeCamp.org also offers free language certifications designed around internationally recognized proficiency levels:

- [A2 English for Developers (Beta)](https://www.freecodecamp.org/learn/a2-english-for-developers/)
- [B1 English for Developers (Beta)](https://www.freecodecamp.org/learn/b1-english-for-developers/)
- [A1 Professional Spanish (Beta)](https://www.freecodecamp.org/learn/a1-professional-spanish/)
- [A1 Professional Chinese (Beta)](https://www.freecodecamp.org/learn/a1-professional-chinese/)

Each of these certifications is organized into modules, with sections for warm-ups, lessons, practice exercises, review pages, and quizzes to ensure you fully grasp the material before progressing to the next module. You'll need to complete all of the quizzes in order to qualify for the exam at the end of the certification.

Once you've earned a certification, you will always have it. You will always be able to link to it from your LinkedIn or resume. And when your prospective employers or freelance clients click that link, they'll see a verified certification specific to you.

The one exception to this is if we discover violations of our [Academic Honesty Policy](https://www.freecodecamp.org/news/academic-honesty-policy/). When we catch people unambiguously plagiarizing (submitting other people's code or projects as their own without citation), we do what all rigorous institutions of learning should do - we revoke their certifications and ban those people.

In addition, to help prepare for job interviews, freeCodeCamp.org includes The Odin Project (freeCodeCamp Remix), Coding Interview Prep, Project Euler, and Rosetta Code.

A free, professional Foundational C# with Microsoft Certification is also available.

### The Learning Platform

This code is running live at [freeCodeCamp.org](https://www.freecodecamp.org).

Our community also has:

- A [forum](https://forum.freecodecamp.org) where you can usually get programming help or project feedback within hours.
- A [YouTube channel](https://youtube.com/freecodecamp) with free courses on Python, SQL, Android, and a wide variety of other technologies.
- A [technical publication](https://www.freecodecamp.org/news) with thousands of programming tutorials and articles about mathematics and computer science.
- A [Discord server](https://discord.gg/Z7Fm39aNtZ) where you can hang out and talk with developers and people who are learning to code.

> #### [Join the community here](https://www.freecodecamp.org/signin).

### Reporting Bugs and Issues

If you think you've found a bug, first read the [how to report a bug](https://forum.freecodecamp.org/t/how-to-report-a-bug/19543) article and follow its instructions.

If you're confident it's a new bug and have confirmed that someone else is facing the same issue, go ahead and create a new GitHub issue. Be sure to include as much information as possible so we can reproduce the bug.

### Reporting Security Issues and Responsible Disclosure

We appreciate responsible disclosure of vulnerabilities that might impact the integrity of our platforms and users.

> #### [Read our security policy and follow these steps to report a vulnerability](https://contribute.freecodecamp.org/#/security).

### Contributing

The freeCodeCamp.org community is possible thanks to thousands of kind volunteers like you. We welcome all contributions to the community and are excited to welcome you aboard.

> #### [Please follow these steps to contribute](https://contribute.freecodecamp.org).

Recent Contributions:

![Alt](https://repobeats.axiom.co/api/embed/89be0a1a1c8f641c54f9234a7423e7755352c746.svg 'Repobeats analytics image')

### License

Copyright © 2014 freeCodeCamp.org

The content of this repository is bound by the following licenses:

- The computer software is licensed under the [BSD-3-Clause](LICENSE.md) license.
- The learning resources in the [`/curriculum`](/curriculum) directory including their subdirectories therein are copyright © 2014 freeCodeCamp.org




freeCodeCamp can be enhanced and improved using these suggestions!!!

### freeCodeCamp — Simple Audit Report  
**Only Main Problems and Fixes (No Technical Terms)**

#### SECTION 1 — SECURITY PROBLEMS (Most Important)

**1.1 Website Security Instruction is Too Weak**  
**Problem**: The website tells browsers to stay secure for only 5 minutes. After that, the protection stops working.  
**Why it matters**: Hackers can more easily spy on or change information between the user and the website.  
**What to do**:  
- Change it to last for 1 full year right away.  
- After it works well for one month, make it last for 2 years and add extra protection.  
- Register the website with a special security list.

**1.2 Protection Cookie is Not Properly Secured**  
**Problem**: A special cookie used to stop fake requests does not clearly say “only use on secure connections” when the site is live.  
**Why it matters**: It could be sent in an unsafe way in some situations.  
**What to do**:  
- Make sure the cookie is only sent on secure connections in the live version.  
- Think about adding extra protection to this cookie.  
- Add a test to check it works correctly.

**1.3 Rules for Other Websites are Confusing and Risky**  
**Problem**: When a request comes from an unknown website, the server sometimes sends a confusing message back. The team even left a note saying they were unsure about this.  
**Why it matters**: It can lead to mistakes and is not the safest way.  
**What to do**:  
- Stop sending permission messages to websites that are not allowed.  
- Use a standard and simpler method to handle these rules.

**1.4 Protection Against Malicious Code is Very Weak**  
**Problem**: Only one small protection against harmful pop-ups is turned on. Almost nothing stops dangerous code from running.  
**Why it matters**: This is one of the best ways to protect users from hacked accounts and bad code.  
**What to do**:  
- First turn on a mode that only reports problems (don’t block yet).  
- Watch the reports for a few weeks, then make the protection stronger step by step.

---

#### SECTION 2 — APP STRUCTURE PROBLEMS

**2.1 No Limit on How Many Times People Can Use Public Pages**  
**Problem**: Anyone can keep calling public parts of the site (like daily challenges or status) as many times as they want.  
**Why it matters**: Bad actors can overload the server and make the site slow or unavailable for everyone.  
**What to do**:  
- Add a limit on how many requests one person can make in a short time.  
- Allow higher limits only where really needed.

**2.2 No Clear Limit on How Much Information Can Be Sent**  
**Problem**: The server does not clearly control how much data people can send in one request (for example, when submitting code).  
**Why it matters**: Someone could send very large amounts of data to slow down or crash the server.  
**What to do**:  
- Set a reasonable maximum size for all requests.  
- Allow bigger sizes only on specific parts that actually need it.

**2.3 Database Check is Missing at Start**  
**Problem**: The website starts running even if the database is not working or cannot be reached. Problems only appear later when people try to use the site.  
**Why it matters**: This makes it hard to know if everything is ready before users see the site.  
**What to do**:  
- Check the database connection as soon as the app starts. If it fails, stop and show a clear error.  
- Add a simple health check page so monitoring tools can see if the database is working.

**2.4 Error Messages Show Internal Codes**  
**Problem**: When something goes wrong, the response sometimes shows internal message codes instead of a normal clear message.  
**Why it matters**: It looks unprofessional and can confuse users or other developers.  
**What to do**:  
- Show a simple, clear message like “Something went wrong, please try again” for most cases.  
- Keep special codes only for internal web pages.

---

#### SECTION 3 — PERFORMANCE PROBLEMS

**3.1 Building the Website Uses Too Much Memory**  
**Problem**: Creating the main website requires a very large amount of computer memory (7 GB).  
**Why it matters**: It is expensive to run, hard for normal developers to build on their computers, and suggests the site is not built efficiently.  
**What to do**:  
- Find out which parts use the most memory.  
- Make the website smaller and more efficient (better image handling, load things only when needed).  
- Try to reduce memory use to 4 GB or less.

**3.2 Public Pages Are Not Allowed to Be Saved**  
**Problem**: Even pages that everyone can see (like daily challenges) are told “do not save or reuse this information”.  
**Why it matters**: Every visitor must go to the server every time, making the site slower and putting more load on it.  
**What to do**:  
- Allow safe, short-term saving for public read-only pages.  
- Keep strong “do not save” rules only for private or sensitive user information.

---

#### SECTION 4 — MAINTAINER AND PROCESS PROBLEMS

**4.1 Settings Are Not Checked When Starting**  
**Problem**: There are more than 30 important settings needed to run the site. If any is missing or wrong, the app starts but crashes later.  
**Why it matters**: New people working on the project waste a lot of time fixing mysterious problems.  
**What to do**:  
- Add a check at the very beginning that clearly tells what is missing or wrong.

**4.2 Many Helper Tools Have Poor Instructions**  
**Problem**: There are many internal tools and scripts, but almost no clear explanation of what they do or when to use them.  
**Why it matters**: New contributors feel lost and don’t know how to help maintain the project.  
**What to do**:  
- Create simple documentation that lists every tool and explains its purpose.  
- Add short guides inside each tool folder.

**4.3 Code Quality Checks Don’t Cover Everything**  
**Problem**: Checks for clean and correct code do not run properly on all parts of the project when changes are made.  
**Why it matters**: Poor quality changes can get added without anyone noticing.  
**What to do**:  
- Set up better checks that run automatically before changes are accepted.

**4.4 Many Important Decisions Are Left Unresolved**  
**Problem**: Several key security and design questions are marked with old notes saying “to be decided later”.  
**Why it matters**: Important choices keep getting delayed, and new people don’t know what the plan is.  
**What to do**:  
- Turn each important note into a proper task with a responsible person and deadline.

**4.5 Not All Parts of the Project Have Clear Owners**  
**Problem**: Some files and folders do not have anyone responsible for reviewing changes.  
**Why it matters**: Risky changes can be added without proper checking.  
**What to do**:  
- Add a rule so every change needs at least one reviewer from the main team.

**4.6 No Plan for Future Changes to the Backend**  
**Problem**: The backend services have no clear version number. Future updates could break things for everyone at the same time.  
**What to do**:  
- Decide on a clear way to handle future versions.  
- Document the decision so everyone understands the plan.

---

### Priority Summary (Easy Version)

**Do Right Away (Security Risks)**:  
- Fix the weak security instruction (1.1)  
- Secure the protection cookie (1.2)  
- Improve rules for other websites (1.3)  
- Add limits on public page usage (2.1)

**Do Soon**:  
- Check all important settings at startup (4.1)  
- Check database when starting (2.3)

**Do in Next Few Months**:  
- Strengthen protection against bad code (1.4)  
- Fix unclear error messages (2.4)  
- Reduce memory used when building the site (3.1)  
- Allow safe saving of public pages (3.2)  
- Improve instructions for all helper tools (4.2)

---


Disclaimer - I am not responsible for any unfortuante mishaps!!
