sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
],function(Controller,JSONModel,ValueState){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View7",{
        onInit:function(){
            var oModel=new JSONModel({
                name:""
            });
            this.getView().setModel(oModel);
        },

        onLiveChange: function(oEvent){
            var sValue= (oEvent.getParameter("value") || "").trim();
            var oInput= this.byId("nameInput");

            if(!sValue){
                
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("This field is required");
            }else{
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid input");
            }

        }
    });
});