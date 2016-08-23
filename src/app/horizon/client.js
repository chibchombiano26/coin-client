"use strict";
var Horizon = require('@horizon/client');
var HorizonService = (function () {
    function HorizonService() {
        this.horizon = Horizon({ host: 'localhost:8081' });
        this.horizon.onReady(function (result) {
            console.log(result);
        });
        this.horizon.connect();
    }
    return HorizonService;
}());
exports.HorizonService = HorizonService;
//# sourceMappingURL=client.js.map