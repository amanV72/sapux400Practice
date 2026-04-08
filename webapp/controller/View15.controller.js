sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],function(Controller, JSONModel){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View15",{
        onInit: function(){
            var oModel= new JSONModel({
                isExpanded: true
            });
            this.getView().setModel(oModel);
        },

        onToggle: function(oEvent){
            var bExpanded= oEvent.getParameter("expand");
            this.getView().getModel().setProperty("/isExpanded",bExpanded);
        }
    });
});