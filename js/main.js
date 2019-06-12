define([
    "jquery",
    "knockout",
    "knockout.validation",
    "materialize",
    "my/i18n",
    "my/bindings/i18n",
    "my/extenders/async"
], function ($, ko, koValidation, M, i18n) {
    //#region [ Fields ]
    
    var global = (function() { return this; })();
    var doc = global.document;
    
    //#endregion


    //#region [ Component registration ]

    ko.components.register("my-app", { require: "my/components/app/app" });
    ko.components.register("my-pager", { require: "my/components/pager/pager" });
    
    //#endregion


    //#region [ Methods ]

    /**
     * Fires function when DOM is ready.
     * 
     * @param {function} fn Function.
     */
    var ready = function (fn) {
        if (doc.attachEvent ? (doc.readyState === "complete") : (doc.readyState !== "loading")) {
            fn();
        } 
        else {
            doc.addEventListener("DOMContentLoaded", fn);
        }
    };

    //#endregion


    //#region [ Start ]
    
    ready(function () {
        ko.applyBindings({
            lang: i18n.language
        }, doc.body);
    });

    //#endregion
});