import httpStatus from 'http-status';
import ExamSchema from '../models/exam.model';
import APIError from '../helpers/APIError';
import UserSchema from '../models/user.model';
import formulaCollection from '../utils/formulaCollection';
import Constants from '../utils/constants';
import Collection from '../utils/collection';
/**
 * Create new examResult
 * @property {string} req.body.userId - The userId of user.
 * @property {array of Objects} req.body.questionArr - The array of obj and each Objects has structure {
  label: name of the question,
  questionId: Id of the question,
  answerValue: user answer value for the question,
}.
 * @returns {User}
 */

async function create(req, res, next) {
  const userId = req.body.userId;
  const questionAnswerArr = req.body.questionArr;
  try {
    const userObj = await UserSchema.findOneAsync({ _id: userId });
    if (!userObj) {
      const err = new APIError('User Does not Exist ', httpStatus.BAD_REQUEST);
      return next(err);
    }
    const analysingQuestion = Collection.findSubArray(questionAnswerArr, Constants.analysing);
    const r1QuestionAnswerValue = analysingQuestion[0].answerValue;
    const r2QuestionAnswerValue = analysingQuestion[1].answerValue;
    const r3QuestionAnswerValue = analysingQuestion[2].answerValue;
    const analysingValueObj = formulaCollection.analysingFormula(r1QuestionAnswerValue, r2QuestionAnswerValue, r3QuestionAnswerValue);
    if (analysingValueObj.error) {
      const err = new APIError('Invalid AnswerValue ', httpStatus.BAD_REQUEST);
      return next(err);
    }
    const examObj = new ExamSchema({
      userId,
      answers: questionAnswerArr,
      analysing: analysingValueObj.value
    });
    const newExamObj = await examObj.saveAsync();

    return res.send(newExamObj);
  } catch (error) {
    return next(error);
  }
}


export default { create };
