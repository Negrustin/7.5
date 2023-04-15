// my tests
const {
    clickElement,
    putText,
    getText,
    checkIfDisabled
} = require("../lib/commands.js");
const mainPage = require('../pages/mainPage');
const seatSelectionPage = require('../pages/seatSelectionPage')
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
        await mainPage.selectDayByIndex(page, 3);
        await mainPage.selectMovieTime(page);
        await seatSelectionPage.selectStandardSeat(page)
        await seatSelectionPage.clickToAcceptinButton(page);
        await paymentPage.getBookingCode(page);

        const actual = await ticketPage.getSuccessText(page);
        const expected = 'Покажите QR-код нашему контроллеру для подтверждения бронирования.'

        expect(actual).toContain(expected);


    });

    test('should buy a VIP ticket  for a movie successfully', async () => {
        await mainPage.selectDayByIndex(page, 3);
        await mainPage.selectMovieTime(page);
        await seatSelectionPage.selectVipSeat(page)
        await seatSelectionPage.clickToAcceptinButton(page);
        await paymentPage.getBookingCode(page);

        const actual = await ticketPage.getSuccessText(page);
        const expected = 'Покажите QR-код нашему контроллеру для подтверждения бронирования.'

        expect(actual).toContain(expected);


    });

    test('Check if acceptin-button is disabled', async () => {
        await mainPage.selectDayByIndex(page, 2);
        await mainPage.selectMovieTime(page);
        const isDisabled = await seatSelectionPage.isAcceptinButtonDisabled(page);
        expect(isDisabled).toBe(true);

    });



});