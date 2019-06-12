define([
    "knockout",
    "text!./wizard.html"
], function (ko, view) {
    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
     * @param {object} info Component info.
	 */
    var Model = function (args, info) {
        console.log("Wizard()");

        this.step = args.step || ko.observable("");
        this.steps = args.steps || ko.observableArray([]);
    };

    //#endregion


    //#region [ Methods : Public ]
    
    /**
     * Dispose.
     */
    Model.prototype.dispose = function () {
        console.log("~Wizard()");
    };

    //#endregion


    //#region [ Event Handlers ]

    /**
     * Sets the current step.
     * 
     * @param {string} step Current step.
     */
    Model.prototype.setStep = function(step, e) {
        e.preventDefault();
        this.step(step);
    };

    //#endregion


    //#region [ Methods : Static ]

    /**
	 * Factory method.
	 *
	 * @param {object} params Parameters.
     * @param {object} componentInfo Component into.
     * @returns {object} Instance of the model.
	 */
    Model.createViewModel = function (params, componentInfo) {
        return new Model(params, componentInfo);
    };

    //#endregion

    return {
        viewModel: { createViewModel: Model.createViewModel },
        template: view
    };
});