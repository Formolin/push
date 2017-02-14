var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('dist',function(){
	// console.log('hello gulp');
	gulp.watch('src/style/*.less',['style']);
})

gulp.task('style',function(){
	gulp.src('src/style/*.less')
	.pipe(less())
	.pipe(gulp.dest('dist/css'));
})