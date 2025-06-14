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
            let sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
            let oModel=this.getView().getModel();
            oModel.getProperty(sPath);
            let agynum = oModel.getProperty(sPath).agencynum;
            oRouter.navTo("RouteView2", {agynum:agynum});
        }
    });
});
