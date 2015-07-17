module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'app/scripts/**/*.js'
            ],
            options: {
                globals: {
                    angular: false,
                    $: false
                },
                browser: true,
                devel: true
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'app',
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', ['connect:server']);
    grunt.registerTask('default', ['server']);
};