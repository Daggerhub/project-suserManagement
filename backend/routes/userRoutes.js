import express from 'express';
import { getUser, getUsers, createUser, updateUser , deleteUser } from '../controllers/userController.js'

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;