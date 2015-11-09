'use strict';

module.exports = function (grunt) {
	var matchdep = require('matchdep');
	var path = require('path');
	var target = grunt.option('target') || 'development';

	/**
	 * Load Grunt Dependencies
	 */
	matchdep.filterAll("grunt-*").forEach(grunt.loadNpmTasks);

	/**
	 * Base Grunt Config
	 */
	grunt.config.merge({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
					precision: 9,
					loadPath: [
						'./sass/',
						'./node_modules/'
					]
				},
				files: {
					'dist/css/bundle.css': 'sass/bundle.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				options: {
					browsers: ['last 2 versions'],
					map: true
				},
				files: {
					'dist/css/bundle.css': 'dist/css/bundle.css'
				}
			}
		},

		svgstore: {
			options: {
				prefix : 'icon-',
				cleanup: true,
				svg: {
					style: 'display: none;'
				},
				convertNameToId: function(name) {
					return name.replace(/\s+/g, '-').toLowerCase();
				}
			},
			default: {
				files: {
					'./dist/defs.svg': ['svgs/**/*.svg']
				}
			}
		}
	});

	/**
	 * Register Main Tasks
	 */
	grunt.registerTask('dist', ['css', 'svgstore']);
	grunt.registerTask('css', ['sass', 'autoprefixer']);
	grunt.registerTask('default', ['dist']);
};
