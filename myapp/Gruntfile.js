module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'build/myapp-min.js': ['build/myapp-concat.js']
                }
            }
        },

        concat: {
            dist: {
                src: ['public/javascripts/**/*.js'],
                dest: 'build/myapp-concat.js'
            }
        },

        jshint: {
            beforeconcat: ['public/javascripts/**/*.js'],
            afterconcat: ['build/myapp-concat.js']
        },

        nodemon: {
            dev: {
                script: 'bin/www'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('dev', ['jshint:beforeconcat', 'concat', 'jshint:afterconcat', 'uglify']);

};