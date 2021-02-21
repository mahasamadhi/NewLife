const EventEmitter = require('events');

class TicketManager extends EventEmitter {
    constructor(supply) {
        super();
        this.getsupply = supply;
    }

    buy(email, price) {
        if (this.getsupply > 0) {
            this.getsupply--;
            this.emit('buy', email, price, Date.now());
            return;
        }
        this.emit('error', new Error('There are no more tickets left to purchase'));
    }
}

module.exports = TicketManager
