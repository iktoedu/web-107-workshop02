var assetFunctions = require('node-sass-asset-functions');

module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: false,
                functions: assetFunctions({
                    images_path: 'images',
                    fonts_path: 'fonts',
                    http_images_path: '../images',
                    http_fonts_path: '../fonts'
                }),
                includePaths: [
                    'node_modules/normalize-scss/sass'
                ]
            },
            css: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 100 versions']
                    })
                ]
            },
            ap: {
                src: 'css/*.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('css', ['sass:css', 'postcss:ap']);
};
