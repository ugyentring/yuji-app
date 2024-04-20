const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).json("home");
  } catch (error) {
    res.json("Error", error);
  }
};

//Registration controller
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.json({
      msg: "Registration Successful!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

//Login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json("Please register yourself!");
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }
  } catch (error) {
    res.json("Internal server error", error);
  }
};

module.exports = { home, register, login };
