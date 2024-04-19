const home = async (req, res) => {
  try {
    res.status(200).send("welcome to home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("successful registration");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
