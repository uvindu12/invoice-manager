"use server"

import { revalidatePath } from "next/cache";
import { connectMongoDB } from "@/config/db";
import Invoice from "@/models/Invoice";
import { revalidatePath } from "next/cache";

export const getErrorMessages = (error) => {
    let message;
    if (error instanceof Error) {
        message = error.message;

    }else if (error && typeof error === "object" && "message" in error) {
        message = Strign(error.message);
    }else if (typeof error === "string") {
        message = error;
    }else {
        message = "Somthing went wrong";  
    }
    return message;
}

export const createInvoice =async (formData) => {
    const { amount, customer, status } = formData;
    try {
        if (!amount || !customer || !status) {
            return {
                error : "All fields are required",
            };
           
        }
        await connectMongoDB ()

        await Invoice.create ({
            customer,
            amount,
            status
        })

        revalidatePath ("/");

        return {
            message: "Invoice Created successfully",
        }
    }
    catch (error) {
        console.log(error);
        return { 
            error: getErrorMessages(error),
        }
    }
        
}
