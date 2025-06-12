sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sampleflight.controller.View1", {
        onInit: function () {

        },
        pressItem: function(oEvent) {
            let oRouter=this.getOwnerComponent().getRouter();
           oRouter.navTo("RouteView2");

        }
    });
});
