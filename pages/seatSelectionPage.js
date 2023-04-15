// code
const { clickElement, getText, putText, checkIfDisabled} = require('../lib/commands');
class SeatSelectionPage {
    constructor() {
      this.selectors = {
        standardSeat: '.buying-scheme__row .buying-scheme__chair_standart:not(.buying-scheme__chair_taken)',
        vipSeat: '.buying-scheme__row .buying-scheme__chair_vip:not(.buying-scheme__chair_taken)',
        acceptinButton: '.acceptin-button',
        unavailableSeat: '.buying-scheme__row .buying-scheme__chair_taken'
      
      };
    }

 
     

      async selectStandardSeat(page) {
        await clickElement(page, `${this.selectors.standardSeat}`)
      }

      async selectVipSeat(page) {
        await clickElement(page, `${this.selectors.vipSeat}`);
      }

      async unavailableSeat(page) {
        await clickElement(page, `${this.selectors.unavailableSeat}`);
      }


      
      async clickToAcceptinButton(page) {
        await clickElement(page, `${this.selectors.acceptinButton}`);
      }

      async isAcceptinButtonDisabled(page) {
       return await checkIfDisabled(page, `${this.selectors.acceptinButton}`)
      }
      
}

module.exports = new SeatSelectionPage();