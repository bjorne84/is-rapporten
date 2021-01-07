const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IceSchema = new Schema({
  lake: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// exporterar, första argument är att ge ett namn
module.exports = mongoose.model("Ice-posts", IceSchema);
