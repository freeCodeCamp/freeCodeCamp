---
title: Guide for Using MongoDB and Deploying to Heroku
---
In this guide let's see how to work with MongoDB locally and with `mLab` for deploying it to Heroku. Alternatively you can also use `mLab` add-on in Heroku , It is free but it may require your credit card details. So, if you are not intrested in providing your credit card details you can go with <a href='https://mlab.com' target='_blank' rel='nofollow'>mLab</a> website.

## Setting up a free account on Heroku and `mLab`:

Sign up for <a href='https://signup.heroku.com/' target='_blank' rel='nofollow'>Heroku</a> and <a href='https://mlab.com/signup/' target='_blank' rel='nofollow'>mLab</a>

## Starting your Mongodb(Locally):

To start your DB on your own system execute the following command:

    # Create a directory named 'data' if it doesn't exist
    $ mongod --port 27017 --dbpath=./data

Now your Db is running at-

`mongodb://localhost:27017/my_database_name`

If you are using c9 and If you are having trouble starting your DB in C9 refer to this <a href='https://community.c9.io/t/setting-up-mongodb/1717' target='_blank' rel='nofollow'>page</a>

## Starting your Mongodb(`mLab`):

1.  After Creating your `mLab` Account, click on **Create new** button and select Single-node -> Sandbox to get the free Db and give your database a name (I've created a db named 'food' for this as an example) .
2.  Now a database is created with the name 'food',You can create a new collection of your own.
3.  Finally Add a User/Users who can access this Database,While Adding a user it will ask for username and password which are used to access the Database.

Now your DB is running at url something like this -

`mongodb://username:password@ds01316.mlab.com:1316/food`

where username and password are the details that you've given when you added a user.

You can find your DB url at <a href='https://mlab.com/databases/your_database_name' target='_blank' rel='nofollow'>https://mlab.com/databases/your_database_name</a>

## Making a Connection with MongoDB in Node.js (While DB is running on your Local System):

To work with the database, First you need to create a connection. In this section, we will be using MongoDB's native Node.js driver to create the connection with the MongoDB server. To install the mongodb native drivers, use the npm command to install the mongodb module. After that, run the following command in your project directory.

`npm install mongodb`

Basic Code for connecting to MongoDB

    //lets require/import the mongodb native drivers.
    var mongodb = require('mongodb');

    //We need to work with "MongoClient" interface in order to connect to a mongodb server.
    var MongoClient = mongodb.MongoClient;

    // Connection URL. This is where your mongodb server is running.

    //(Focus on This Variable)
    var url = 'mongodb://localhost:27017/my_database_name';      
    //(Focus on This Variable)

    // Use connect method to connect to the Server
      MongoClient.connect(url, function (err, db) {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        console.log('Connection established to', url);

        // do some work here with the database.

        //Close connection
        db.close();
      }
    });

For more examples to work with MongoDB you can refer this <a href='http://blog.modulus.io/mongodb-tutorial' target='_blank' rel='nofollow'>blog</a>

We need to know where our mongodb server is running. The url represents the location where the mongodb server instance is running such that we can connect to it. The url contains the database name to which we intend to connect.

Assuming that your database is running on the url mentioned above, let us now focus on the Url connecting the Database(local)

`var url = 'mongodb://localhost:27017/my_database_name';`

### Making a Connection with MongoDB in Node.js (While DB is running in your `mLab`):

The url for connecting to `mLab` DB looks like this

`var url = 'mongodb://username:password@ds01316.mlab.com:1316/food';`

You can replace the url variable with this and everything will be working exactly the way it should be and finally your database is safe and secure at `mLab` where you can view your collections,users,backups etc..

### Important Note:

But Commiting your username and password to your public repo is sometimes very dangerous so never commit them into public repositories, Instead you can use environment variables to store the url (containing username and password) , to do this in your **local** system

For Mac/Linux users, you can simply type:

`export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"`

For Windows users:

`SET MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

After setting the Environment variables you need to call the Environment Variable into your code. You can do it by typing this

`var url = process.env.MONGOLAB_URI;`

Now your MongoDb url is inserted into your code safely. You can now commit it and deploy it to your heroku.

If you need more help how to deploy into Heroku you can refer this <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Heroku-Deployment-Guide' target='_blank' rel='nofollow'>Wiki</a>

## Final Steps:

After Deploying your code to your Heroku App, you need to set the environment variable for the Code in heroku.

To do this, you need to run the following command from your heroku remote,

`heroku config:set MONGOLAB_URI=mongodb://username:password@ds01316.mlab.com:1316/food`

Thats it, Your app is now successfully deployed in heroku with `mLab` DB