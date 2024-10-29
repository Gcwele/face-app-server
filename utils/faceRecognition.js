const User = require('../models/User');
const faceapi = require('face-api.js');

exports.verifyFace = async (inputDescriptor) => {
  const users = await User.find();
  for (const user of users) {
    const distance = faceapi.euclideanDistance(inputDescriptor, user.faceDescriptor);
    if (distance < 0.6) { // Adjust threshold as needed
      return user;
    }
  }
  return null;
};
