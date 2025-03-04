import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

export default function ActionModal({
    childern,
    trigger, title, desc, btnText, onClick, open, setOpen
}) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogTrigger>
    {trigger}</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>
      {desc}
      </AlertDialogDescription>
      
    </AlertDialogHeader>
    {childern}
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      {btnText && (
        <AlertDialogAction onClick = {onClick}> {btnText}
        </AlertDialogAction>
      )}
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}
