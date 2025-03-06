import express from "express";
import {placeOrder , placeOrderStripe ,placeOrderRazorpay, allOrders , userOrders, updateStatus} from "../controllers/orederController.js";
import adminAuth from '../middleware/adminAuth.js' 
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();
//Admin Feature 
orderRouter.post("/list", adminAuth,allOrders); 
orderRouter.get("/status", adminAuth,updateStatus); 

//Payment Features 

orderRouter.post('/place', authUser ,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

//User feature 
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter
