const { Given, When, Then, After} = require('@cucumber/cucumber');
const { expect } = require('chai');
const mainPage = require('../../pages/mainPage');
const seatSelectionPage = require('../../pages/seatSelectionPage');
const paymentPage = require('../../pages/paymentPage');
const ticketPage = require('../../pages/ticketPage');
const puppeteer = require('puppeteer');

let page;



Given('I am on the main page', async function () {
  this.browser = await puppeteer.launch({ headless: false });
  this.page = await this.browser.newPage();
  await mainPage.open(this.page);
});


When('I select a day and a movie time', async function () {
  await mainPage.selectDayByIndex(this.page, 2);
  await mainPage.selectMovieTime(this.page);
});

When('I select a standard seat', async function () {
  await seatSelectionPage.selectStandardSeat(this.page);
});

When('I select a VIP seat', async function () {
  await seatSelectionPage.selectVipSeat(this.page);
});

When('I confirm the seat', async function () {
  await seatSelectionPage.clickToAcceptinButton(this.page);
});

When('I get the booking code', async function () {
  await paymentPage.getBookingCode(this.page);
});

Then('I should see the booking confirmation message', async function () {
  const actual = await ticketPage.getSuccessText(this.page);
  const expected = 'Покажите QR-код нашему контроллеру для подтверждения бронирования.';
  expect(actual).to.contain(expected);
  await this.page.close();
});

After(async function () {
  await this.browser.close({ force: true });
});
