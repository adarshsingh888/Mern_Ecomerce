import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//Placing order using COD Method

const placeOrder = async (req , res) =>{
    try{
        const{userId, items , amount , address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"flase",
            payment:"flase",
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"order placed "})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
}

//Placing order using Stripe Method

const placeOrderStripe = async (req , res) =>{
    
}

//Placing order using Razorpay Method

const placeOrderRazorpay = async (req , res) =>{
    
}

//All orders data Admin Pannel

const allOrders = async(req , res) => {

}

//User Order data for frontend 

const userOrders = async (req ,res) => {
    try{
        const {userId} = req.body;

        const oreders = await orderModel.find({userId})
        res.json({success:true,oreders})
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

//update order status for admin panel

const updateStatus = async (req , res) => {

}

export {placeOrder , placeOrderStripe ,placeOrderRazorpay, allOrders , userOrders, updateStatus}