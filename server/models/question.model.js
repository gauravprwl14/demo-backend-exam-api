import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * User Schema
 */
const QuestionSchema = new mongoose.Schema({
  questinoLabel: {
    type: String,
    required: true
  },
  questinoDescription: {
    type: String,
    required: true
  },
  options: [],
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
QuestionSchema.method({
});

/**
 * Statics
 */
QuestionSchema.statics = {
  /**
   * Get question
   * @param {ObjectId} id - The objectId of question.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((question) => {
        if (question) {
          return question;
        }
        const err = new APIError('No such question exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List questions in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of questions to be skipped.
   * @param {number} limit - Limit number of questions to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef question
 */
export default mongoose.model('Question', QuestionSchema);
