(function() {
  var DevmedTerm;

  DevmedTerm = (function() {

    function DevmedTerm() {
      this.term = new Terminal({
        handler: this.handler,
        rows: 11,
        bgColor: 'none',
        frameColor: 'none',
        frameWidth: '10px',
        ps: 'guest@coffeegrid /dev/med $ ',
        greeting: "*** Welcome to /dev/med/ console *** \n"
      });
      this.term.open();
    }

    DevmedTerm.prototype.handler = function() {
      var line;
      this.newLine();
      line = this.lineBuffer;
      if (line !== "") this.write("You typed: " + line);
      return this.prompt();
    };

    return DevmedTerm;

  })();

  jQuery(function() {
    return window.term1 = new DevmedTerm;
  });

}).call(this);
