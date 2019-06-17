define([
    "knockout",
    "text!./basic-info.html"
], function (ko, view) {
    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
     * @param {object} info Component info.
	 */
    var Model = function (args, info) {
        console.log("BasicInfo()");
    
        this.title = args.title || ko.observable("");
        this.description = args.description || ko.observable("");

        this.name = args.name || ko.observable("");
        this.personalId = args.personalId || ko.observable("");
        this.section = args.section || ko.observable("");
        this.phone = args.phone || ko.observable("");
        this.address = args.address || ko.observable("");
        this.car = args.car || ko.observable("");
        this.money = args.money || ko.observable("");
        this.account = args.account || ko.observable("");
                
        this.title("");
        this.description("steps.basic-info.description");
    };

    //#endregion


    //#region [ Methods : Public ]
    
    /**
     * Dispose.
     */
    Model.prototype.dispose = function () {
        console.log("~BasicInfo()");
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