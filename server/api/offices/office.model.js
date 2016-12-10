'use strict';

import mongoose from 'mongoose';

var OfficeSchema = new mongoose.Schema({
  name: String,
  cubes: [{
    name: String
  }]
});

export default mongoose.model('Office', OfficeSchema);
