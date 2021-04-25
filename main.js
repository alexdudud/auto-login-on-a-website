var casper = require('casper').create();
    verbose: true;
    logLevel: 'debug';
        pageSettings: {
            loadImages: true;
            loadPlugins: true
        };

var url ="https://moodle-ingenieurs.cesi.fr/login/index.php?authCAS=CAS"

casper.start(url,function(){
    console.log("PAGE CHARGEE");
    casper.screenshot
  
});
casper.then(function(){
    casper.sendKeys('input#login','email');
    this.click("a.submit");
    console.log("PAGE 1 OK");
    
});

casper.then(function(){
    casper.sendKeys('input#userNameInput','Email);
    casper.sendKeys('input#passwordInput','Password');
    this.click("span#submitButton.submit");
    this.click("span#submitButton.submit");
    this.click("span#submitButton.submit");
    console.log("PAGE 2 OK");
    
});

casper.then(function(){
    casper.capture('navigation.png');
    console.log("capture ok");
});

casper.run();
