sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("sampleflight.controller.View2", {
        onInit: function () {
            let oRouter=this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched,this);
            let editModel=new JSONModel({
                isEditable:false
            });
            this.getView().setModel(editModel,"EditInpModel")
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
        },
        onEdit: function(oEvent){
          let Edit=this.getView().getModel("EditInpModel");
          Edit.setProperty("/isEditable",true)
        },
        onSave: function(oEvent){
            
        }
    });
});
