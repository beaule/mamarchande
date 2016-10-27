/***********************************
 * endpoint helper contains all methods used to manage environment data  
 ************************************/

/***********************************
 * Module dependencies.
 * @private
 ************************************/

/***********************************
 * Private constants.
 ************************************/

/***********************************
 * Private properties
 ************************************/

/***********************************
 * Private functions
 ************************************/

/**
 * Helper function for creating a method on a prototype.
 *
 * @return string
 */
getEndPointRootUrl= function() {
  if(process.env.ENDPOINT_LOCATION_LOCAL)
    return "/stub";
  else
    return process.env.AIRTABLE_ENDPOINT_URL+"/AIRTABLE_ENDPOINT_MAMARCHANDE_URL";
};


/***********************************
 * Module exports.
 ************************************/
//module.exports=endpointHelper;
