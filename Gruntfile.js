module.exports = function (grunt) {
    'use strict';

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        // Karma実行用タスク
        karma: {
            unit: {
                options: {
                    configFile: 'karma.conf.js',
                    singleRun: true,
                    keepalive: true
                }
            }
        }
    });

    // package.json内のdevDependenciesで定義されているパッケージ中『grunt-』で始まるものをロードする
    for (var taskName in pkg.devDependencies) {
        if (taskName.substr(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(taskName);
        }
    }

    grunt.registerTask("default", "esteWatch");
    grunt.registerTask('test', ['espower', 'karma']);
};