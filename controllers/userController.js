const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { name, faceDescriptor } = req.body;
  try {
    const newUser = new User({ name, faceDescriptor });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};
