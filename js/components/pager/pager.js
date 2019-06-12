define([
    "knockout",
    "text!./pager.html"
], function (ko, view) {
    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
     * @param {object} info Component info.
	 */
    var Model = function (args, info) {
        console.log("Pager()");

        this.page = args.page || ko.observable("");
        this.pages = args.pages || ko.observableArray([]);
    };

    //#endregion


    //#region [ Methods : Public ]
    
    /**
     * Dispose.
     */
    Model.prototype.dispose = function () {
        console.log("~Pager()");
    };

    //#endregion


    //#region [ Event Handlers ]

    /**
     * Sets the current page.
     * 
     * @param {string} page Current page.
     */
    Model.prototype.setPage = function(page) {
        this.page(page);
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