sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sampleflight.controller.View2", {
        onInit: function () {
            let oRouter=this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched,this);
        },
        _onRouteMatched: function (oEvent) {
            let agynum=oEvent.getParameter("arguments").agynum;
            this.getView().byId("agencynum").setValue(agynum);
            let sPath="/TravelagencyCollection('"+agynum+"')";
            let oModel=this.getOwnerComponent().getModel();
            oModel.read(sPath,{
                success:function(oData,Response){
                let Jmodel=new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(Jmodel);
                }.bind(this)
            });
        },
        onBackPress: function () {
            let oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView1");
        } 
    });
});
