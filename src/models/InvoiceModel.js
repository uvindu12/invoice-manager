import mongoose, { Schema, models } from "mongoose";

const invoiceModel = new Schema ({
    customer : {
        type : object,
        required: true
    },
    amount: {
        trype: String,
        trim: true,
        required: true,
    },
    status: {
        trype: String,
        default: "Unpaid",
        required: true,
    },
    sent: {
        trype: Number,
        default: 0,
        required: true
    },
},
{ timestamps : true }
)

const Invoice = models.Invoice || mongoose.model ("Invoice", invoiceModel);
export default Invoice