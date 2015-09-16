# gulp-toisostring
gulp 文件头增加本地时间戳插件, 主要用于查看CSS与js文件是否更新。


# 使用方法
```
npm install gulp-toisostring
```

```
var toisostring = require('gulp-toisostring');
//编译less
gulp.task('less', function() {
	return gulp.src(lesspath)
		.pipe(less())
		.pipe(toisostring('author'))
		.pipe(gulp.dest('test'));
});
```