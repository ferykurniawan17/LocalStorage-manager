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
				dest: 'lStorage.js'
			}
		},
		uglify: {
			my_target: {
				files: {
					'lStorage.min.js': ['lStorage.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", ["concat", "uglify"]);
};