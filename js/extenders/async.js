define([
    "knockout"
], function (ko) {
    //#region [ Fields ]

    var Handler = {};

    //#endregion


    //#region [ Method : Public ]

    /**
     * Turns any computed observable into a Promise-aware one.
     * 
     * @param {object} computedDeferred Computed deffered.
     * @param {object} initialValue The initial value that the observable will have when there is not yet a response from the server.
     */
    Handler.update = function(computedDeferred, initialValue) {
        var result = ko.observable(initialValue);
        var promise;
        var resolve;

        result.inProgress = ko.observable(false);

        ko.computed(function () {
            if (promise) {
                promise.reject();
                promise = null;
                resolve = null;
            }

            // Get the current value
            var value = computedDeferred();

            // Check if the current value is promise or not
            if (value && (typeof (value.then) == "function")) {
                // It's a deferred
                result.inProgress(true);

                // Create our own promise so we can reject
                promise = new Promise(function(res, rej) {
                    resolve = res;
                });

                // Handle promise change
                promise
                    .then(function (data) {
                        result.inProgress(false);
                        result(data);
                    })
                    .catch(function() {
                        result.inProgress(false);
                    });

                value.then(resolve);
            }
            else {
                // A real value, so just publish it immediately
                result(value);
            }
        });

        return result;
    };

    //#endregion

    ko.extenders["async"] = Handler.update;
});