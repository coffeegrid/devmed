(function() {
  var DevmedTerm;

  DevmedTerm = (function() {

    DevmedTerm.prototype.version = '0.0.1';

    function DevmedTerm() {
      this.term = new Terminal({
        handler: this.handler,
        ctrlHandler: this.ctrlHandler,
        crsrBlinkMode: true,
        rows: 20,
        bgColor: 'none',
        frameColor: 'none',
        frameWidth: '10px',
        ps: '%c(#15C6CA)guest@coffeegrid %c(#FC7696)/dev/med $%c0',
        greeting: "\n          _                                          _\n   /   ___/   ___  _   __    / , _ , _     ___    ___/    /\n  /   /   | .'   ` |   /    /  |' `|' `. .'   `  /   |   /\n ,'  ,'   | |----' `  /    ,'  |   |   | |----' ,'   |  ,'\n,    `___,' `.___,  \/    ,    /   '   /  `.___, `___,' ,\n          `                                          `     shell v0.02\ntry help command for more info. ;)\n"
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
      var help, line, mail, talks;
      mail = "No mail for guest";
      talks = "+----------------------------------------------------------------------------+\n| %c(#15C6CA)Location:%c0 EAFIT, Aula %c(#F69)27-103%c0           %c(#15C6CA)Date:%c0 15-08-2012                    |\n|============================================================================|\n| %c(#15C6CA)Time%c0  | %c(#15C6CA)Title%c0                        | %c(#15C6CA)Speakers%c0                            |\n|============================================================================|\n| %c(#F69)19:00%c0 | ¿Qué es devmed?              | Sebastian & Adolfo                  |\n|       |                              | @castillobuiles & @abuiles          |\n|-------+------------------------------+-------------------------------------|\n| %c(#F69)19:15%c0 | Building crawlers in ruby    | Vladimir Penking (Charla en Inglés) |\n|       |                              | @mindwork                           |\n|-------+------------------------------+-------------------------------------|\n| %c(#F69)19:45%c0 | Descanso                     |                                     |\n|-------+------------------------------+-------------------------------------|\n| %c(#F69)20:00%c0 | Construyendo heathub.co:     | Adolfo Builes                       |\n|       | Ruby,  Event Machine y Otros | @abuiles                            |\n|-------+--------------------------------------------------------------------|\n| %c(#F69)20:30%c0 | Cervezas en Calle 9.                                               |\n+----------------------------------------------------------------------------+";
      help = "Available commands:\n\t\ttalks\t\t\t\t# Information about upcoming talks.\n\t\tmail\t\t\t\t\t# Check your email.\n\t\tfollow\t\t\t# Follow us on twitter.\n";
      this.newLine();
      line = this.lineBuffer;
      switch (line) {
        case "?":
          this.write(help);
          break;
        case "follow":
          this.write("Sorry, click the button for now.");
          break;
        case "help":
          this.write(help);
          break;
        case "mail":
          this.write(mail);
          break;
        case "talks":
          this.write(talks);
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
