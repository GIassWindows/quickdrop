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
                    If you are found to be uploading and distributing incriminating files, the authorities will be contacted.
                </AlertDialogDescription>
                <AlertDialogDescription>
                    <b>3.</b> Quickdrop is not responsible for any loss of data.
                    Please ensure you have a backup of your files.
                </AlertDialogDescription>
                <AlertDialogDescription>
                    <b>4.</b> Quickdrop provides a 10 GB file size limit.
                    Any files exceeding this limit will be rejected.
                </AlertDialogDescription>
                <AlertDialogDescription>
                    <b>5.</b> By clicking "I Agree", you acknowledge that you have read and understood the terms of use,
                    and in doing so, you will be held accountable for any actions that violate the terms.
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={setDialogOpen}>I Agree</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}