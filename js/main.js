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
    ko.components.register("my-wizard", { require: "my/components/wizard/wizard" });
    ko.components.register("my-basic-info", { require: "my/components/step/basic-info/basic-info" });
    ko.components.register("my-arrivals", { require: "my/components/step/arrivals/arrivals" });
            
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