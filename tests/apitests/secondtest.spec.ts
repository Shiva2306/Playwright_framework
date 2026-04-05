import { test, expect } from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';

test("Create Post request using json file body", async ({ request }) => {

    const jsonFile = path.resolve('testdata/post_request_body.json');
    const requestBody = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

   // path.resolve() takes the file path you give (testdata/post_request_body.json) and converts it into a full absolute path on your system.
//jsonFile now holds the exact location of your JSON file.
    const response = await request.post("/booking", { data: requestBody });

    console.log(await response.text());

    const responseBody = await response.json();

    expect(response.ok()).toBeTruthy();
    expect([200, 201]).toContain(response.status());

    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody.booking).toHaveProperty("additionalneeds");

});

//fs → Lets you read or write files on your computer.
//path → Helps you find the correct file location on any system.
//Together → You use path to locate the JSON file and fs to read its content for the API request.