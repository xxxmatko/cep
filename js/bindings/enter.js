define([
    "knockout"
], function (ko) {
    //#region [ Fields ]

    var Handler = {};

    //#endregion


    //#region [ Method : Public ]

    /**
     * This will be called when the binding is first applied to an element.
     * 
     * @param {object} element The DOM element involved in this binding.
     * @param {function} valueAccessor A JavaScript function that you can call to get the current model property that is involved in this binding.
     * @param {object} allBindings A JavaScript object that you can use to access all the model values bound to this DOM element.
     * @param {object} viewModel This parameter is deprecated in Knockout 3.x. Use bindingContext.$data or bindingContext.$rawData to access the view model instead.
     * @param {object} albindingContext An object that holds the binding context available to this element’s bindings.
     */
    Handler.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var callback = valueAccessor();

        element.addEventListener("keydown", function(e) {
            var keyCode = (e.which ? e.which : e.keyCode);
            if (keyCode === 13) {
                callback.call(viewModel);
                return false;
            }
            return true;
        });
    };

    //#endregion

    ko.bindingHandlers["enter"] = Handler;
});