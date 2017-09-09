import User from '../models/user.model';


/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @returns {User}
 */
function create(req, res, next) {
  const user = new User({
    username: req.body.username,
  });

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

export default { create };
