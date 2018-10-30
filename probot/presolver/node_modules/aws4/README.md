aws4
----

[![Build Status](https://secure.travis-ci.org/mhart/aws4.png?branch=master)](http://travis-ci.org/mhart/aws4)

A small utility to sign vanilla node.js http(s) request options using Amazon's
[AWS Signature Version 4](http://docs.amazonwebservices.com/general/latest/gr/signature-version-4.html).

Can also be used [in the browser](./browser).

This signature is supported by nearly all Amazon services, including
[S3](http://docs.aws.amazon.com/AmazonS3/latest/API/),
[EC2](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/),
[DynamoDB](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/API.html),
[Kinesis](http://docs.aws.amazon.com/kinesis/latest/APIReference/),
[Lambda](http://docs.aws.amazon.com/lambda/latest/dg/API_Reference.html),
[SQS](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/),
[SNS](http://docs.aws.amazon.com/sns/latest/api/),
[IAM](http://docs.aws.amazon.com/IAM/latest/APIReference/),
[STS](http://docs.aws.amazon.com/STS/latest/APIReference/),
[RDS](http://docs.aws.amazon.com/AmazonRDS/latest/APIReference/),
[CloudWatch](http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/),
[CloudWatch Logs](http://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/),
[CodeDeploy](http://docs.aws.amazon.com/codedeploy/latest/APIReference/),
[CloudFront](http://docs.aws.amazon.com/AmazonCloudFront/latest/APIReference/),
[CloudTrail](http://docs.aws.amazon.com/awscloudtrail/latest/APIReference/),
[ElastiCache](http://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/),
[EMR](http://docs.aws.amazon.com/ElasticMapReduce/latest/API/),
[Glacier](http://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-api.html),
[CloudSearch](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/APIReq.html),
[Elastic Load Balancing](http://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/),
[Elastic Transcoder](http://docs.aws.amazon.com/elastictranscoder/latest/developerguide/api-reference.html),
[CloudFormation](http://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/),
[Elastic Beanstalk](http://docs.aws.amazon.com/elasticbeanstalk/latest/api/),
[Storage Gateway](http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html),
[Data Pipeline](http://docs.aws.amazon.com/datapipeline/latest/APIReference/),
[Direct Connect](http://docs.aws.amazon.com/directconnect/latest/APIReference/),
[Redshift](http://docs.aws.amazon.com/redshift/latest/APIReference/),
[OpsWorks](http://docs.aws.amazon.com/opsworks/latest/APIReference/),
[SES](http://docs.aws.amazon.com/ses/latest/APIReference/),
[SWF](http://docs.aws.amazon.com/amazonswf/latest/apireference/),
[AutoScaling](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/),
[Mobile Analytics](http://docs.aws.amazon.com/mobileanalytics/latest/ug/server-reference.html),
[Cognito Identity](http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/),
[Cognito Sync](http://docs.aws.amazon.com/cognitosync/latest/APIReference/),
[Container Service](http://docs.aws.amazon.com/AmazonECS/latest/APIReference/),
[AppStream](http://docs.aws.amazon.com/appstream/latest/developerguide/appstream-api-rest.html),
[Key Management Service](http://docs.aws.amazon.com/kms/latest/APIReference/),
[Config](http://docs.aws.amazon.com/config/latest/APIReference/),
[CloudHSM](http://docs.aws.amazon.com/cloudhsm/latest/dg/api-ref.html),
[Route53](http://docs.aws.amazon.com/Route53/latest/APIReference/requests-rest.html) and
[Route53 Domains](http://docs.aws.amazon.com/Route53/latest/APIReference/requests-rpc.html).

Indeed, the only AWS services that *don't* support v4 as of 2014-12-30 are
[Import/Export](http://docs.aws.amazon.com/AWSImportExport/latest/DG/api-reference.html) and
[SimpleDB](http://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API.html)
(they only support [AWS Signature Version 2](https://github.com/mhart/aws2)).

It also provides defaults for a number of core AWS headers and
request parameters, making it very easy to query AWS services, or
build out a fully-featured AWS library.

Example
-------

```javascript
var http  = require('http'),
    https = require('https'),
    aws4  = require('aws4')

// given an options object you could pass to http.request
var opts = {host: 'sqs.us-east-1.amazonaws.com', path: '/?Action=ListQueues'}

// alternatively (as aws4 can infer the host):
opts = {service: 'sqs', region: 'us-east-1', path: '/?Action=ListQueues'}

// alternatively (as us-east-1 is default):
opts = {service: 'sqs', path: '/?Action=ListQueues'}

aws4.sign(opts) // assumes AWS credentials are available in process.env

console.log(opts)
/*
{
  host: 'sqs.us-east-1.amazonaws.com',
  path: '/?Action=ListQueues',
  headers: {
    Host: 'sqs.us-east-1.amazonaws.com',
    'X-Amz-Date': '20121226T061030Z',
    Authorization: 'AWS4-HMAC-SHA256 Credential=ABCDEF/20121226/us-east-1/sqs/aws4_request, ...'
  }
}
*/

// we can now use this to query AWS using the standard node.js http API
http.request(opts, function(res) { res.pipe(process.stdout) }).end()
/*
<?xml version="1.0"?>
<ListQueuesResponse xmlns="http://queue.amazonaws.com/doc/2012-11-05/">
...
*/
```

More options
------------

```javascript
// you can also pass AWS credentials in explicitly (otherwise taken from process.env)
aws4.sign(opts, {accessKeyId: '', secretAccessKey: ''})

// can also add the signature to query strings
aws4.sign({service: 's3', path: '/my-bucket?X-Amz-Expires=12345', signQuery: true})

// create a utility function to pipe to stdout (with https this time)
function request(o) { https.request(o, function(res) { res.pipe(process.stdout) }).end(o.body || '') }

// aws4 can infer the HTTP method if a body is passed in
// method will be POST and Content-Type: 'application/x-www-form-urlencoded; charset=utf-8'
request(aws4.sign({service: 'iam', body: 'Action=ListGroups&Version=2010-05-08'}))
/*
<ListGroupsResponse xmlns="https://iam.amazonaws.com/doc/2010-05-08/">
...
*/

// can specify any custom option or header as per usual
request(aws4.sign({
  service: 'dynamodb',
  region: 'ap-southeast-2',
  method: 'POST',
  path: '/',
  headers: {
    'Content-Type': 'application/x-amz-json-1.0',
    'X-Amz-Target': 'DynamoDB_20120810.ListTables'
  },
  body: '{}'
}))
/*
{"TableNames":[]}
...
*/

// works with all other services that support Signature Version 4

request(aws4.sign({service: 's3', path: '/', signQuery: true}))
/*
<ListAllMyBucketsResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
...
*/

request(aws4.sign({service: 'ec2', path: '/?Action=DescribeRegions&Version=2014-06-15'}))
/*
<DescribeRegionsResponse xmlns="http://ec2.amazonaws.com/doc/2014-06-15/">
...
*/

request(aws4.sign({service: 'sns', path: '/?Action=ListTopics&Version=2010-03-31'}))
/*
<ListTopicsResponse xmlns="http://sns.amazonaws.com/doc/2010-03-31/">
...
*/

request(aws4.sign({service: 'sts', path: '/?Action=GetSessionToken&Version=2011-06-15'}))
/*
<GetSessionTokenResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
...
*/

request(aws4.sign({service: 'cloudsearch', path: '/?Action=ListDomainNames&Version=2013-01-01'}))
/*
<ListDomainNamesResponse xmlns="http://cloudsearch.amazonaws.com/doc/2013-01-01/">
...
*/

request(aws4.sign({service: 'ses', path: '/?Action=ListIdentities&Version=2010-12-01'}))
/*
<ListIdentitiesResponse xmlns="http://ses.amazonaws.com/doc/2010-12-01/">
...
*/

request(aws4.sign({service: 'autoscaling', path: '/?Action=DescribeAutoScalingInstances&Version=2011-01-01'}))
/*
<DescribeAutoScalingInstancesResponse xmlns="http://autoscaling.amazonaws.com/doc/2011-01-01/">
...
*/

request(aws4.sign({service: 'elasticloadbalancing', path: '/?Action=DescribeLoadBalancers&Version=2012-06-01'}))
/*
<DescribeLoadBalancersResponse xmlns="http://elasticloadbalancing.amazonaws.com/doc/2012-06-01/">
...
*/

request(aws4.sign({service: 'cloudformation', path: '/?Action=ListStacks&Version=2010-05-15'}))
/*
<ListStacksResponse xmlns="http://cloudformation.amazonaws.com/doc/2010-05-15/">
...
*/

request(aws4.sign({service: 'elasticbeanstalk', path: '/?Action=ListAvailableSolutionStacks&Version=2010-12-01'}))
/*
<ListAvailableSolutionStacksResponse xmlns="http://elasticbeanstalk.amazonaws.com/docs/2010-12-01/">
...
*/

request(aws4.sign({service: 'rds', path: '/?Action=DescribeDBInstances&Version=2012-09-17'}))
/*
<DescribeDBInstancesResponse xmlns="http://rds.amazonaws.com/doc/2012-09-17/">
...
*/

request(aws4.sign({service: 'monitoring', path: '/?Action=ListMetrics&Version=2010-08-01'}))
/*
<ListMetricsResponse xmlns="http://monitoring.amazonaws.com/doc/2010-08-01/">
...
*/

request(aws4.sign({service: 'redshift', path: '/?Action=DescribeClusters&Version=2012-12-01'}))
/*
<DescribeClustersResponse xmlns="http://redshift.amazonaws.com/doc/2012-12-01/">
...
*/

request(aws4.sign({service: 'cloudfront', path: '/2014-05-31/distribution'}))
/*
<DistributionList xmlns="http://cloudfront.amazonaws.com/doc/2014-05-31/">
...
*/

request(aws4.sign({service: 'elasticache', path: '/?Action=DescribeCacheClusters&Version=2014-07-15'}))
/*
<DescribeCacheClustersResponse xmlns="http://elasticache.amazonaws.com/doc/2014-07-15/">
...
*/

request(aws4.sign({service: 'elasticmapreduce', path: '/?Action=DescribeJobFlows&Version=2009-03-31'}))
/*
<DescribeJobFlowsResponse xmlns="http://elasticmapreduce.amazonaws.com/doc/2009-03-31">
...
*/

request(aws4.sign({service: 'route53', path: '/2013-04-01/hostedzone'}))
/*
<ListHostedZonesResponse xmlns="https://route53.amazonaws.com/doc/2013-04-01/">
...
*/

request(aws4.sign({service: 'appstream', path: '/applications'}))
/*
{"_links":{"curie":[{"href":"http://docs.aws.amazon.com/appstream/latest/...
...
*/

request(aws4.sign({service: 'cognito-sync', path: '/identitypools'}))
/*
{"Count":0,"IdentityPoolUsages":[],"MaxResults":16,"NextToken":null}
...
*/

request(aws4.sign({service: 'elastictranscoder', path: '/2012-09-25/pipelines'}))
/*
{"NextPageToken":null,"Pipelines":[]}
...
*/

request(aws4.sign({service: 'lambda', path: '/2014-11-13/functions/'}))
/*
{"Functions":[],"NextMarker":null}
...
*/

request(aws4.sign({service: 'ecs', path: '/?Action=ListClusters&Version=2014-11-13'}))
/*
<ListClustersResponse xmlns="http://ecs.amazonaws.com/doc/2014-11-13/">
...
*/

request(aws4.sign({service: 'glacier', path: '/-/vaults', headers: {'X-Amz-Glacier-Version': '2012-06-01'}}))
/*
{"Marker":null,"VaultList":[]}
...
*/

request(aws4.sign({service: 'storagegateway', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'StorageGateway_20120630.ListGateways'
}}))
/*
{"Gateways":[]}
...
*/

request(aws4.sign({service: 'datapipeline', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'DataPipeline.ListPipelines'
}}))
/*
{"hasMoreResults":false,"pipelineIdList":[]}
...
*/

request(aws4.sign({service: 'opsworks', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'OpsWorks_20130218.DescribeStacks'
}}))
/*
{"Stacks":[]}
...
*/

request(aws4.sign({service: 'route53domains', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'Route53Domains_v20140515.ListDomains'
}}))
/*
{"Domains":[]}
...
*/

request(aws4.sign({service: 'kinesis', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'Kinesis_20131202.ListStreams'
}}))
/*
{"HasMoreStreams":false,"StreamNames":[]}
...
*/

request(aws4.sign({service: 'cloudtrail', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'CloudTrail_20131101.DescribeTrails'
}}))
/*
{"trailList":[]}
...
*/

request(aws4.sign({service: 'logs', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'Logs_20140328.DescribeLogGroups'
}}))
/*
{"logGroups":[]}
...
*/

request(aws4.sign({service: 'codedeploy', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'CodeDeploy_20141006.ListApplications'
}}))
/*
{"applications":[]}
...
*/

request(aws4.sign({service: 'directconnect', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'OvertureService.DescribeConnections'
}}))
/*
{"connections":[]}
...
*/

request(aws4.sign({service: 'kms', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'TrentService.ListKeys'
}}))
/*
{"Keys":[],"Truncated":false}
...
*/

request(aws4.sign({service: 'config', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'StarlingDoveService.DescribeDeliveryChannels'
}}))
/*
{"DeliveryChannels":[]}
...
*/

request(aws4.sign({service: 'cloudhsm', body: '{}', headers: {
  'Content-Type': 'application/x-amz-json-1.1',
  'X-Amz-Target': 'CloudHsmFrontendService.ListAvailableZones'
}}))
/*
{"AZList":["us-east-1a","us-east-1b","us-east-1c"]}
...
*/

request(aws4.sign({
  service: 'swf',
  body: '{"registrationStatus":"REGISTERED"}',
  headers: {
    'Content-Type': 'application/x-amz-json-1.0',
    'X-Amz-Target': 'SimpleWorkflowService.ListDomains'
  }
}))
/*
{"domainInfos":[]}
...
*/

request(aws4.sign({
  service: 'cognito-identity',
  body: '{"MaxResults": 1}',
  headers: {
    'Content-Type': 'application/x-amz-json-1.1',
    'X-Amz-Target': 'AWSCognitoIdentityService.ListIdentityPools'
  }
}))
/*
{"IdentityPools":[]}
...
*/

request(aws4.sign({
  service: 'mobileanalytics',
  path: '/2014-06-05/events',
  body: JSON.stringify({events:[{
    eventType: 'a',
    timestamp: new Date().toISOString(),
    session: {},
  }]}),
  headers: {
    'Content-Type': 'application/json',
    'X-Amz-Client-Context': JSON.stringify({
      client: {client_id: 'a', app_title: 'a'},
      custom: {},
      env: {platform: 'a'},
      services: {},
    }),
  }
}))
/*
(HTTP 202, empty response)
*/

// Generate CodeCommit Git access password
var signer = new aws4.RequestSigner({
  service: 'codecommit',
  host: 'git-codecommit.us-east-1.amazonaws.com',
  method: 'GIT',
  path: '/v1/repos/MyAwesomeRepo',
})
var password = signer.getDateTime() + 'Z' + signer.signature()
```

API
---

### aws4.sign(requestOptions, [credentials])

This calculates and populates the `Authorization` header of
`requestOptions`, and any other necessary AWS headers and/or request
options. Returns `requestOptions` as a convenience for chaining.

`requestOptions` is an object holding the same options that the node.js
[http.request](http://nodejs.org/docs/latest/api/http.html#http_http_request_options_callback)
function takes.

The following properties of `requestOptions` are used in the signing or
populated if they don't already exist:

- `hostname` or `host` (will be determined from `service` and `region` if not given)
- `method` (will use `'GET'` if not given or `'POST'` if there is a `body`)
- `path` (will use `'/'` if not given)
- `body` (will use `''` if not given)
- `service` (will be calculated from `hostname` or `host` if not given)
- `region` (will be calculated from `hostname` or `host` or use `'us-east-1'` if not given)
- `headers['Host']` (will use `hostname` or `host` or be calculated if not given)
- `headers['Content-Type']` (will use `'application/x-www-form-urlencoded; charset=utf-8'`
  if not given and there is a `body`)
- `headers['Date']` (used to calculate the signature date if given, otherwise `new Date` is used)

Your AWS credentials (which can be found in your
[AWS console](https://portal.aws.amazon.com/gp/aws/securityCredentials))
can be specified in one of two ways:

- As the second argument, like this:

```javascript
aws4.sign(requestOptions, {
  secretAccessKey: "<your-secret-access-key>",
  accessKeyId: "<your-access-key-id>",
  sessionToken: "<your-session-token>"
})
```

- From `process.env`, such as this:

```
export AWS_SECRET_ACCESS_KEY="<your-secret-access-key>"
export AWS_ACCESS_KEY_ID="<your-access-key-id>"
export AWS_SESSION_TOKEN="<your-session-token>"
```

(will also use `AWS_ACCESS_KEY` and `AWS_SECRET_KEY` if available)

The `sessionToken` property and `AWS_SESSION_TOKEN` environment variable are optional for signing
with [IAM STS temporary credentials](http://docs.aws.amazon.com/STS/latest/UsingSTS/using-temp-creds.html).

Installation
------------

With [npm](http://npmjs.org/) do:

```
npm install aws4
```

Can also be used [in the browser](./browser).

Thanks
------

Thanks to [@jed](https://github.com/jed) for his
[dynamo-client](https://github.com/jed/dynamo-client) lib where I first
committed and subsequently extracted this code.

Also thanks to the
[official node.js AWS SDK](https://github.com/aws/aws-sdk-js) for giving
me a start on implementing the v4 signature.

