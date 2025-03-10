'use client'
import "./globals.css"
import { api } from '@/templates/api';
import { FileDropper } from "@/components/file-dropper"
import { Warning } from "@/components/warning";
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function Page() {
    const [test, setTest] = useState("");

    const getData = async () => {
        try {
            const response = await api.get('/api/testing/helloo');
            if(response){
                setTest(response.data);
            }
        } catch (e) {
            console.log(e);
        }
    }
    //getData();
    return (
        <div className="flex flex-col min-h-svh">
            <Warning></Warning>
            <header className="flex items-center justify-center p-4 border-b">
                <h1 className="text-2xl font-bold">Quickdrop</h1>
            </header>

            <main className="flex-grow flex items-center justify-center p-4">
                <FileDropper />

            </main>

            <footer className="p-4 border-t text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} File Dropper App. All rights reserved.
            </footer>
        </div>
    )
}

