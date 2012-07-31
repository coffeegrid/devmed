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
      rows: 11;
      bgColor: 'none',
      frameColor: 'none',
      frameWidth: '10px',
      ps: 'guest@coffeegrid /dev/med $ ',
      greeting: "*** Welcome to /dev/med/ console *** \n"
    )

    @term.open()

  handler: ->
    @newLine()
    line = @lineBuffer
    @write "You typed: " + line  unless line is ""
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