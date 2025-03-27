//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const events = require('./data/events.json');

// Add your routes here

router.get('/your-route', function (req, res) {
  res.render('new/events-search', {
    events: events
  });
});
