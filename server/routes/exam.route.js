import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
// import userCtrl from '../controllers/user.controller';
import examCtrl from '../controllers/exam.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** POST /api/v1/exam - Create new exam result */
  .post(validate(paramValidation.exam.create), examCtrl.create);

export default router;
