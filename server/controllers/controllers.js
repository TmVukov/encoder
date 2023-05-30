const { encoder } = require('../utils/encoder');

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (
    email === 'optimus.prime@autobots.com' &&
    password === 'validPassword1234!'
  ) {
    return res.send({ token: 'xyz0987654321' });
  }

  return res.status(401).send({ error: 'Login failed.' });
};

exports.encodeString = (req, res) => {
  try {
    const str = req.body.string;
    const encoded = encoder(str);

    return res.status(200).json(encoded);
  } catch (error) {
    return res
      .status(500)
      .send({ error: 'An error occurred while encoding the string.' });
  }
};
