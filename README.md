[coffeegrid.org/dev/med/](coffeegrid.org/dev/med/) web site code

```
           _                                          _
    /   ___/   ___  _   __    / , _ , _     ___    ___/    /
   /   /   | .'   ` |   /    /  |' `|' `. .'   `  /   |   /
  ,'  ,'   | |----' `  /    ,'  |   |   | |----' ,'   |  ,'
 ,    `___,' `.___,  \/    ,    /   '   /  `.___, `___,' ,
           `                                          `

$ what?
This is the source code of http://coffeegrid.org/dev/med/

$ why?
For fun

$ so?
So you can create new commands for the web shell and have more fun

$ seriously?
Yeah, why not? /dev/med/ is a place where
Medellín developers share knowledege, solve hard problems together and have beers.

The web site tries to get the community together around a funny place
and also lets developers from other communities or whoever intrested
in our cummunity to watch past event data as videos and that.

Oh and you can use the talk command to chat with other online devs :)

```

## Extending the devmed cli

I'm working on make a stable and extendable architecture down there.
I'm using backbone models and the way to extend the cli adding new commands
could be creating a new command class extending from the basic command backbone model.
