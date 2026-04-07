sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
],function(Controller,JSONModel,ValueState){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View5",{

        onInit: function(){
            var oModel= new JSONModel({
                email:""
            });
            this.getView().setModel(oModel);
        },

        onLiveChange:function(oEvent){
            var sValue= (oEvent.getParameter("value") || "").trim();
            var oInput= this.byId("emailInput");
            var bValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sValue);

            if(!sValue){
                oInput.setValueState(ValueState.None);
                oInput.setValueStateText("");
            }else if(bValid){
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid email");
            }else{
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Enter email like abc@xyz.com");
            }
        }
    });
});