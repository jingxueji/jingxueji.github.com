/**
 * Created by leolau on 2016/11/4.
 */
//引入模块
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
//编写任务
gulp.task('yasuo:hebing',function(){
    gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build'));
});
gulp.task('default',['yasuo:hebing']);


