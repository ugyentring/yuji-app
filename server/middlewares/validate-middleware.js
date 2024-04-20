//This middleware is for the auth validation and it is used in the auth router

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Validation failed" });
  }
};

module.exports = validate;
