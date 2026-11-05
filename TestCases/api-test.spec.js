import { test, request, expect } from '@playwright/test';

let reqContext2;
test.beforeAll("Before All the Test ", async () => {

    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com"
    });
})

test('Handing API requests ', async ({ request }) => {
    const response1 = await request.get('https://restful-booker.herokuapp.com/booking');
    console.log(await response1.json());
});

test.only('Handing API requests 2 ', async () => {
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com/"
    })
    const response1 = await reqContext.get("/booking");
    //console.log(await response1.json());

    const value = response1.status();
    console.log(`Value: ${value}`)
    expect(response1.status()).toBe(200);

});