// Load AWS SDK and create a new S3 object
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const bucketName = process.env.BUCKET_NAME; // Reference Lambda environment variable

exports.handler = async message => {
  try {
    const r = Math.random().toString(36).substring(7);
    const text = 'Sample Text';
    const objectKey = 'Object-' + r;
  
    // Construct parameters for the putObject call
    const params = {
      Bucket: bucketName,
      Body: text,
      Key: objectKey,
    };
    
    // Call putObject() + respond with success string
    await s3.putObject(params).promise();
    return objectKey + ' stored in ' + bucketName;
    
  } catch (err) {
      console.log(err);
  }
};
	