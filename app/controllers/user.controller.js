const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send({'Message' : "Public Content."});
  };
  
exports.userBoard = (req, res) => {
  res.status(200).send({'Message' : "User Content."});
};

exports.adminBoard = (req, res) => {
  res.status(200).send({'Message' : "Admin Content."});
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send({'Message' : "Moderator Content."});
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find({})
    
    res.send(users);  
  } catch(err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users data."
    });
  }
};
