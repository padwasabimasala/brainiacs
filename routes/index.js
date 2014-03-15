/* exports.init = function(app) {
  app.get('/',
    bigBrother , // middelware chain
    requireACL("admin"),
    littleSister,
    index
  );
}

requireACL = function(acl) {
  return function(req, res, next) {
    console.log(acl, req.query.acl)
    if (req.query.acl != acl) {
      res.send("Not Allowed")
    }
    next()
  }
}
bigBrother = function(req, res, next) {
  console.log("I am watching you");
  next()
}

littleSister = function(req, res, next) {
  console.log("I am following you")
  next()
}
*/

exports.init = function(app) {
  app.get('/', index
  );
  app.get('/check-answer', checkAnswer)
}
index = function(req, res){
  res.render('index', { title: 'Livy\'s App', name: 'Livy Lu Li Bu' });
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
