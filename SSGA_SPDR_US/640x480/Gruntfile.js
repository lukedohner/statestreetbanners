module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.initConfig({
        clean: { 'files': ['./dist'] },
        connect: {
            'src': {
                'options': {
                    'port': 8000,
                    'base': './src',
                    'keepalive': true,
                    'hostname': '*'
                }
            },
            'dist': {
                'options': {
                    'port': 8001,
                    'base': './dist',
                    'keepalive': true,
                    'hostname': '*'
                }
            }
        },
        copy: {
            'assets': {
                'expand': true,
                'cwd': './src',
                'src': '*.{jpg,png,gif}',
                'dest': './dist',
                'flatten': true,
                'filter': 'isFile'
            }
        },
        htmlmin: {
            'dist': {
                'options': {
                    'removeComments': true,
                    'collapseWhitespace': true
                },
                'files': { './dist/index.html': './dist/index.html' }
            }
        },
        sass: {
            'options': {
                'sourcemap': 'none',
                'noCache': true,
                'loadPath': './node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets'
            },
            'files': {
                'expand': true,
                'cwd': './sass',
                'src': ['*.scss'],
                'dest': './src/css',
                'ext': '.css'
            }
        },
        jshint: {
            'all': ['./src/js/*.js'],
            'options': {
                'camelcase': false,
                'curly': false,
                'eqeqeq': true,
                'immed': true,
                'newcap': true,
                'noarg': true,
                'sub': true,
                'undef': true,
                'eqnull': true,
                'browser': true,
                'maxlen': 150,
                'unused': true,
                'globals': {
                    'module': false,
                    'console': true
                }
            }
        },
        watch: {
            'sass': {
                'files': ['./sass/**/*.{scss,sass}'],
                'tasks': 'sass'
            },
            'jshint': {
                'files': ['./src/js/**/*.js'],
                'tasks': 'jshint'
            }
        },
        inline: {
            'options': {
                'cssmin': true,
                'uglify': {
                    'compress': { 'drop_console': true },
                    'mangle': true
                }
            },
            'dist': {
                'src': './src/index.html',
                'dest': './dist/index.html'
            }
        }
    });
    grunt.registerTask('build', [
        'clean',
        'sass',
        'inline',
        'htmlmin',
        'copy'
    ]);
    grunt.registerTask('default', ['watch']);
};