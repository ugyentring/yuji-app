//This middleware is for the auth validation and it is used in the auth router

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const status = 422;
    const message = "Fill all the inputs";
    const extraDetails = error.errors[0].message;

    const err = {
      status,
      message,
      extraDetails,
    };
    next(err);
  }
};

module.exports = validate;
