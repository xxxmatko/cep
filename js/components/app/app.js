define([
    "knockout",
    "text!./app.html"
], function (ko, view) {
    //#region [ Fields ]

    var global = (function() { return this; })();
    //https://www.jqueryscript.net/demo/Material-Design-Wizard-Form-Plugin-jQuery-Bootstrap/

    //#endregion
    
    
    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
	 */
    var Model = function (args) {
        console.log("App()");

        this.lang = args.lang;
        this.background = ko
            .pureComputed(this._getBackground, this)
            .extend({ 
                async: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            });
            
        this.title = ko.observable("");
        this.description = ko.observable("");
        this.step = ko.observable("");
        this.steps = ko.observableArray(["basicInfo", "arrivals", "summary"]);
        
        this.hasPrev = ko.computed(this._hasPrev, this);
        this.hasNext = ko.computed(this._hasNext, this);
    };

    //#endregion


    //#region [ Getters, Setters ]

    /**
     * Fetch random background image.
     */
    Model.prototype._getBackground = function() {
        return fetch("https://picsum.photos/1280/768.jpg")
            .then(function(r){
                return r.url;
            });
    };


    /**
     * Gets value indicating whether there is a previous step or not.
     */
    Model.prototype._hasPrev = function() {
        var step = this.step();
        var steps = this.steps();

        return steps.indexOf(step) > 0;
    };


    /**
     * Gets value indicating whether there is a next step or not.
     */
    Model.prototype._hasNext = function() {
        var step = this.step();
        var steps = this.steps();

        return steps.indexOf(step) < steps.length - 1;
    };

    //#endregion


    //#region [ Methods : Public ]
    
    /**
     * Dispose.
     */
    Model.prototype.dispose = function () {
        console.log("~App()");

        this.background.dispose();
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
        params.element = componentInfo.element; 
        
        setTimeout(function() {
            global.app.step("basicInfo");
        }, 0);

        return (global.app = new Model(params));
    };

    //#endregion

    return {
        viewModel: { createViewModel: Model.createViewModel },
        template: view
    };
});