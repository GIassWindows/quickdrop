'use client'

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction
} from '@/components/ui/alert-dialog';
import { useState } from "react";

export function Warning(){
    const [open, setOpen] = useState(true);
    const setDialogOpen = () => {
        setOpen(false);
    }
    return(
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Important Notes / Terms of Use:</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    <b>1.</b> Quickdrop is NOT for file storage.
                    Files you upload will be prone to deletion in a selected timeframe.
                    The premise of Quickdrop is fast but volatile file transference.
                </AlertDialogDescription>
                <AlertDialogDescription>
                    <b>2.</b> We do not condone the transference of illegal files.
                    If you are found to be uploading incriminating files, the authorities will be contacted.
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={setDialogOpen}>I Agree</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}