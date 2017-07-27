require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprite');
require('./gulp/tasks/scripts');
require('./gulp/tasks/modernizr');
require('./gulp/tasks/build.js');


/*************VARIABLES***************
var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();
/*************************************/

/***************TASK*******************
gulp.task('default',function()
{
    console.log("gulp task");
});
/*************************************
gulp.task('html', function()
{
    console.log("HTML task");
});
/*************************************/