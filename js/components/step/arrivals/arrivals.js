define([
    "knockout",
    "text!./arrivals.html",
    "utils/guid"
], function (ko, view, guid) {
    //#region [ Constructor ]

    /**
	 * Constructor.
	 *
	 * @param {object} args Arguments.
     * @param {object} info Component info.
	 */
    var Model = function (args, info) {
        console.log("Arrivals()");
    
        this.title = args.title || ko.observable("");
        this.description = args.description || ko.observable("");

        this.items = args.items || ko.observableArray([]);
        this.day = ko.observable("");
        
        this.title("");
        this.description("");
    };

    //#endregion


    //#region [ Methods : Public ]
    
    /**
     * Adds new arrival for the input day.
     * 
     * @param {number} day Day in the current month.
     */
    Model.prototype.add = function(day) {
        var d =  ko.unwrap(day);
        
        // Check if the input day is valid
        if(isNaN(d)) {
            this.day("");
            return;
        }

        // Create new empty arrival
        var arrival = {
            id: guid(),
            day: ko.observable(d),
            start1: ko.observable(""),
            end1: ko.observable(""),
            purpose: ko.observable(""),
            len: ko.observable("")
        };

        // Put the arrival in the list and sort it
        this.items.push(arrival);
        this.items.sort(function(l, r) {
            return (l.day() === r.day()) ? 0 : 
                   (l.day() < r.day()) ? -1 : 
                   1;
        });

        this.day("");
    };


    /**
     * Dispose.
     */
    Model.prototype.dispose = function () {
        console.log("~Arrivals()");
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