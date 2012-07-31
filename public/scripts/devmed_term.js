(function() {
  var DevmedTerm;

  DevmedTerm = (function() {

    function DevmedTerm() {
      this.term = new Terminal({
        handler: this.handler,
        ctrlHandler: this.ctrlHandler,
        rows: 11,
        bgColor: 'none',
        frameColor: 'none',
        frameWidth: '10px',
        ps: '%c(#15C6CA)guest@coffeegrid %c(#FC7696)/dev/med $ %c0',
        greeting: "*** Welcome to /dev/med/ console *** \n"
      });
      this.term.open();
    }

    DevmedTerm.prototype.ctrlHandler = function() {
      this.clear();
      if (this.inputChar === this.termKey.FF) return this.prompt();
    };

    DevmedTerm.prototype.handler = function() {
      var line;
      this.newLine();
      line = this.lineBuffer;
      if (line !== "") this.write("You typed: %c(red)" + line);
      return this.prompt();
    };

    return DevmedTerm;

  })();

  jQuery(function() {
    return window.term1 = new DevmedTerm;
  });

}).call(this);
