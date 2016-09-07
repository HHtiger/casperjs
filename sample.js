var casper = require("casper").create({
    verbose: true,//记录日志到控制台
    logLevel: 'debug',//日志等级
    pageSettings: {
        loadImages: false, // The WebPage instance used by Casper will
        loadPlugins: false // use these settings
    }
});

phantom.outputEncoding = "GBK";//解决乱码问题

casper.start('loginPageUrl', function () {
    this.echo(this.getTitle());//获取页面标题
});

casper.thenEvaluate(function(username,password) {

    document.querySelector('input[name="username"]').setAttribute('value', username);
    document.querySelector('input[name="password"]').setAttribute('value', password);

}, 'userename','password');

casper.then(function(){
    this.click('#index_Portal_bt'); //summit button
});

casper.thenOpen('mainPageUrl',function(){
    this.echo(this.getTitle());//获取页面标题
});

casper.run(function() {
    this.echo('message sent').exit();
});

casper.run();