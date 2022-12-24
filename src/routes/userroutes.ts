import { Router } from "express";
import * as UserController from '../Controllers/UserController';
import UserFormValidation from "../Validations/UserFormValidations";

const router: Router = Router();

// create user
router.post('/', UserFormValidation, UserController.createUser);

// get all user
router.get('/', UserController.getAllUser);

// get user
router.get('/:id', UserController.getUser);

// patch user
router.patch('/:id', UserFormValidation, UserController.updateUser);

// delete user
router.delete('/:id', UserController.deleteUser);

export default router;
