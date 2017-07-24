/*************VARIABLES****************/
var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

/*****************TASK****************/
gulp.task('watch',function()
{
    browserSync.init(
        {
            notify:false,
            server: 
            {
                baseDir: "app"
            }
        }
    );
    

    watch('./app/index.html',function()
    {
        /*gulp.start('html');*/
        browserSync.reload();
    } );


    watch('./app/assets/styles/**/*.css',function()
    {
        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js',function()
    {
        gulp.start('ScriptsRefresh');
    });

});
/*************************************/
gulp.task('cssInject', ['styles'] ,function()
        {
            return gulp.src('./app/temp.styles/style.css')
            .pipe(browserSync.stream());
        }
);
/*************************************/
gulp.task('ScriptsRefresh',['scripts'],function()
{
    browserSync.reload();
});