# /dev/med term for http://devmed.sh
#
# This main idea is to have a full featured terminal app with support for:
# * User registration
# * User login
# * Users chat
# * Talk creation
# * Talk review
# * Talk audio and/or videw reproduction
#
# Any ideas? the code is on github.com/coffeegrid you can make a new plugin and send a pull request

class DevmedTerm

  version: '0.0.1'

  constructor: ->
    @term = new Terminal(
      handler: @handler,
      ctrlHandler: @ctrlHandler,
      crsrBlinkMode: true,
      rows: 20;
      bgColor: 'none',
      frameColor: 'none',
      frameWidth: '10px',
      ps: '%c(#15C6CA)guest@coffeegrid %c(#FC7696)/dev/med $%c0',
      greeting: """

           _                                          _
    /   ___/   ___  _   __    / , _ , _     ___    ___/    /
   /   /   | .'   ` |   /    /  |' `|' `. .'   `  /   |   /
  ,'  ,'   | |----' `  /    ,'  |   |   | |----' ,'   |  ,'
 ,    `___,' `.___,  \/    ,    /   '   /  `.___, `___,' ,
           `                                          `     shell v0.02
try help command for more info. ;)

"""
    )

    @term.open()

  ctrlHandler: ->
    # C-l = clean
    if @inputChar is @termKey.FF
      @clear()
      @prompt()

  handler: ->
    mail = """
No mail for guest
"""
    talks = """
+----------------------------------------------------------------------------+
| %c(#15C6CA)Location:%c0 EAFIT, Aula %c(#F69)27-103%c0           %c(#15C6CA)Date:%c0 15-08-2012                    |
|============================================================================|
| %c(#15C6CA)Time%c0  | %c(#15C6CA)Title%c0                        | %c(#15C6CA)Speakers%c0                            |
|============================================================================|
| %c(#F69)19:00%c0 | ¿Qué es devmed?              | Sebastian & Adolfo                  |
|       |                              | @castillobuiles & @abuiles          |
|-------+------------------------------+-------------------------------------|
| %c(#F69)19:15%c0 | Building crawlers in ruby    | Vladimir Penking (Charla en Inglés) |
|       |                              | @mindwork                           |
|-------+------------------------------+-------------------------------------|
| %c(#F69)19:45%c0 | Descanso                     |                                     |
|-------+------------------------------+-------------------------------------|
| %c(#F69)20:00%c0 | Construyendo heathub.co:     | Adolfo Builes                       |
|       | Ruby,  Event Machine y Otros | @abuiles                            |
|-------+--------------------------------------------------------------------|
| %c(#F69)20:30%c0 | Cervezas en Calle 9.                                               |
+----------------------------------------------------------------------------+
"""
    help = """Available commands:
\t\ttalks\t\t\t\t# Information about upcoming talks.
\t\tmail\t\t\t\t\t# Check your email.
\t\tfollow\t\t\t# Follow us on twitter.

"""
    @newLine()
    line = @lineBuffer
    #TODO: change this for a call_cmd() function call ;)
    switch line
      when "?"      then @write help
      when "follow" then @write "Sorry, click the button for now."
      when "help"   then @write help
      when "mail"   then @write mail
      when "talks"  then @write talks
      when "clear"  then @clear()
      when ""       then null
      else @write "%c(red)#{line}%c0: command not found. Try help"
    @prompt()


jQuery ->
  window.term1 = new DevmedTerm

# termHandler = ->
#   @newLine()
#   line = @lineBuffer
#   @write "You typed: " + line  unless line is ""
#   @prompt()

# Window.term = new Terminal(
#         handler: termHandler,
#         x: 220,
#         y: 70,
#         termDiv: 'termDiv',
#         bgColor: 'black',
#         greeting: "Hola")
#
