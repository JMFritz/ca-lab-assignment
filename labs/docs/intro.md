---
sidebar_position: 1
---

# Cloud Lab Developer Assignment

#### This project and lab components can be found in this GitHub repository:
  - <a href="https://github.com/JMFritz/ca-lab-assignment" target="_blank">ca-lab-assignment</a>

## Part 1

### Lab Components

**Lab Steps**: To begin the lab, scroll to the bottom of this page and select **Next**. This will bring you to the overview page where you can access the rest of the lab.

The following lab components can be found in the `/Lab-Components` folder located in the project GitHub repository.

**Lab Template (Infrastucture as Code)**: The CloudFormation template used for this lab is located in `/Lab-Components/lab-template.yaml` and consists of the following resources:

- `LabStudentRole` : IAM Role that is assumed by the student when they log into the lab environment. The IAM policy has been scoped with least-privileged access in mind to only allow actions related to the lab steps (create a function, list buckets, view logs, etc)
- `Bucket` : An S3 bucket is provisioned at the start of the lab so the student can focus on writing and testing the function code, instead of setting up the destination resource.
- `PutObjectExecRole` : The preconfigured IAM role assumed by the PutObjectFunction that gets created in the first lab step. The single action `s3:putObject` is allowed on the lab S3 bucket only.
- `CheckFunction` & `CheckFunctionExecRole` : Lambda function and the accompanying execution role to verify a user has successfully created a function named 'PutObjectFunction' in the first lab step.
- `CheckBucket` & `CheckBucketExecRole` : Lambda function and the accompanying execution role to verify a user has successfully stored a sample file into the lab S3 bucket in the second lab step.
- `Bucket` Output Value: Since the S3 bucket used in the lab is predefined, one assumption I made was that Output values will be available for the student to reference within the lab steps. In this case, the bucket name to be configured as a Lambda function environment variable. Similar to how the lab user name and password are available to the side of the instructions.

**Lab Policies & Role**: The lab uses an IAM Role that is assumed by the `student` IAM User. The role is called `LabStudentRole` and is the first resource defined in the `lab-template.yaml` file.

**Assessment Function Code**: 
- `/Lab-Components/CheckFunction.js`: Lambda function to verify a user has successfully created a function named 'PutObjectFunction' in the first lab step.
- `/Lab-Components/CheckBucket.js`: Lambda function to verify a user has successfully stored a sample file into the lab S3 bucket in the second lab step.

**Assignment Assumptions**:
- The `lab-template.yaml` CloudFormation stack is deployed into an "Admin" account using admin permissions.
- Lab step assessment functions are run in the "Admin" account as an admin user.
- Student assumes a `LabStudentRole` with scoped IAM permissions. This role is defined in the "Admin" account described above.
- Student is familiar with Node.js runtime and JavaScript
- Student user is already logged into lab environment
- `Outputs` section of the lab template will be used to dynamically provide configuration values (S3 bucket name) accessible in the lab steps.


## Part 2

### Questions

**1. Are there any lab steps/instructions you would recommend adding that you didn’t have time to implement?**

One of my favorite aspects of Serverless computing is being able to automate serverless application development. Utilizing the AWS Serverless Application Model toolkit was on my wish-list as I was planning out this assignment. In the next steps, students would put together a SAM template that consisted of a `AWS::Serverless::Function` and S3 bucket, work with their source code locally, and deploy the application using the SAM CLI. Being able to develop and deploy resources quickly are valuable skills in the serverless space.
   
**2. Would you change anything about the style guide?**

I felt the style guide was sufficient enough for this assignment, especially since it's a compressed version of the actual style guide. If I were to add to it, I would include examples of the second person singular and active voice preferences, but a quick search was enough for this case. This section of the style guide was very useful in establishing a consistent tone.

It's beyond the scope of the assignment, but another significant style guide addition would be guidance on inclusive language. Providing alternative words to use in place of outdated terms like "master" or "slave" for databases, or "black-listing" for access control lists. 
   
**3. How did you consider the target audience?**

I considered my own journey through cloud computing to remember what interested me the most. It's one thing to understand the fundamentals of AWS Lambda or S3, but when I was starting off, I was focused on the use cases and the variety of solutions these services could provide. I decided to automate the creation of the S3 bucket and IAM roles in order to get the student to focus on the main objective, writing and invoking a Lambda function. Setting up resources is a valuable skill to learn, but I believe the opportunity for innovation with services like Lambda is what makes serverless computing special.

For the team reviewing my lab, it was important for me to make the lab experience as interactive as possible. Since Cloud Academy is a global team, I wanted to match this theme by using CloudFront's edge locations that are located around the world!

### Assignment Resources

The following resources were used to complete this assignment:

- **<a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS.html" target="_blank">AWS JavaScript SDK Reference</a>**
- **<a href="https://docusaurus.io/" target="_blank">Docusaurus V2</a>**
- **AWS Services**:
  - AWS CloudFormation
  - AWS Lambda
  - Amazon Simple Storage Service
  - AWS IAM
  - Amazon CloudFront
  - AWS CodeBuild