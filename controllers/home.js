/***********************************
 * home controller expose UI ma marchande
 ************************************/

/***********************************
 * Module dependencies.
 * @private
 ************************************/
var base = require('airtable').base('apphR8QJcnOdxmhcR');
var EndPointHelper = require('../lib/endpoint-helper');
var Logger = require('../lib/logger');
var fs=require("fs");

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

/**
 * render stub categories
 *
 * @param {req} request
 * @param {res} response
 */
function renderCategories(req,res){
  if(process.env.ENDPOINT_LOCATION_LOCAL==1){
    fs.readFile("data/categories.json",'utf8',function(err,data){
      if (err)
        Logger.getLogger().error(err.stack);
      else 
        res.send(data);
    }); 
  }
  else{
    var responseStream="{\"records\": [";
    base('categories').select().eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            responseStream=responseStream+record+",";
        });        
    });
    responseStream=responseStream+"]}";
    res.send(responseStream);    
  }
}

/**
 * render stub products
 *
 * @param {req} request
 * @param {res} response
 */
function renderProducts(req,res){
  if(process.env.ENDPOINT_LOCATION_LOCAL){
    fs.readFile("data/products.json",'utf8',function(err,data){
      if (err)
        Logger.getLogger().error(err.stack);
      else 
        res.send(data);
    });
  } 
}

/***********************************
 * Module exports.
 ************************************/
module.exports={
    home :function(req, res) {
      renderHome(req,res);
    },
     categories :function(req, res) {
      renderCategories(req,res);
    },
    products :function(req, res) {
      renderProducts(req,res);
    }
}