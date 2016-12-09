'use strict';

import mongoose from 'mongoose';

var CubeSchema = new mongoose.Schema({
  cubeId: Number,
  name: String
});

export default mongoose.model('Cube', CubeSchema);
