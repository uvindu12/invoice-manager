"use client";

import React, { useState } from "react";
import ActionModal from "../widgets/ActionModal";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { LoadingButton } from "../widgets/Loader";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";

const customers = [
  {
    id: 1,
    name: "John Doe",
    image: "",
    email: "johndeo@gmail.com",
  },
  {
    id: 2,
    name: "Alex Doe",
    image: "",
    email: "alexdoe@gmail.com",
  },
  {
    id: 3,
    name: "Jonee Dasa",
    image: "",
    email: "joneedasa@gmail.com",
  },
];

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
});

export default function CreateInvoice() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      status: "Unpaid",
      amount: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div>
      <ActionModal
        title="Create Invoice"
        desc="Create a new invoice"
        trigger={
          <Button className="text-white space-x-1" onClick={() => setOpen(true)}>
            <span>Create Invoice</span>
            <span className="text-lg">+</span>
          </Button>
        }
        open={open}
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
                    <Select onValueChange={field.onChange} defaultValue={field.value }>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a customer" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Customer</SelectLabel>
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

                <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                        <Input placeholder="amount" {...field} />
                    </FormControl>
                    
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                            <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="Unpaid" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                Unpaid
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="Paid" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                Paid
                                </FormLabel>
                            </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                </FormItem>
                )}
                />

                {isLoading ? (
                    <LoadingButton 
                    btnText = {"Loading"} 
                    btnClass = "w-full" 
                    btnVariant ={"outline"}/>
                ) : (
                    <Button className="w-full" type="submit">Submit</Button>
                )}
                
            </form>
            </Form>
      </ActionModal>
    </div>
  );
}
