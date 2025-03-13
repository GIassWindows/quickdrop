"use client"
import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl">
            <h1 className="mb-1 text-3xl font-bold">uploadToS3</h1>
            <p className="mb-2">Uploads files to the AWS S3 bucket.</p>
            <p className="mb-2"><b>@param String fileName</b>: The name and path of the file.</p>
            <p className="mb-2"><b>@param byte[] fileContent</b>: The bytes of the file to upload.</p>
            <p className="mb-7"><b>@returns void</b>: Returns nothing.</p>
            <SyntaxHighlighter language="java" style={dracula}>
                private void uploadToS3(String fileName, byte[] fileContent)
            </SyntaxHighlighter>


            <h1 className="mt-20 mb-1 text-3xl font-bold">uploadFiles</h1>
            <p className="mb-2">A REST API endpoint for the post method /api/upload which sends files to the method.</p>
            <p className="mb-2"><b>@RequestParam("files") MultipartFile[] files</b>: Captures params with the name "files" and places it into a MultipartFile[] array.</p>
            <p className="mb-7"><b>@returns ResponseEntity&lt;String&gt;</b>: Returns a response with status code 200 (ok) and a string.</p>
            <SyntaxHighlighter className="mb-1" language="java" style={dracula}>
                public ResponseEntity&lt;String&gt;uploadFiles(@RequestParam("files") MultipartFile[] files)
            </SyntaxHighlighter>
        </main>
    )
}

