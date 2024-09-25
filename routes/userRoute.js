import express from 'express';
import {
    resetPassword,
    sendOtp,
    userLogin,
    userRegister,
    verifyEmail
} 
from '../controllers/userController.js';
import {validateToken,isAdmin} from '../middlewares/validateTokenHandler.js';

const router = express.Router();

router.post('/register',userRegister);
router.post('/verify-email',verifyEmail);
router.post('/send-otp',sendOtp);
router.post('/login',userLogin);
router.put('/reset-password/:id',resetPassword);

export default router;