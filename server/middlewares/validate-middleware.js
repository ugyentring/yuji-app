//This middleware is for the validation and it is used in the auth router and contact too

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
