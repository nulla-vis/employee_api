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