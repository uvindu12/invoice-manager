"use client";

import React from 'react'
import ActionModal from '../widgets/ActionModal';
import { Button } from '../ui/button';
import { useState } from "react";



export default function CreateInvoice() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <ActionModal
                title="Create Invoice"
                desc = "Create a new invoice"
                trigger ={
                    <Button className="text-white space-x-1">
                        <span>Create Invoice</span>
                        <span className= 'text-lg'>+</span>
                        </Button>
                }
                open ={open}
                setOpen={setOpen}>
                    <h1>Invoice</h1>
            </ActionModal>
        </div>
    )
}


