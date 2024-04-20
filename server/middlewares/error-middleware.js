//This middleware is used in the server.js
//Every error passed in next will be handles by this

const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend error";
  const extraDetails = err.extraDetails || "Error in the backend";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
