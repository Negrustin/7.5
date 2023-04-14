const {
    clickElement,
    getText,
    putText
} = require('../lib/commands');

class PaymentPage {

    constructor() {
        this.selectors = {
            acceptinButton: '.acceptin-button',

        };
    }

    async getBookingCode(page) {
        await clickElement(page, `${this.selectors.acceptinButton}`);
    }
}

module.exports = new PaymentPage();

