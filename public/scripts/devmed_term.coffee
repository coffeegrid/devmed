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

  constructor: ->
    @term = new Terminal(
      handler: @handler,
      ctrlHandler: @ctrlHandler,
      rows: 11;
      bgColor: 'none',
      frameColor: 'none',
      frameWidth: '10px',
      ps: '%c(#15C6CA)guest@coffeegrid %c(#FC7696)/dev/med $ %c0',
      greeting: "*** Welcome to /dev/med/ console *** \n"
    )

    @term.open()

  ctrlHandler: ->
    # C-l = clean
    @clear(); @prompt() if @inputChar is @termKey.FF

  handler: ->
    @newLine()
    line = @lineBuffer
    @write "You typed: %c(red)" + line  unless line is ""

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