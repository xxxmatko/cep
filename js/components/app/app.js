define([
    "knockout",
    "text!./app.html"
], function (ko, view) {
    //#region [ Fields ]

    var global = (function() { return this; })();

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
    };

    //#endregion


    //#region [ Getters, Setters ]

    /**
     * Fetch random background image.
     */
    Model.prototype._getBackground = function() {
        return fetch("https://picsum.photos/1280/1024.jpg")
            .then(function(r){
                return r.url;
            });
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
        
        return (global.app = new Model(params));
    };

    //#endregion

    return {
        viewModel: { createViewModel: Model.createViewModel },
        template: view
    };
});