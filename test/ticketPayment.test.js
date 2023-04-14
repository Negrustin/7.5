// my tests
const { clickElement, putText, getText } = require("../lib/commands.js");
const MainPage = require('../pages/mainPage');
const mainPage = new MainPage();

const SeatSelectionPage = require('../pages/seatSelectionPage')
const seatSelectionPage = new SeatSelectionPage();


const paymentPage = require('../pages/paymentPage');
const ticketPage = require('../pages/ticketPage');

let page;

describe('Cinema ticket purchasing page', () => {
    beforeEach(async () => {
        page = await global.browser.newPage();
        await mainPage.open(page);
    });

    afterEach(async () => {
        await page.close();
    });
  
    test('should buy a standard ticket  for a movie successfully', async () => {
        await mainPage.selectDayByIndex(page, 1);
        await mainPage.selectMovieTime(page);
        await seatSelectionPage.selectStandardSeat(page)
        await seatSelectionPage.clickToAcceptinButton(page);
        await paymentPage.getBookingCode(page);

        const actual = await ticketPage.getSuccessText(page);
        const expected = 'Покажите QR-код нашему контроллеру для подтверждения бронирования.'

        expect(actual).toContain(expected);


    });

    test('should buy a VIP ticket  for a movie successfully', async () => {
        await mainPage.selectDayByIndex(page, 1);
        await mainPage.selectMovieTime(page);
        await seatSelectionPage.selectVipSeat(page)
        await seatSelectionPage.clickToAcceptinButton(page);
        await paymentPage.getBookingCode(page);

        const actual = await ticketPage.getSuccessText(page);
        const expected = 'Покажите QR-код нашему контроллеру для подтверждения бронирования.'

        expect(actual).toContain(expected);


    });

    
});
