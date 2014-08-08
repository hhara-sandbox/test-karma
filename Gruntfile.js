module.exports = function (grunt) {
    'use strict';

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        // power-assert用にコードを変換するタスク
        espower: {
            test: {
                files: [
                    {
                        expand: true, 
                        cwd: 'test/',             // 変換対象のファイルを配置しているディレクトリ
                        src: ['*.js'],            // 変換対象のファイル名
                        dest: 'test/espowered/',  // 変換後のコードを配置するディレクトリ
                        ext: '.js'                // 変換後のファイルの拡張子
                    }
                ]
            }
        },
        // ファイルの変更検知用タスク
        esteWatch: {
            options: {
                dirs: ['js', 'test'],
                livereload: false
            },
            js: function (filepath) {
                return ['test'];
            }
        },
        // Karma実行用タスク
        karma: {
            unit: {
                options: {
                    configFile: 'karma.conf.js',
                    autoWatch: true,
                    browsers: ["Chrome"],
                    reporters: ["progress"],
                    singleRun: true,
                    keepalive: true
                }
            }
        }
    });

    // package.json内のdevDependenciesで定義されているパッケージ中『grunt-』で始まるものをロードする
    for (var taskName in pkg.devDependencies) {
        if (taskName.substr(0, 6) == 'grunt-') {
            console.log('load npm task -> ' + taskName);
            grunt.loadNpmTasks(taskName);
        }
    }

    grunt.registerTask("default", "esteWatch");
    grunt.registerTask('test', ['espower', 'karma']);
};