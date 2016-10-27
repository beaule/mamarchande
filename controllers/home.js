/***********************************
 * home controller expose UI ma marchande
 ************************************/

/***********************************
 * Module dependencies.
 * @private
 ************************************/
var EndPointHelper = require('../lib/endpoint-helper');

/***********************************
 * Private functions
 ************************************/

/***********************************
 * rendering functions
 ************************************/

/**
 * render home page (ma marchande screen)
 *
 * @param {req} request
 * @param {res} response
 */
function renderHome(req,res){
  res.render('home', {
    title: 'Ma marchande',     
    layout: 'single-page',    
  });  
}

/***********************************
 * Module exports.
 ************************************/
module.exports={
    home :function(req, res) {
      renderHome(req,res);
    }
}