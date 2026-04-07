sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],function(Controller,JSONModel,MessageToast){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View10",{
        onInit: function(){
            var oModel= new JSONModel({
                selectedKey:"2",
                dropdownItems:[
                    {key:1,text:"Option 1"},
                    {key:2,text:"Option 2"},
                    {key:3,text:"Option 3"},
                    {key:4,text:"Option 4"},
                    {key:5,text:"Option 5"},
                    {key:6,text:"Option 6"}
                    
                ]
            });
            this.getView().setModel(oModel);
        },
       onSelectionChange : function(oEvent){
        var sSelectedKey= oEvent.getSource().getSelectedKey();
        var sSelectedText= oEvent.getParameter("selectedItem").getText();


        MessageToast.show("Selected: "+sSelectedText+ " ("+ sSelectedKey+")");
       }
    });
});