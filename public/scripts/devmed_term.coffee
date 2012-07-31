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
      rows: 16;
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
           `                                          `     shell v0.01

"""
    )

    @term.open()

  ctrlHandler: ->
    # C-l = clean
    if @inputChar is @termKey.FF
      @clear()
      @prompt()

  handler: ->
    help = """Empty command set.

Comming soon:
 * useradd
 * login
 * talk
 * change dir (cd) -> web site navigation
 * mkdir and touch -> content creation (like next event talk proposal)
 * ls              -> list talks and developers

And you can extend the commands forking the github repo :)
https://github.com/coffeegrid/devmed

Keep watching ;)
"""

    @newLine()
    line = @lineBuffer
    #TODO: change this for a call_cmd() function call ;)
    switch line
      when "help" then @write help
      when "" then null
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