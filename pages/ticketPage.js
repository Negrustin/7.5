const {clickElement, getText,putText, checkIfDisabled} = require('../lib/commands');

class TicketPage {

    constructor() {
        this.selectors = {
            ticketsHint: '.ticket__hint',

        };
    }

    async getSuccessText(page) {
        return await getText(page, `${this.selectors.ticketsHint}`);
      }
}

module.exports = new TicketPage();