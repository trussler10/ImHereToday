'use strict';

import mongoose from 'mongoose';

var LocationSchema = new mongoose.Schema({
  name: String,
  cubes: Array
});

export default mongoose.model('Location', LocationSchema);
