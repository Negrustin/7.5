const {
    clickElement,
    getText,
    putText
} = require('../lib/commands');

class PaymentPage {

    constructor() {
        this.selectors = {
            acceptinButton: '[onclick="location.href=\'scripts/sale_save.php\'"]',

        };
    }

    async getBookingCode(page) {
        await clickElement(page, `${this.selectors.acceptinButton}`);
    }
}

module.exports = new PaymentPage();
