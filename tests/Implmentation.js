"use strict";

const { goto, write, textBox, click, button, into } = require("taiko");
const obAction = require("./obAction");

step("Login", async function () {
    await goto(process.env.App_Url);

});

step("read json data <page>", async (page) => {
    await obAction.executeQuery(page);
})

step("read json data iteration <page> <iteration>", async (page, iteration) => {
    await obAction.executeQueryIteration(page, iteration);
})

step("read <value>", async (value) => {
    var value = await obAction.getData(value);
    console.log(value + " is: " + value);

})

step("Enter Username", async () => {
    await click(textBox({id: 'user-name'}));
    await write(await obAction.getData("username", into(textBox({id: 'user-name'}))));
    await click(textBox({id: 'password'}));
    await write(await obAction.getData("password", into(textBox({id: 'password'}))));
    await click(button({id: 'login-button'}));
})


