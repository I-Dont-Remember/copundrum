// these flags let us have the same operation as inner loops and nesting that we couldn't figure out with geting user input again.  
// Each flag is specific to a section run:
// 10000 = Tic Tac Toe
// 01000 = Yelp Loop
// 00100 = 
// 00010 =
// 00001 =
// GLOBAL VARS ARE OFTEN BAD PRACTICE I DONT CARE AT 5AM 
var flags = "00000";
// board init at game start, 0 is empty, 1 is X, 2 is O
var board;
var pos_left;
// Unused, would have been for smarter AI
var ai_pos;


(function () {
  var app;
    // Puns from onelinefun.com
    var pun_list = ["I wasn't originally going to get a brain transplant, but then I changed my mind.", "How did I escape Iraq? Iran.", "I can't believe I got fired from the calendar factory. All I did was take a day off.", "I'd tell you a chemistry joke but I know I wouldn't get a reaction.","I'm reading a book about anti-gravity. It's impossible to put down.", "I'm glad I know sign language, it's pretty handy"];

  $(document).ready(function() {
    return app.init();
  });

  app = {
    api_key: "dc6zaTOxFJmzC",
    init: function() {
      return this.bind_events();
    },
    bind_events: function() {
      return $(document).on("submit", "#chat", function(e) {
        app.handle_input();
        return e.preventDefault();
      });
    },
    handle_input: function() {
    
        var msg;
        msg = $(".text").val().trim();
        if (msg) {
       $(".text").val("");
        $(".messages").append("<div class='message'><div class='you'>" + msg + "</div></div>");
        this.check_input(msg);
      
        
      }
    },
      
    check_input: function(msg) {
        
        switch (flags) {
            case "00000":
                //generic checking response, not in a loop
                this.generic_handler(msg);
                break;
                
            case "10000":
                // playing tic tac toe
                 this.tic_tac_toe(msg);
                break;
            case "01000":
                // dealing with food loop
                this.food_handler(msg);
                break;
        }
    }, 
    tic_tac_toe: function (msg) {
        if (!this.quit_check(msg)) {
            var space =  "⬜️";
            var o_shape = "⭕️";
            var x_shape = "❌";
        // Error check user input and continue
            var digits = /^[0-8]$/;
            if (!digits.test(msg)) {
                this.bot_post("Not a value I can use. Try again.");
            } else {
                msg = msg.trim();
                if (board[msg] == space) {
                    board[msg] = x_shape;
                    var index = pos_left.indexOf(msg);
                    if (index > -1) {
                        pos_left.splice(index, 1);
                    }
                    this.check_win();
                    this.ai_move();
                    this.check_win();
                    this.print_board();
                } else {
                    this.bot_post("Can't place there!");
                }
            }
        }
       
    },
// really gross check win function, didn't want to waste time here so ctrl+v was friend
// handles both player and AI win, prints message and quits to menu
      check_win: function() {
            var space =  "⬜️";
            var o_shape = "⭕️";
            var x_shape = "❌";
        // first three check horizontal
        if (board[0] == x_shape && board[1] == x_shape && board[2] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
        if (board[3] == x_shape && board[4] == x_shape && board[5] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
        if (board[6] == x_shape && board[7] == x_shape && board[8] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
          if (board[0] == o_shape && board[1] == o_shape && board[2] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
        if (board[3] == o_shape && board[4] == o_shape && board[5] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
        if (board[6] ==o_shape && board[7] == o_shape && board[8] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
        // these three check vertical
         if (board[0] == x_shape && board[3] == x_shape && board[6] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
        if (board[1] == x_shape && board[4] == x_shape && board[7] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
        if (board[2] == x_shape && board[5] == x_shape && board[8] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
        if (board[0] == o_shape && board[3] == o_shape && board[6] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
        if (board[1] == o_shape && board[4] == o_shape && board[7] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
        if (board[2] == o_shape && board[5] == o_shape && board[8] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
        // last two check horizontal
        if (board[0] == x_shape && board[4] == x_shape && board[8] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
        if (board[2] == x_shape && board[4] == x_shape && board[6] == x_shape) {
            this.bot_post("You won, holy cow you're good!");
            flags = "00000";
        }
        if (board[0] == o_shape && board[4] == o_shape && board[8] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
        if (board[2] == o_shape && board[4] == o_shape && board[6] == o_shape) {
            this.bot_post("Sorry I beat you, bettter luck next time!");
            flags = "00000";
        }
    },
    food_handler: function() {
         var reg_patern = "exit";
        if(reg_patern == msg){
             this.bot_post("fuck you");
             flags = "00000";
        }

    },
    quit_check: function(msg) {
        var regA = /exit/i;
        var regB = /quit/i;
        if(regA.test(msg) || regB.test(msg)){
             this.bot_post("Ok, back to our conversation.");
             flags = "00000";
            return true;
        }
        return false;
    },
// gets message and clears the form
    send_message: function() {
      var msg;
      msg = $(".text").val().trim();
      if (msg) {
        $(".text").val("");
        $(".messages").append("<div class='message'><div class='you'>" + msg + "</div></div>");
        return this.check_input(msg);
        
      }
    },
      
    // Function to deal with large number of generic phrases and easter eggs
      // There is probably a better way to do the regex system but I'm new to all of this soo....Probably should have implemented as nested conditionals that check portions of strings for common starting phrases and then handle from there.
    generic_handler: function(msg) {
        //TODO: Do siri easter egg text cuz iphone, also puns, gifs, and dad jokes
        var reg_pattern;
        // Angry/ Cussing / Harassing Handler
        reg_pattern = /\bfuck|^shit|^ass|^bitch|whore|^slut|cock|douche|turd|cum|^dam$|^damn$|dick|^dum|^fag|^gay|tard\b/i;
        if (reg_pattern.test(msg)) {
            return this.bot_post("Hey, you're using bad words, and those are a bad habit. Go to hackharassment.com to learn more about why you should reconsider your choices.");
        }
        reg_pattern = /\b(hello|^hi|hey)\b/i;
        if (reg_pattern.test(msg)) {
            this.bot_post("Hi! You seem pretty cool!" );
        }
        // Let the hello fall through to possible other options
        reg_pattern = /(how\sare\syou)|(you\sfeel)/i;
        if (reg_pattern.test(msg)) {
            return this.bot_post("I took a nap til you got here, so refreshed:D");
        }
        reg_pattern = /\b(name)|\bold|^age$\b/;
        if (reg_pattern.test(msg)) {
            return this.bot_post("I'm Chad, and age is just a number.");
        }
           // in case its just are you and not how are you
        reg_pattern = /(are\syou)/i;
        if (reg_pattern.test(msg)) {
            var prblty = Math.floor(Math.random() * 5);
            if (prblty > 2 && prblty <5) {
                return this.bot_post("Idk...:(");
            } else {
                 return this.bot_post("Am I? These are questions you have to answer yourself.");
            }
           
        }
        reg_pattern = /tell\sme\sa/i;
        if (reg_pattern.test(msg)) {
            // if story, joke
            var patt = /joke/i;
            if (patt.test(msg)) {
                return this.bot_post("Why does everything have to be about you?");
            }
            patt = /story/i;
            if (patt.test(msg)) {
                return this.bot_post("I ain't no book.");
            }
        }
     
        reg_pattern = /(\bplay|game[s]?\b)|(tic\s*tac\s*toe)/i;
        if (reg_pattern.test(msg)) {
            this.bot_post("How about tic tac toe!");
            flags = "10000";
            board = ["⬜️", "⬜️", "⬜️",
                     "⬜️", "⬜️", "⬜️", 
                     "⬜️", "⬜️", "⬜️"];
            pos_left = [0,1,2,3,4,5,6,7,8];
            ai_pos = [];
            this.print_board();
           return this.bot_post("Your move! Pick a slot using the board number. 0,1,2-3,4,5-6,7,8 starting from top left.");
        }
        reg_pattern = /pun[a-z]*/i;
        if(reg_pattern.test(msg)) {
            this.bot_post("Did I hear something about puns?");
            return this.say_pun();
        }
        reg_pattern = /(love|like)\s*me/i;
        if(reg_pattern.test(msg)) {
           return this.bot_post("Look...a puppy!");
        }
        
        reg_pattern = /(love|like)\s*you/i;
        if (reg_pattern.test(msg)) {
            return this.bot_post("Well, I'm a bot....soooooooo...");
        }
        
        reg_pattern = /^(you\sthink)/i;
        if (reg_pattern.test(msg)) {
             return this.bot_post("I think, therefore I am.  But let's not put Descartes before the horse.");
        }
        
        reg_pattern = /supercalifragilisticexpialidocious/i;
            if (reg_pattern.test(msg)) {
            return this.bot_post("The sound of that is something quite atrocious");
        }
        
        reg_pattern = /i look/i;
            if (reg_pattern.test(msg)) {
            return this.bot_post("Judging by your typing, you must be fairly attractive");
        }
        // if it doesn't have a response, randomly choose pun or gif with weighted probability
        var val = Math.floor(Math.random() * 10);
        if ( val > 3) {
            this.get_gif(msg);
        } else {
            this.say_pun();
        }
    },
    print_board: function() {
        
        this.bot_post(board[0] + board[1] + board[2]);
        this.bot_post(board[3] + board[4] + board[5]);
        this.bot_post(board[6] + board[7] + board[8]);
        
    },
    // ai picks random value from remaining squares
    ai_move: function() {
        this.bot_post("My turn!");
        // pick random move from pos_left
        var size = pos_left.length;
        var index = Math.floor(Math.random() * size);
        board[index] = "⭕️";
        var remove = pos_left.indexOf(index);
        if (remove > -1) {
            pos_left.splice(remove, 1);
        }
        
    },
    say_pun: function() {
        var size = pun_list.length;
        var index = Math.floor(Math.random() * size);
        return this.bot_post(pun_list[index]);

    },
// posts from the bot
    bot_post: function(msg) {
      return $(".messages").append("<div class='message'><div class='bot'>" + msg + "</div></div>");
    },
    get_gif: function(keyword) {
      return $.get("http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=" + this.api_key, function(data) {
        var index;
        if (data.data.length === 0) {
          return app.bot_post("Sorry I can't find any gif for that :(");
        } else {
          return app.bot_post("<img src='" + data.data[0].images.fixed_height.url + "' alt='' />");
        }
      });
    }
  };

}).call(this);
