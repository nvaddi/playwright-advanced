import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Save API response to JSON file', async ({ request }) => {

    // 1. Make the API call (or capture a network response)
    const response = await request.get('https://typicode.com');

    // 2. Extract the JSON body from the Playwright response object
    const responseBody = await response.json();

    // 3. Define the directory and file path where you want to save it
    const outputDir = path.join(__json - response, 'output');
    const filePath = path.join(outputDir, 'response_data.json');

    // 4. Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 5. Convert the JavaScript object into a formatted JSON string and write to file
    // The 'null, 2' arguments format the JSON beautifully with 2-space indentation
    fs.writeFileSync(filePath, JSON.stringify(responseBody, null, 2), 'utf-8');

    console.log(`JSON data successfully saved to: ${filePath}`);

    // Optional assertion to keep the test valid
    expect(response.ok()).toBeTruthy();
});



// API GET request
test('GET API and save JSON response', async ({ request }) => {

    // Send GET request
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    // Validate response status
    expect(response.status()).toBe(200);

    // Get JSON response
    const responseBody = await response.json();

    // Print response in console
    console.log(responseBody);

    // Write response into JSON file
    fs.writeFileSync(
        'json-responses/users-response.json',
        JSON.stringify(responseBody, null, 2)
    );

    console.log('API response saved into json-responses/users-response.json');
});

test.only('POST API and save JSON response', async ({ request }) => {

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Playwright API Testing',
                body: 'Testing POST API',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    fs.writeFileSync(
        'json-requests/post-request-body.json',
        JSON.stringify(responseBody, null, 2)
    );

    console.log(responseBody);
});