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


index = function(req, res){
var first = parseInt(req.query.firstAddend)
var second = parseInt(req.query.secondAddend)
var answer = parseInt(req.query.answer)
var right_wrong = 'right'

// if (first + second == answer) {
//   res.send("Your answer was correct")
// } else {
//   res.send("Your answer was incorrect")
// }

res.render('index', {
    title: 'Livy\'s App',
    message: 'Boo hoo. Wah wah wah',
    right_wrong: right_wrong,
    name: 'Livy Lu Li Bu',
    firstAddend: Math.round(Math.random() * 10) ,
    secondAddend: Math.round(Math.random() * 10)
  });
};
