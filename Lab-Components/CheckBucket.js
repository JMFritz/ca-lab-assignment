// Load AWS SDK and create a new S3 object
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const bucketName = process.env.BUCKET_NAME; // Reference Lambda environment variable

exports.handler = async event => {
  try {
    // Construct parameters for the listObjects() call
    const params = {
      Bucket: bucketName,
      MaxKeys: 1
    };
    
    let message;
    
    // Call listObjects() + respond with success string
    const response = await s3.listObjects(params).promise();
    
    // Check Contents count
    if (response.Contents.length < 1){
      message = 'Lab Check Failed... No object placed in S3 bucket';
    } else {
      message = 'Lab Check Successful!';
    }
    
    return message;
  } catch (err) {
      console.log(err);
  }
};