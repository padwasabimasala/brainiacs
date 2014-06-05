exports.init = function(app) {
  app.get('/', index
  );
}


/*

  if they have sumbitted an answer
    notify right/wrong
    increment score
    show another problem
  else
    start new game
    show the first problem

*/

var number_right = 0;
var number_wrong = 0;

index = function(req, res){

	var first = parseInt(req.query.firstAddend)
	var second = parseInt(req.query.secondAddend)
	var answer = parseInt(req.query.answer)
	var right_wrong = 'unset'
	
	if (req.query.answer != null) {
		if (first + second == answer) {
		  right_wrong = 'right'
		  number_right++;
		} else {
		  right_wrong = 'wrong'
		  number_wrong++;
		}
	}
	
	if (req.query.newGame) { 		
		number_right = 0;
		number_wrong = 0;
	}
	
	var done = number_right + number_wrong;	
	
	
	res.render('index', {
		title: 'Livy\'s App',
		number_right: number_right,
		number_wrong: number_wrong,
		right_wrong: right_wrong,
		firstAddend: Math.round(Math.random() * 10) ,
		secondAddend: Math.round(Math.random() * 10),
	    done: done
	});
};
