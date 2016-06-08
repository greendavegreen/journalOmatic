/**
 * GET /
 * Home page.
 */

var Journal = require('../models/Journal.js');

exports.getJournal = (req, res) => {
  var jname = req.params.jname;

  Journal.find((err, blurbs) => {
    res.render(jname+'/home', {
      title: jname, journals: blurbs
    });
  });
};
