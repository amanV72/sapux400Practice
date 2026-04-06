sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/ValueState",
    "sap/ui/model/json/JSONModel"
],(Controller, ValueState, JSONModel)=>{
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View3",{

        onInit: function(){
            var oModel= new JSONModel({
                inputText:"",
                length:0
            });
            this.getView().setModel(oModel);
            this._maxLength=10;

        },
        onLiveChange: function (oEvent){
            var sValue=  oEvent.getParameter("value");
            var oInput= this.byId("inputField1");

            this.getView().getModel().setProperty("/length",sValue.length);

            if(sValue.length > this._maxLength){
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Max "+ this._maxLength + "characters allowed");
            }else{
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("Valid input");
            }
        }

    });

});