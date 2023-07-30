const router = require('express').Router();

const {
  getCurrentUserById,
  updateUser,
} = require('../controllers/users');

const { validateUpdateUser } = require('../middlewares/validations');

router.get('/users/me', getCurrentUserById);

router.patch('/users/me', validateUpdateUser, updateUser);

module.exports = router;
