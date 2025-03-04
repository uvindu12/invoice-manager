"use client";

import React from 'react'
import ActionModal from '../widgets/ActionModal';
import { Button } from '../ui/button';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

const customers = [
    {
        id: 1,
        name: "John Doe",
        image: "",
        email: "johndeo@gmail.com"
    },
    {
        id: 2,
        name: "Alex Doe",
        image: "",
        email: "alexdoe@gmail.com"
    },
    {
        id:3,
        name: "jonee dasa",
        image: "",
        email: "joneedasa@gmail.com"
    }
]

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name is required.",
    }),
    status: z.string().min(2, {
        message: "Status is required.",
      }),
    amount: z.string().min(2, {
    message: "Amount is required.",
    }),
  })

export default function CreateInvoice() {
    const [open, setOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          status: "Unpaid",
          amount: "",
        },
      })

      function onSubmit(values) {
        const {name, status, amount} = values
        console.log(values)
      }

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
                setOpen={setOpen} 
                
            >
            
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a customer" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLable>Customer</SelectLable>
                             <>
                                {customers?.map ((item) => {
                                    const {name} = item
                                    return (
                                        <SelectItem key = {item.id} value={name}>
                                        {name}</SelectItem>
                                    )
                                })}
                            </>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Submit</Button>
            </form>
            </Form>
                 
            </ActionModal>

            
        </div>
    )
}


