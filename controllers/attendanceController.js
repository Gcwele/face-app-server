const User = require('../models/User');
const Attendance = require('../models/Attendance');
const { verifyFace } = require('../utils/faceRecognition');

exports.markAttendance = async (req, res) => {
  const { faceDescriptor } = req.body;
  try {
    const user = await verifyFace(faceDescriptor);
    if (user) {
      const attendance = new Attendance({ userId: user._id });
      await attendance.save();
      res.status(200).json({ message: 'Attendance marked' });
    } else {
      res.status(404).json({ message: 'User not recognized' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark attendance' });
  }
};
