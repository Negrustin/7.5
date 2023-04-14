// code
const { clickElement, getText, putText } = require('../lib/commands');
class seatSelectionPage {
    constructor() {
      this.selectors = {
        standardSeat: '.buying-scheme__row .buying-scheme__chair_standart:not(.buying-scheme__chair_taken)',
        vipSeat: '.buying-scheme__row .buying-scheme__chair_vip:not(.buying-scheme__chair_taken)',
        acceptinButton: '.acceptin-button',
      
      };
    }

 
     

      async selectStandardSeat(page) {
        await clickElement(page, `${this.selectors.standardSeat}`)
      }

      async selectVipSeat(page) {
        await clickElement(page, `${this.selectors.vipSeat}`);
      }
      
      async clickToAcceptinButton(page) {
        await clickElement(page, `${this.selectors.acceptinButton}`);
      }
      
}

module.exports = seatSelectionPage;