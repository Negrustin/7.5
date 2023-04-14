const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const MainPage = require('../../pages/mainPage');
const mainPage = new MainPage();
const SeatSelectionPage = require('../../pages/seatSelectionPage');
const seatSelectionPage = new SeatSelectionPage();
const paymentPage = require('../../pages/paymentPage');
const ticketPage = require('../../pages/ticketPage');
const puppeteer = require('puppeteer');

let page;

Given('I am on the main page', async () => {
  const browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await mainPage.open(page);
});

When('I select a day and a movie time', async () => {
  await mainPage.selectDayByIndex(page, 1);
  await mainPage.selectMovieTime(page);
});

When('I select a standard seat', async () => {
  await seatSelectionPage.selectStandardSeat(page);
});

When('I select a VIP seat', async () => {
  await seatSelectionPage.selectVipSeat(page);
});

When('I confirm the seat', async () => {
  await seatSelectionPage.clickToAcceptinButton(page);
});

When('I get the booking code', async () => {
  await paymentPage.getBookingCode(page);
});



Then('I should see the booking confirmation message', async () => {
  const actual = await ticketPage.getSuccessText(page);
  const expected = 'Покажите QR-код нашему контроллеру для подтверждения бронирования.';
  expect(actual).to.contain(expected);
  await page.close();
});