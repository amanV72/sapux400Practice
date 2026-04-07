sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState",
    "sap/m/MessageToast"
],function(Controller,JSONModel,ValueState,MessageToast){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View9",{
        onInit:function(){
            var oModel=new JSONModel({
                name:"",
                email:""
            });
            this.getView().setModel(oModel);
        },

        onValidate: function(){
            var oNameInput= this.byId("nameInput1");
            var oEmailInput= this.byId("emailInput1");

            var sName= (oNameInput.getValue() || "").trim();
            var sEmail= (oEmailInput.getValue() || "").trim();

            var bValid =true;
            var bEmailValid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail);


            if(!sName){
                oNameInput.setValueState(ValueState.Error);
                oNameInput.setValueStateText("Name is required");
                bValid=false;

            }else {
                oNameInput.setValueState(ValueState.Success);
                oNameInput.setValueStateText("Valid name");
            } 

            if(!sEmail){
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("EMail is required");
                bValid=false;

            }else if(!bEmailValid){
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("Enter Valid email");
                bValid=false;
            } else{
                oEmailInput.setValueState(ValueState.Success);
                oEmailInput.setValueStateText("Valid email");
            }

            if(bValid){
                MessageToast.show("All fields are valid");
            }

        }
    });
});