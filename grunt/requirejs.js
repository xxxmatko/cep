module.exports = function (grunt) {
    //#region [ Configuration ]

    grunt.config("requirejs", {
        release: {
            options: {
                appDir: "./wwwroot",
                skipDirOptimize: true,
                writeBuildTxt: false,
                baseUrl: "./js",
                dir: "./wwwroot",
                keepBuildDir: true,
                allowSourceOverwrites: true,
                removeCombined: true,
                preserveLicenseComments: false,
                optimize: "uglify",
                inlineText: true,
                optimizeCss: "none",
                skipModuleInsertion: false,
                paths: {
                    "requirejs": "./libs/require",
                    "jquery": "./libs/jquery",
                    "knockout": "./libs/knockout",
                    "knockout.validation": "./libs/knockout.validation",
                    "materialize": "./libs/materialize",
                    "text": "./libs/text",
                    "i18next": "./libs/i18next",
                    "mustache": "./libs/mustache"
                },
                packages: [{
                    name: "my",
                    location: "./"
                }, {
                    name: "resources",
                    location: "./resources"
                }],
                stubModules: ["text"],
                modules: [{
                    name: "app",
                    create: true,
                    stubModules: ["text"],
                    exclude: [
                    ],
                    include: [
                        "requirejs",
                        "my/main",
                        "my/components/app/app",
                        "my/components/wizard/wizard",
                        "my/components/step/basic-info/basic-info",
                        "my/components/step/car/car",
                        "my/components/step/arrivals/arrivals",
                        "my/components/step/summary/summary",
                        "config"
                    ]
                }]
            }
        }
    });

    //#endregion


    //#region [ Tasks ]

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    //#endregion
};