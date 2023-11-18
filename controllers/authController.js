const registerUser = (req, res) => {

  console.log(req.body);
  
  res.json({ message: req.body.username });
};

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

const viewUser = (req, res) => {
  res.json({ message: "View User" });
};

module.exports = { registerUser, loginUser, viewUser };
