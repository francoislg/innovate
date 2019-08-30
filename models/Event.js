var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  id: Number,
  title: String,
  shortDescription: String,
  description: String,
  pictureURL: String,
  category: String,
  season: String,
  owners: [String],
  open: Boolean,
  location: String,
  science: Boolean,
  nominated: Boolean,
  comments: [{author: String, comment: {content: String}}],
  votes: [{userID: String}],
  presentationURL: String,
  teamDriveURL: String
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;