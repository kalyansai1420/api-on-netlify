// api.js
const headers = {
    'Access-Control-Allow-Origin': '*', // Replace * with the appropriate domain if needed
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

exports.handler = async (event, context) => {
    if (event.httpMethod === 'OPTIONS') {
        // Handle CORS preflight request
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: 'CORS preflight response' }),
        };
    }

    if (event.httpMethod === 'GET') {
        try {
            // Process the GET request as needed
            const data = require('./db.json');

            // Return the data as the response
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify(data),
            };
        } catch (error) {
            return {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ error: 'Internal Server Error' }),
            };
        }
    }

    // Handle other HTTP methods if needed
    return {
        statusCode: 405,
        headers: headers,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
};