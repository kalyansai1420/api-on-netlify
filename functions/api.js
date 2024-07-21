// api.js
const headers = {
    'Access-Control-Allow-Origin': '*', // Replace * with the appropriate domain
    'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        try {
            // Process the GET request as needed
            const data = require('../../../db.json');

            // Return the data as the response
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify(data),
            };
        } catch (error) {
            // Return an error response if there was an issue processing the request
            return {
                statusCode: 500,
                headers: headers,
                body: JSON.stringify({ error: 'Failed to process GET request' }),
            };
        }
    } else if (event.httpMethod === 'POST') {
        try {
            // Parse the incoming JSON payload from the request body
            const requestBody = JSON.parse(event.body);

            // Save the data to a database or perform other necessary operations
            // ...

            // Return a success response
            return {
                statusCode: 200,
                headers: headers,
                body: JSON.stringify({ message: 'POST request processed successfully' }),
            };
        } catch (error) {
            // Return an error response if there was an issue processing the request
            return {
                statusCode: 400,
                headers: headers,
                body: JSON.stringify({ error: 'Failed to process POST request' }),
            };
        }
    } else {
        // Return a method not allowed response for other HTTP methods
        return {
            statusCode: 405,
            headers: headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }
};

