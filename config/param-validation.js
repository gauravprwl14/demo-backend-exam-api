import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
    }
  },

  // POST /api/v1/exam
  exam: {
    create: {
      body: {
        userId: Joi.string().required(),
      }
    }
  }

};
