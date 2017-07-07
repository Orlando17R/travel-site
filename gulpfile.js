/*************VARIABLES****************/
var gulp = require('gulp'),
watch = require('gulp-watch');
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');
/*************************************/
/*************************************/



/***************TASK*******************/
gulp.task('default',function()
{
    console.log("gulp task");
});
/*************************************/
gulp.task('html', function()
{
    console.log("HTML task");
});
/*************************************/
gulp.task('styles', function()
{
    /*console.log("CSS task");*/
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssvars,nested,autoprefixer]) )
    .pipe(gulp.dest('./app/temp.styles'));
});
/*************************************/
gulp.task('watch',function()
{
    watch('./app/index.html',function()
    {
        gulp.start('html');
    } );

    watch('./app/assets/styles/**/*.css',function()
    {
        gulp.start('styles');
    });

});
/*************************************/