## Topcoder freeCodeCamp modifications README

This file describes the modifications Topcoder made to the freeCodeCamp.org application to support providing FCC course content within the Topcoder Academy and Learning Paths effort. It also provides details about how the application is deployed and hosted in our AWS cloud environment.

## Table of Contents

- [Learning Platform](#the-learning-platform)
- [Learning Platform API](#the-learning-platform-api)
- [MongoDB Configuration](#mongodb-configuration)
- [CI/CD Configuration](#cicd-configuration)
- [Syncing with FCC/main](#syncing-with-fccmain)

### The Learning Platform

The freeCodeCamp application is hosted in the [platform-ui](https://github.com/topcoder-platform/platform-ui) application, within the [Learn tool](https://github.com/topcoder-platform/platform-ui/tree/dev/src-ts/tools/learn). The Learn application uses the [learning-paths-api](https://github.com/topcoder-platform/learning-paths-api) to manage and display course metadata, such as the certifications and courses available, and to track user course progress independently of the progress tracking performed by the hosted freeCodeCamp application.

The freeCodeCamp code editors and course material viewing tools are hosted inside an iframe and communicate with the parent platform-ui application via messages, which in turn trigger calls to the learning paths API. For example, when a user completes a course, a course completion message is sent to from the freeCodeCamp application to the parent platform-ui app, which then makes an API call to record the event in the Topcoder Academy datastore.

#### Build and Deploy Process

The freeCodeCamp application is statically built during deployment and hosted in AWS S3 via a Cloudfront distribution. The S3 bucket had to be specially configured to support this type of deployment, in particular to allow the correct URLs to be used by the platform-ui and the embedded freeCodeCamp application.

#### Authentication

The application natively uses Auth0 authentication, which we had to modify to use Topcoder's login and authentication process. (details)

(TODO - more detail here on the major things we did)

### The Learning Platform API

The freeCodeCamp API, which is responsible for managing user progress and sessions in MongoDB, was modified to support Topcoder Auth0 authentication and to reflect the path at which the API was deployed in AWS.

#### Build and Deploy Process

The API is deployed via AWS Elastic Container Service. See the [api/ECSDockerfile](./docker/api/ECSDockerfile) for details of this configuration. A key thing to note is that the freeCodeCamp application and API rely in the presence of a .env file that contains all of the required environment variables.

Topcoder's standard deployment process is to store sensitive deployment variables (include API keys, secrets, tokens, etc.) in an S3 bucket and to programmatically retrieve them and inject those values as environment variables into the Docker container at build time. However, this approach does not work for freeCodeCamp due to the reliance on the existence of the .env file in the project root. We modified the build and deploy process to include a copy of the .env file in S3 that is copied into the project root and available for the application when it is started.

### MongoDB Configuration

The freeCodeCamp application natively uses MongoDB to track user sessions and course progress. To support our deployment of freeCodeCamp, an instance of MongoDB's cloud [Atlas](https://www.mongodb.com/atlas) service was stood-up. Key things to note about this:

- This instance was configured via the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-pp445qepfdy34?ref_=aws-mp-console-subscription-detail) so that the Atlas instance billing would flow to the associated AWS account.
- An initial attempt was made to use an Atlas "pay as you go" serverless instance of MongoDB since costs would be very low. However, two issues arose that prevented this:
  - The MongoDB version that Atlas serverless uses was incompatible with freeCodeCamp's NodeJS mongodb driver package
  - AWS VPC peering cannot be used with a serverless instance
- As a result of these issues we settled on an M10 clustered instance of MongoDB.

In order to connect the [freeCodeCamp API](#learning-platform-api) to the MongoDB Atlas instance, VPC peering was established between the AWS VPC into which the freeCodeCamp API was deployed and the Atlas instance's VPC. The [VPC peering documentation](https://www.mongodb.com/docs/atlas/security-vpc-peering/) on their website is comprehensive and accurate. We followed this process to establish a secure connection from the API to the database.

### CI/CD Configuration

We initially attempted to deploy the freeCodeCamp application and API via our standard CircleCI system, however we were never able to get this to work properly. The application build failed repeatedly at various points and was never successful.

Our DevOps team stood-up a new Jenkins CI/CD system in an AWS EC2 instance (see the [Jenkinsfile](./Jenkinsfile) in the project root for details) and this was successful. However, the build and deployment of the application and API currently takes over 20 minutes. We have an outstanding request with the DevOps team to address this.

### Syncing with FCC/main

Here are a few notes regarding how to merge latest from FCC/main

- create a new branch `prod-merge` based off of origin/prod
- fetch latest from FCC
- merge fcc/main into `prod-merge`
- open all conflicts in an editor for a better overview of what has changed

- when there are new elements/features added on FCC, check freecodecamp.org/learn to see the change in action. Keep if it's something usefull. Remove if it's something we specifically got rid of or doesn't match our goals.
- check the bellow list of known changes from our side that need to be kept as they are:

  1. Remove "Donate Now" button from everywhere
  2. Added QA shortened course (in intro.json)
  3. Global font-family changed to Roboto. Font changes should be kept as "ours".
  4. Override Mobile Layout.
  5. Action Row Icon replacement
  6. Added actions to redux
  7. Added error message on form fields
  8. Changed Font size and color for Editor.css
     9.Removed Reset modal, Help modal
  9. Added lesson title old course side panel
  10. API changes for Auth (I'll write the readme for this item)

- after resolving the conflicts, check the UI is still intact
