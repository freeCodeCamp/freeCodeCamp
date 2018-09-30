---
title: Introduction to the MongoDB and Mongoose Challenges
block: MongoDB and Mongoose
superBlock: APIs and Microservices
---
## Introduction to the MongoDB and Mongoose Challenges

MongoDB is a database that stores data records (documents) for use by an application. Mongo is a non-relational, "NoSQL" database. This means Mongo stores all data associated within one record, instead of storing it across many preset tables as in a SQL database. Some benefits of this storage model are:

- Scalability: by default, non-relational databases are split (or "shared") across many systems instead of only one. This makes it easier to improve performance at a lower cost.
- Flexibility: new datasets and properties can be added to a document without the need to make a new table for that data.
- Replication: copies of the database run in parallel so if one goes down, one of the copies becomes the new primary data source.

While there are many non-relational databases, Mongo's use of JSON as its document storage structure makes it a logical choice when learning backend JavaScript. Accessing documents and their properties is like accessing objects in JavaScript.

Mongoose.js is an npm module for Node.js that allows you to write objects for Mongo as you would in JavaScript. This can make is easier to construct documents for storage in Mongo.

Working on these challenges will involve you writing your code on Glitch on our starter project. After completing each challenge you can copy your public glitch url (to the homepage of your app) into the challenge screen to test it! Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using [this link](https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mongomongoose/) or clone [this repository](https://github.com/freeCodeCamp/boilerplate-mongomongoose/) on GitHub! If you use Glitch, remember to save the link to your project somewhere safe!

## Use mLab to host a free mongodb instance for your projects

For the following challenges, we are going to start using MongoDB to store our data. To simplify the configuration, we are going to use mLab.

mLab is a MongoDB Database-as-a-Service platform, which basically means that they configure and host the database for you, making it so the only responsibility you have is to populate your database with what matters: data!
We are going to show you how to:

- Create an mLab account.
- Create a free online database.
- Create a new admin user on the database, so you can access it.
- Get the mLab URI, which you will use in your application to connect to your database.

### Create an mLab account

Let's start by <a href='https://mlab.com/' target='_blank' rel='no-follow'>going to mLab</a>.

Once you open the mLab page, you should sign up for a new account.

- Click the <a href='https://mlab.com/signup/' target='_blank' rel='no-follow'>Sign Up</a> button in the top right corner to open the registration page.
- Fill the registration form with your information and send it.
- You should be logged into your new, unverified account.
- In the top of the screen, a message should appear asking to send you an e-mail for account verification. Send and confirm it.
- After you confirm your account, click **Create new** in the *MongoDB Deployments* section.

### Create a free online database.

Now we are going to create the actual database you are going to be using.

- Choose a *Cloud Provider* from the available list.
- Select the *Sandbox* plan type, which is the only one with no cost, and press **Continue**.
- Select a region for your Sandbox, from the available list, and press **Continue**.
- Input a name for your database. This name will be used in the URI for your database. After that, press **Continue**.

A summary of all your choices should appear, allowing you to change any information provided in the previous steps. Press **Submit Order** to confirm the information.


### Create a new admin user on the database

After you confirmed your configuration, a new sandbox should have been created in the *MongoDB Deployments* section. We are now going to create an administrator, so you can use the database in your application.

- Click the newly-created database.
- Click the *Users* section.
- Click the **Add database user** button.
- Input an username and password for your administrator. Do not mark it as read-only or you will not be able to add any information to the database with this user.

### Get the mLab URI

Almost done! We have created our new database and created an user to access it, so we just need to find a way to use it in our applications.

- In your database page, you should see some instructions about connecting using the standard MongoDB URI.
- The line should look like this `mongodb://dbuser:dbpassword@ds0<PORT>.mlab.com:<PORT>/<DATABASE-NAME>`.
- Copy this URI and substitute dbuser and dbpassword with the information for the user you previously created in the database.
- That's it! This is the URI you will add to your application to connect to your database. Keep this URI safe somewhere, so you can use it later!
- Feel free to create separate databases for different applications, if they don't have an use for the same data. You just need to create the sandbox, user and obtain the new URI.
