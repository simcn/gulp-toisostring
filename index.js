/**
 * 生成文件头本地时间插件
 * 20150915 增加作者字段
 * @type {[type]}
 */
var through2 = require('through2');

Date.prototype.cdn = function() {
    var D = [
        this.getFullYear(),
        (this.getMonth() + 1),
        this.getDate(),
        this.getHours(),
        this.getMinutes(),
        this.getSeconds()
    ];
    return D.join('');
};

var CDN = new Date().cdn();

/**
 * 替换内容标记的时间戳
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
var replaceCDN = function(str){
    str = str.replace(/__md5__/g, CDN);
    str = str.replace(/__time__/g, CDN);
    return str;
};

module.exports = function(options) {
    return through2.obj(function(file, enc, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
        var str = file.contents.toString();
        var _ainfo = [];
        _ainfo.push(options);
        _ainfo.push(str);
        var newstr = _ainfo.join('');
        file.contents = new Buffer(newstr);
        callback(null, file);
    });
};