---
id: 600fc4e7651ba2962400b077
title: Get Started with MongoDB Atlas
challengeType: 2
forumTopicId: 301540
dashedName: get-started-with-mongodb-atlas
---

# --description--

For the following challenges, you are going to use MongoDB to store data. To simplify the configuration, you'll use a service called MongoDB Atlas.

<strong>Get Started with MongoDB Atlas</strong>

MongoDB Atlas is a MongoDB Database-as-a-Service platform, which means that they configure and host the database for you. Then, your only responsibility will be to populate your database with what matters: data.

In this tutorial, you will:

- Create a MongoDB Atlas account
- Create a new cluster
- Create a new user for the database
- Allow access from all IP addresses
- Connect to your cluster

<strong>Create a MongoDB Atlas account</strong>

- <a href='https://account.mongodb.com/account/register' target='_blank' rel='no-follow'>Go here</a> to sign up for a new MongoDB Atlas account.
- Fill the registration form with your information and click **Sign up**.

<strong>Create a new cluster</strong>

- On the next page, fill in your organization's name, project's name, select JavaScript as your preferred programming language, and click the green **Continue** button.
- Click the **Create a cluster** button under Shared Clusters. This should be the only free option.
- In the **Cloud Provider & Region** dropdown, leave this as the default (typically AWS).
- In the **Cluster Tier** dropdown, leave this as the default, `M0 Sandbox (Shared RAM, 512 MB Storage)`.
- In the **Cluster Name** dropdown, you can give your cluster a name, or leave it as the default, `Cluster 0`.
- Click the green **Create Cluster** button at the bottom of the screen.
- You should now see the message `Your cluster is being created - New clusters take between 1-3 minutes to provision.` Wait until the cluster is created before going to the next step.

<strong>Create a new user for the database</strong>

- On the left side of screen, click on **Database Access**.
- Click the green **Add New Database User** button.
- In the modal, enter a new username and password.
- Under **Database User Privileges**, leave this as the default option, **Read and write to any database**.
- Click the **Add User** button to create your new user.

<strong>Allow access from all IP addresses</strong>

- On the left side of the screen, click on **Network Access**.
- Click the green **Add IP Address** button.
- In the modal, click the **ALLOW ACCESS FROM ANYWHERE** button. You should see `0.0.0.0/0` in the Access List Entry entry field.
- Click the green **Confirm** button.

<strong>Connect to your cluster</strong>

- Clicking on the green **Get Started** button in the bottom left of your screen should now show you the final step, **Connect to your cluster**, click on it.

- On the left side of the screen, click on **Clusters**.
- Click the **Connect** button for your cluster.
- In the popup modal, click on **Connect your application**.
- You should see the URI you'll use to connect to your database similar to this: <pre class='inline-pre'>mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<db-name>?retryWrites=true&w=majority</pre>.
- Click the **Copy** button to copy your URI to your clipboard.

Notice that the <pre class='inline-pre'>&lt;username&gt;</pre> and <pre class='inline-pre'>&lt;password&gt;</pre> fields of URI you copied are already filled out for you. All you need to do is replace the <pre class='inline-pre'>&lt;password&gt;</pre> field with the one you created in the previous step.

And that's it — you now have the URI to add to your application and connect to your database. Keep this URI safe somewhere so you can use it later.

Feel free to create separate databases for different applications. You just need to create a new project under your current MongoDB Atlas account, build a new cluster, add a new user, allow access from all IP addresses, and connect to your cluster to obtain the new URI.

# --instructions--

After you set up a hosted database on MongoDB Atlas, start this project on Repl.it using <a rel='noopener noreferrer' target='_blank' href='https://repl.it/github/freeCodeCamp/boilerplate-mongomongoose'>this link</a> or clone <a rel='noopener noreferrer' target='_blank' href='https://github.com/freeCodeCamp/boilerplate-mongomongoose/'>this repository</a> on GitHub. If you use Repl.it, remember to save the link to your project somewhere safe.

Then, submit a link to your project below to move onto the next challenge.

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
