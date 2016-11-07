/***********************************
 * Module dependencies.
 * @private
 ************************************/
var express = require('express');
var path = require('path');
var compression = require('compression');
var methodOverride = require('method-override');
var Logger = require('./lib/logger');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var exphbs = require('express-handlebars');

/***********************************
 * App creation
 ************************************/
dotenv.load(); // load environment variables
var app = express(); // create express app

/***********************************
 * Templating
 ************************************/
var hbs = exphbs.create({
  defaultLayout: 'single-page',
  helpers: {
    ifeq: function(a, b, options) {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    toJSON : function(object) {
      return JSON.stringify(object);
    },
    section: function(name, options){ 
        if(!this._sections) this._sections = {};
        this._sections[name] = options.fn(this); 
        return null;
    } 
  }
});


/***********************************
 * Set up app properties
 ************************************/
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('env',  process.env.ENVIRONMENT);
app.set('port', process.env.PORT || process.env.DEFAULT_APP_HTTP_LISTENING_PORT);
app.set('json spaces', 0);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(Logger.getRequestLogger());

/***********************************
 * Controllers
 ************************************/
// home controller
var homeController = require('./controllers/home');
app.get('/', homeController.home);
app.get('/categories', homeController.categories);
app.get('/products', homeController.products);

/***********************************
 * Environment, Exception handling & logging
 ************************************/
if (process.env.ENVIRONMENT == 'production') {
  app.use(function(err, req, res, next) {
    Logger.getLogger().error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

/***********************************
 * App initialization
 ************************************/
app.listen(app.get('port'), function() {  
  Logger.getLogger().info('Express server listening on port ' + app.get('port'));
});

/***********************************
 * Module exports.
 ************************************/
module.exports = app;
