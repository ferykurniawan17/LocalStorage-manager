module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ''
			},
			dist: {
				src: [
					'development/localStorage.js',
					'development/Storage.js',
					'development/common.js'
				],
				dest: 'storage.js'
			}
		},
		uglify: {
			my_target: {
				files: {
					'storage.min.js': ['storage.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", ["concat", "uglify"]);
};