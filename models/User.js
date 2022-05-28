const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true, },
  email: { type: String, required: true, },
  displayName: { type: String, required: true, },
  firstName: { type: String, required: true, },
  lastName: { type: String, required: true, },
  image: { type: String, },
  createdAt: { type: Date, default: Date.now, },
})
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
UserSchema.virtual('fullName').
  get(function() {
    return this.name.first + ' ' + this.name.last;
  });

// compiling schema into a Model
module.exports = mongoose.model('User', UserSchema)
