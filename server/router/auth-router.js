const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json("hello success gettting data");
  } catch (error) {
    console.log("error fetching data", error);
  }
});

module.exports = router;
