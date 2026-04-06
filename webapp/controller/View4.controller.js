sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View4",{

        onInit: function(){

            var oModel= new JSONModel({
                password:"",
                inputType:"Password",
                buttonText:"Show Password"
            });
            this.getView().setModel(oModel);

        },
        onTogglePassword: function (){
            var oModel=  this.getView().getModel();
            var sCurrentType= oModel.getProperty("/inputType");

            if(sCurrentType === "Password"){
                oModel.setProperty("/inputType","Text");
                oModel.setProperty("/buttonText","Hide password");
            }else{
                oModel.setProperty("/inputType","Password");
                oModel.setProperty("/buttonText","Show password");
            }
        }

    });

});