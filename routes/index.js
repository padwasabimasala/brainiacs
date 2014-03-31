exports.init = function(app) {
  app.get('/', index
  );
  app.get('/check-answer', checkAnswer)
}

index = function(req, res){
  res.render('index', { title: 'Livy\'s App', name: 'Livy Lu Li Bu', firstAddend: Math.round(Math.random() * 10) , secondAddend: Math.round(Math.random() * 10)});
};

checkAnswer = function(req, res){
  //res.render('check-answer', {})
  console.log(req.query)
  console.log(req.query.firstAddend.to_i)

  var first = parseInt(req.query.firstAddend)
  var second = parseInt(req.query.secondAddend)
  var answer = parseInt(req.query.answer)

  if (first + second == answer) {
    res.send("Your answer was correct")
  } else {
    res.send("Your answer was incorrect")
  }
}
