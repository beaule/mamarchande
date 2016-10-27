/***********************************
 * stub controller return all stub data services in debug mode
 ************************************/

/***********************************
 * Module dependencies.
 * @private
 ************************************/
var Logger = require('../lib/logger');
fs=require("fs");

/***********************************
 * Private functions
 ************************************/

/***********************************
 * rendering functions
 ************************************/

/**
 * render stub categories
 *
 * @param {req} request
 * @param {res} response
 */
function renderCategories(req,res){
  fs.readFile("data/categories.json",'utf8',function(err,data){
    if (err)
      Logger.getLogger().error(err.stack);
    else 
       res.send(data);
  }); 
}

/**
 * render stub products
 *
 * @param {req} request
 * @param {res} response
 */
function renderProducts(req,res){
  fs.readFile("data/products.json",'utf8',function(err,data){
    if (err)
      Logger.getLogger().error(err.stack);
    else 
       res.send(data);
  }); 
}


/***********************************
 * Module exports.
 ************************************/
module.exports={
    categories :function(req, res) {
      renderCategories(req,res);
    },
    products :function(req, res) {
      renderProducts(req,res);
    }
}