
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nametoShow = req.params.userName;
  if(nametoShow==undefined){
  	nametoShow="World";
  }
  console.log("name is "+ nametoShow);
  res.render('index', {
  	'name': nametoShow,
  });
};
