module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'public/build/myapp-min.js': ['public/build/myapp-concat.js']
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/build/myapp-concat-styles.min.css': ['public/build/myapp-concat-styles.css']
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'public/javascripts/bootstrap.js',
                    'public/javascripts/constants.js',
                    'public/javascripts/game-board.js',
                    'public/javascripts/score.js',
                    'public/javascripts/ship.js',
                    'public/javascripts/enemy.js',
                    'public/javascripts/game-loop.js',
                    'public/javascripts/game.js'],
                dest: 'public/build/myapp-concat.js'
            }
        },

        concat_css: {
            all: {
                src: ['public/stylesheets/**/*.css'],
                dest: 'public/build/myapp-concat-styles.css'
            }
        },

        jshint: {
            beforeconcat: ['public/javascripts/**/*.js'],
            afterconcat: ['public/build/myapp-concat.js']
        },

        nodemon: {
            dev: {
                script: 'bin/www',
                options: {
                    env: {
                        PORT: '4500'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('dev', ['jshint:beforeconcat', 'concat', 'jshint:afterconcat', 'uglify', 'concat_css', 'cssmin']);

};