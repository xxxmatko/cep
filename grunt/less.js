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
                "wwwroot/css/components/pager.css": "js/components/pager/pager.less"
            }
        }     
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-less");

    //#endregion
};