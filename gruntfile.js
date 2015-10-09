﻿module.exports = function (grunt) {

    var config = {
        host: 'localhost',
        port: '13051'
    }

    //dependencies
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var gruntSettings = {

        /* COMPILADOR LESS */
        less: {
            /*
             * 2 compilações para que o formee ainda tenha um css separado
             */
            lessfilesForms: {
                files: {
                    "dev/less/css/forms.css": "dev/less/components/forms.less",
                    "dev/less/css/tooltip.css": "dev/less/components/tooltip.less"
                },
            },
            lessfilesMain: {
                files: {
                    "dev/less/css/main.css": "dev/less/main.less",
                    "dev/less/css/boxmsg.css": "dev/less/components/boxmsg.less"
                },
            }
        },
        /* AUTO-PREFIXER CSS */
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },

            // para o css normal do site (main e formee)
            lessfilesForms: {
                src: 'dev/less/css/forms.css',
            },
            lessfilesMain: {
                src: 'dev/less/css/main.css',
            },
            lessFilesTooltip: {
                src: 'dev/less/css/tooltip.css',
            },
            lessFilesBox: {
                src: 'dev/less/css/boxmsg.css',
            },
            // para os plugins
            cssvendor: {
                src: ['dev/vendor/**/*.css'],
            }
        },

        /* CSSMIN MINIFICA, COMBINA CSS */
        cssmin: {
            // minifica o main e o formee
            lessfilesForms: {
                files: {
                    'css/forms.min.css': ['dev/less/css/forms.css'],
                    'css/tooltip.min.css': ['dev/less/css/tooltip.css']
                },
            },
            lessfilesMain: {
                files: {
                    'css/main.min.css': ['dev/less/css/main.css'],
                    'css/boxmsg.min.css': ['dev/less/css/boxmsg.css']
                },
            },

            // minifica os css´s dos plugins
            cssvendor: {
                files: [{
                    expand: true,
                    cwd: 'dev/vendor/',
                    src: ['**/*.css', '!**/*.min.css'],
                    dest: 'vendor/',
                    ext: '.min.css',
                    extDot: 'last'
                }]
            },
        },

        /* UGLIFY MINIFICA */
        uglify: {
            options: {
                sourceMap: false,    // gera sitemaps
            },
            // arquivos da pasta js (geralmente criados pelo dev)
            jsfiles: {
                files: [{
                    expand: true,
                    cwd: 'dev/js/',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'js/',
                    ext: '.min.js',
                    extDot: 'last'
                }]
            },
            // arquivos de plugins, minifica eles
            jsvendor: {
                files: [{
                    expand: true,
                    cwd: 'dev/vendor/',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'vendor/',
                    ext: '.min.js',
                    extDot: 'last'
                }]
            },
        },

        /* COPY, COPIA PLUGINS */
        copy: {
            /*
             * SÓ COPIA ARQUIVOS NECESSÁRIOS
             * 
             * da pasta: /vendor/...
             * para a pasta: /modulos/...
             * 
             * .min.js
             * .js.map
             * .min.css
             * .jpg
             * .png
             * .gif
             * 
            */
            copyvendor: {
                files: [{
                    expand: true,
                    cwd: 'dev/vendor/',
                    src: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.cur', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff'],
                    dest: 'vendor/'
                }]
            }
        },

        /* AUTO UPDATE */
        browserSync: {
            /*
             * acompanha alterações nos arquivos:
              .css
              .min.js
              .aspx
              .master
              .html
              .ashx
    
             */
            geral: {
                bsFiles: {
                    src: [
                        '**/*.html',
                        '**/*.css',
                        '**/*.min.js',
                        '**/*.aspx',
                        '**/*.master'
                    ]
                },
                options: {
                    watchTask: true,
                    startPath: "/default.aspx",
                    proxy: config.host + ':' + config.port,
                    notify: false,
                    open: false
                }
            }
        },

        /* WATCH, VERIFICA ALTERAÇÕES NOS ARQUIVOS */
        watch: {
            /*
             * tarefa padrão de desenvolvimento
             */
            options: {
                spawn: false,
            },
            lessfilesForms: {
                files: ['dev/less/**/*.less', '!dev/less/main.less'],
                tasks: ['less:lessfilesForms', 'autoprefixer:lessfilesForms', 'autoprefixer:lessFilesTooltip', 'cssmin:lessfilesForms']
            },
            lessfilesMain: {
                files: ['dev/less/**/*.less', '!dev/less/components/forms.less', '!dev/less/components/tooltip.less'],
                tasks: ['less:lessfilesMain', 'autoprefixer:lessfilesMain', 'autoprefixer:lessFilesBox', 'cssmin:lessfilesMain']
            },
            jsfiles: {
                files: ['dev/js/**/*.js'],
                tasks: ['uglify:jsfiles']
            },
            cssvendor: {
                files: ['dev/vendor/**/*.css'],
                tasks: ['autoprefixer:cssvendor', 'cssmin:cssvendor']
            },
            jsvendor: {
                files: ['dev/vendor/**/*.js'],
                tasks: ['uglify:jsvendor']
            },
            gruntfile: {
                files: ['gruntfile.js']
            }

        }

    };

    grunt.initConfig(gruntSettings);

    /* TAREFA PADRÃO DE PUBLICAÇÃO */
    grunt.registerTask('default', ['browserSync', 'watch']);
    //grunt.registerTask('default', ['watch', 'browserSync']);

    /* TAREFA PADRÃO DE DESENVOLVIMENTO */
    grunt.registerTask('init', ['less', 'autoprefixer', 'uglify', 'cssmin', 'copy']);
};