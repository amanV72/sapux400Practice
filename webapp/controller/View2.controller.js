sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],(Controller, MessageToast)=>{
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View2",{

        onInputChange: function (oEvent){
            var sValue=  oEvent.getParameter("value");
            var bEnable= sValue.trim().length >0;

            this.byId("submitBtn").setEnabled(bEnable);
        },

        onSubmit: function(){
            MessageToast.show("Button clicked!");
        }

    });

});