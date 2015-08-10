/**
 * 生成文件头本地时间插件
 * @type {[type]}
 */
var through2 = require('through2');

module.exports = function (options) {
  return through2.obj(function (file, enc, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }
    var str = file.contents.toString();
    var _ainfo = [];
    _ainfo.push('/* ');
    _ainfo.push(new Date().toISOString());
    _ainfo.push(' */');
    _ainfo.push(str);
    var newstr = _ainfo.join('');
    file.contents = new Buffer(newstr);
  	callback(null, file);
  });
};
