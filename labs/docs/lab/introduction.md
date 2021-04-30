---
sidebar_position: 1
---

# Lab Overview

### Description

**<a href="https://cloudacademy.com/course/introduction-to-amazon-s3/introduction/?context_resource=lp&context_id=180" target="_blank">Amazon Simple Storage Service (S3)</a>** provides users with scalable object storage in the cloud and a simple way to retrieve your data from anywhere on the web. 

**<a href="https://cloudacademy.com/course/decoupling-architecture-within-aws/introduction-aws-lambda-1/" target="_blank">AWS Lambda</a>** allows you to author and run custom code without having to worry about provisioning and managing servers. By using Lambda functions in your applications, you're taking advantage of the resilient compute resources that AWS offers.

This Lab guides you through the function creation, configuration, and invocation process. At the end of each Lab step, be sure to run the Lab validation functions to check your work!

### Learning Objectives

- Create and configure an AWS Lambda function
- Configure the function to store a sample text file into an Amazon S3 bucket

### Prerequisites

- Basic understanding of AWS Lambda functions
- Basic understanding of Amazon Simple Storage Service (S3)
- Familiarity with the JavaScript programming language (Node.js)

### Lab Environment

The following resources are provisioned for you at the start of the lab:

- **Amazon S3 Bucket**: The Lambda function you create will upload a sample object to this S3 bucket.

- **AWS IAM Lambda Execution Role**: The Lambda function you create will assume this IAM Role. This role allows your function to upload an object to the S3 bucket.

The steps outlined in this Lab involve the use of the AWS Management Console to provision and configure cloud resources. 