// Load AWS SDK and create a new lambda object
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const functionName = process.env.FUNCTION_NAME;

exports.handler = async event => {
try {
    // Construct parameters for getFunction()
    const params = {
    FunctionName: functionName
    };
    
    // Call getFunction() + respond with success string
    await lambda.getFunction(params).promise();
    return 'Lab Check Successful!';
    
} catch (err) {
    // Failed result for resource not found
    if (err.code == 'ResourceNotFoundException') {
        return 'Lab Check Failed... ' + functionName + ' does not exist.';
    } else {
        console.log(err);
    }
}
};