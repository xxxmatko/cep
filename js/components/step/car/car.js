define([
    "knockout",
    "text!./car.html"
], function (ko, view) {
    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
     * @param {object} info Component info.
	 */
    var Model = function (args, info) {
        console.log("Car()");
    
        this.title = args.title || ko.observable("");
        this.description = args.description || ko.observable("");
                
        this.type = args.type || ko.observable("");
        this.licensePlate = args.licensePlate || ko.observable("");
        this.consumption = args.consumption || ko.observable("");
        
        this.title("");
        this.description("steps.car.description");
    };

    //#endregion


    //#region [ Methods : Public ]
    
    /**
     * Dispose.
     */
    Model.prototype.dispose = function () {
        console.log("~Car()");
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