import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const Schema = mongoose.Schema;

/**
 * Exam Schema
 */
const ExamSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: { type: Array, default: [] },
  analysing: { type: Number, default: 0 },
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
ExamSchema.method({
});

/**
 * Statics
 */
ExamSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of Exam.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((exam) => {
        if (exam) {
          return exam;
        }
        const err = new APIError('No such exam result exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List Exams Results in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of Exams to be skipped.
   * @param {number} limit - Limit number of Exams to be returned.
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
 * @typedef Exam
 */
export default mongoose.model('Exam', ExamSchema);
