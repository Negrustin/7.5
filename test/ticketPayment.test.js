// my tests
const { clickElement, putText, getText } = require("../lib/commands.js");
const MainPage = require('../pages/mainPage');
const mainPage = new MainPage();

const SeatSelectionPage = require('../pages/seatSelectionPage')
const seatSelectionPage = new SeatSelectionPage();

let page;

describe('Cinema ticket purchasing page', () => {
    beforeAll(async () => {
        page = await global.browser.newPage();
        await mainPage.open(page);
    });

    afterEach(async () => {
        await page.close();
    });
  
    test('should buy a ticket for a movie successfully', async () => {
        await mainPage.selectDayByIndex(page, 1);
        await mainPage.selectMovieTime(page);
        await seatSelectionPage.selectStandardSeat(page)
        await seatSelectionPage.clickToAcceptinButton(page);
    });
});
