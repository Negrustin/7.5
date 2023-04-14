const {
    clickElement,
    getText,
    putText
} = require('../lib/commands');

class MainPage {
    constructor() {
        this.selectors = {
            days: '.page-nav__day',
            activeSeanceTime: '.movie-seances__time:not(.acceptin-button-disabled)',
            disableSeanceTime: '.movie-seances__time.acceptin-button-disabled',

        };
    }

    async open(page) {
        await page.goto('http://qamid.tmweb.ru/client/index.php');
    }

    async selectDayByIndex(page, index) {
        const days = await page.$$(this.selectors.days);
        if (index < 0 || index >= days.length) {
            throw new Error('Index out of range');
        }
        await days[index].click();
    }

    async selectMovieTime(page) {
        await clickElement(page, `${this.selectors.activeSeanceTime}`);
    }
}

module.exports = MainPage;