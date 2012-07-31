(function() {
  var DevmedTerm;

  DevmedTerm = (function() {

    DevmedTerm.prototype.version = '0.0.1';

    function DevmedTerm() {
      this.term = new Terminal({
        handler: this.handler,
        ctrlHandler: this.ctrlHandler,
        crsrBlinkMode: true,
        rows: 16,
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
      help = "Empty command set.\n\nComming soon:\n * useradd\n * login\n * talk\n * change dir (cd) -> web site navigation\n * mkdir and touch -> content creation (like next event talk proposal)\n * ls              -> list talks and developers\n\nAnd you can extend the commands forking the github repo :)\nhttps://github.com/coffeegrid/devmed\n\nKeep watching ;)";
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
