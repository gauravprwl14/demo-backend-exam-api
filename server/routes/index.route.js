import express from 'express';
import userRoutes from './user.route';
import examRoutes from './exam.route';
// import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/v1/users', userRoutes);

// mount exam routes at /exams
router.use('/v1/exams', examRoutes);

// mount auth routes at /auth
// router.use('/auth', authRoutes);

export default router;
