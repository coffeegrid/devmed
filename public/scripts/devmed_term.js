(function() {
  var DevmedTerm;

  DevmedTerm = (function() {

    DevmedTerm.prototype.version = '0.0.1';

    function DevmedTerm() {
      this.term = new Terminal({
        handler: this.handler,
        ctrlHandler: this.ctrlHandler,
        crsrBlinkMode: true,
        rows: 11,
        bgColor: 'none',
        frameColor: 'none',
        frameWidth: '10px',
        ps: '%c(#15C6CA)guest@coffeegrid %c(#FC7696)/dev/med $%c0',
        greeting: "\n          _                                          _\n   /   ___/   ___  _   __    / , _ , _     ___    ___/    /\n  /   /   | .'   ` |   /    /  |' `|' `. .'   `  /   |   /\n ,'  ,'   | |----' `  /    ,'  |   |   | |----' ,'   |  ,'\n,    `___,' `.___,  \/    ,    /   '   /  `.___, `___,' ,\n          `                                          `     shell v0.01\n"
      });
      this.term.open();
    }

    DevmedTerm.prototype.ctrlHandler = function() {
      if (this.inputChar === this.termKey.FF) {
        this.clear();
        return this.prompt();
      }
    };

    DevmedTerm.prototype.handler = function() {
      var help, line;
      help = "Empty command set.We will be adding user registration, login and talk creation here latter.Keep watching";
      this.newLine();
      line = this.lineBuffer;
      switch (line) {
        case "help":
          this.write(help);
          break;
        case "":
          null;
          break;
        default:
          this.write("%c(red)" + line + "%c0: command not found. Try help");
      }
      return this.prompt();
    };

    return DevmedTerm;

  })();

  jQuery(function() {
    return window.term1 = new DevmedTerm;
  });

}).call(this);
