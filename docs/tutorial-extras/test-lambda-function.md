---
sidebar_position: 3
---

# Understanding and Testing the S3 Lambda function

## Introduction

Introduction to S3 API call (putObject) + function walkthrough.

======PutObjectFunction code description======

```js
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
```

You will test the function to verify it works correctly in this Lab Step.
## Instructions

1. Click **Test** above the code editor.

1. In the **Configure test event** form, enter the following values into the form:

- **Event name**: *PutObject*
- **Event body**: Delete the existing key-pair values and leave an empty set of curly braces `{}`. 

====SCREENSHOT OF TEST EVENT=====

The Lambda function in this lab is not responding to an event. You are invoking this function by running a test event using an empty JSON object.

As mentioned previously, the PutObjectFunction will store the local `sample.txt` file into the S3 bucket. ==== CLEAN THIS PART UP. SHOULD THIS BE IN THE INTRODUCTION SECTION? ====

1. Click **Create**.

1. Click **Test** above the code editor to run the **PutObject** test you just created.

Within a few seconds you will see the Execution results tab load in the editor:

====SCREENSHOT OF EXECUTION=====

You can see the "Object stored successfully" response near the top of execution results. 

To confirm the object was stored successfully:

1. In the AWS Management Console search bar, enter *S3*, and click the **S3** result under **Services**:

<!-- ![s3-service](img/s3-service.png) -->
====SCREENSHOT OF S3 SEARCH=====

You are placed in the Amazon S3 console.

1. Under the list of S3 buckets, click the **s3bucket-97171** bucket.

Confirm the `sample.txt` file has been successfully uploaded to the S3 bucket.

## Summary

In this lab step, you stepped through the `PutObjectFunction` source code to review the AWS SDK call used to upload the sample text file to the S3 bucket. You configured a test event to serve as the function invocation trigger and successfully uploaded the `sample.txt` file to the lab's S3 bucket.

## Validation Checks

**Lambda Function Stored Object in S3 Bucket**
Check if the AWS Lambda function has successfully stored the text file into the S3 Bucket