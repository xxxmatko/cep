module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("less", {
        options: {
            paths: ["less"],
            strictMath: false
        },
        src: {
            files: {
                "wwwroot/css/site.css": "less/site.less",
                "wwwroot/css/components/app.css": "js/components/app/app.less",
                "wwwroot/css/components/wizard.css": "js/components/wizard/wizard.less",
                "wwwroot/css/components/step.css": "js/components/step/step.less"
            }
        }     
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-less");

    //#endregion
};