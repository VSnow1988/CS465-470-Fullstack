const mongoose = require('mongoose'); //.set('debug', true); 
const model = mongoose.model('trips');

// Get a user for validation
const getUser = (req, res, callback) => {
    (req, res, userName) => {                              
      const locationId = req.params.locationid;
      if (locationId) {
        Loc
          .findById(locationId)
          .select('reviews')
          .exec((err, location) => {
             if (err) {
               return res
                 .status(400)
                 .json(err);
            } else {
              doAddReview(req, res, location, userName);     
             }
           });
      } else {
        res
          .status(404)
          .json({"message": "Location not found"});
      }
    };
  }          

// GET: /trips - lists all the trips 
const tripsList = async (req, res) => { 
    model
        .find({}) // empty filter for all
        .exec((err, trips) => { 
            if (!trips) { 
                return res 
                    .status (484)
                    .json({ "message": "trips not found" });
            } 
            else if (err) {
                return res
                    .status (404) 
                    .json(err);
            } 
            else {
             return res
                .status (200)
                .json (trips);
            }
        });
};

// GET: /trips/:tripCode - returns a single trip 
const tripsFindCode = async (req, res) => {
    model
        .find({ "code": req.params.tripCode })
        .exec((err, trip) => { 
           if (!trip) {
               return res
                    .status (404)
                    .json({ "message": "trip not found" });
           } 
           else if (err) {
               return res
                    .status (404) 
                    .json(err);
           } 
           else {
               return res
                .status (200) 
                .json (trip);
           }
        });
}

// POST: /trips/addTrip - add trip to the db
const tripsAddTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
        Trip
            .create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            (err, trip) => {
                if(err) {
                    return res  
                        .status(400) //bad request, invalid content
                        .json(err);
                } else {
                    return res
                        .status(201) //created
                        .json(trip);
                }
            });
        }
    );
}

// PUT: /api/trips/:tripcode Update trip
const tripsUpdateTrip = async (req, res) => {       
    console.log(req, body);
    getUser(req, res,
        (req, res) => {
        Trip
            .findOneAndUpdate({ 'code': req.params.tripCode }, {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }, { new: true })
            .then(trip => {
                if (!trip) {
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
                }
                res.send(trip);
            }).catch(err => {
                if (err.kind === 'ObjectId'){
                    return res
                        .status(400)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
                } 
                return res
                    .status(500) //server error
                    .json(err);
            });
        });
}

// DELETE: /trips/:tripCode - deletes a trip
const tripsDeleteTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
        Trip
            .findOneAndDelete({ 'code': req.params.tripCode })
            .exec((err, trip) => { 
            if (!trip) {
                return res
                        .status (404)
                        .json({ "message": "trip not found" });
            } 
            else if (err) {
                return res
                        .status (404) 
                        .json(err);
            } 
            else {
                return res
                    .status (200) 
                    .json (trip);
            }
            });
        });
}                                                     

  module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip,
    getUser
  };