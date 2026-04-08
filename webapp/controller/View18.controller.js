sap.ui.define([
    "sap/ui/core/mvc/Controller"
],function(Controller){
    "use strict";

    return Controller.extend("demo.practice.practice.controller.View18",{
        
        onOpenFragment: function(){
            var oView= this.getView();
            if(!this._oDialog){
                this._oDialog= sap.ui.xmlfragment(
                    "demo.practice.practice.view.Dialog",
                    this
                );
                oView.addDependent(this._oDialog);
            }
            this._oDialog.open();
        },
        onCloseFragment: function(){
            this._oDialog.close();
        }
    });
});