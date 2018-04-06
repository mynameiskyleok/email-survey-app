module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in.' });
  }

  // next represents the next middleware in this process chain.
  next();
};
