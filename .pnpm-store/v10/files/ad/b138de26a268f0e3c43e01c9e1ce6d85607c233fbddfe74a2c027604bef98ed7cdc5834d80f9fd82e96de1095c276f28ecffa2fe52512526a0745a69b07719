import { customEndpointFunctions } from "@smithy/util-endpoints";
import { isVirtualHostableS3Bucket } from "./lib/aws/isVirtualHostableS3Bucket";
import { parseArn } from "./lib/aws/parseArn";
import { partition } from "./lib/aws/partition";
const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: isVirtualHostableS3Bucket,
    parseArn: parseArn,
    partition: partition,
};
customEndpointFunctions.aws = awsEndpointFunctions;
