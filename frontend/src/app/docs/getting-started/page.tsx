"use client"
import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold">Getting Started</h1>
            <p className="mb-4">
                To get started, you will need an understanding of the technologies used in the Quickdrop application. This includes
                knowledge of the shadcn component library, Spring Boot, and AWS S3. If you are unfamiliar with these technologies,
                that's completely fine. A brief overview of each technology is provided below.
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-semibold">Shadcn Component Library</h2>
            <p className="mb-4 list-inside list-disc space-y-1">
                The shadcn component library is a collection of reusable components that can be used to build web applications.
                These components are designed to be easy to use and customize, allowing developers to quickly create user interfaces
                that are both functional and visually appealing. The shadcn component library is currently being used in the Quickdrop,
                and is on this documentation site too.
            </p>
            <p className="mb-4 list-inside list-disc space-y-1">
                While the repository for Quickdrop includes the components for you, if any issues arise, you may try to use the
                CLI to install the components.
            </p>
            <p className="mb-4 list-inside list-disc space-y-1">
                A list of components currently used are:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1">
                <li>alert-dialog</li>
                <li>button</li>
                <li>input</li>
                <li>dropdown-menu</li>
                <li>sidebar</li>
            </ul>
            <p className="mb-4 list-inside list-disc space-y-1">
                Run this command in the CLI to install the components:
            </p>
            <SyntaxHighlighter language="java" style={dracula}>
                npx shadcn@latest add COMPONENT
            </SyntaxHighlighter>
            <h2 className="mb-4 mt-8 text-2xl font-semibold">Spring Boot</h2>
            <p className="mb-4 list-inside list-disc space-y-1">
                Spring Boot is the backend framework used in the Quickdrop application. It is used as a REST API handler for the
                frontend of the application. There is quite a bit to learn about Spring Boot, so it is highly recommended that you
                research the framework in your own time.
            </p>
            <p className="mb-4 list-inside list-disc space-y-1">
                The main takeaway for the application is that Spring Boot is used to handle the backend API calls of the application through the use of
                annotations. This allows for the creation of REST API endpoints that can be used to interact with the frontend of the
                application. A demonstration of this is below:
            </p>
            <SyntaxHighlighter language="java" style={dracula}>
                @GetMapping(&quot;/api&quot;)
                public String getApi() &#123;
                    return &quot;Hello from the API!&quot;
                &#125;
            </SyntaxHighlighter>
            <h2 className="mb-4 mt-8 text-2xl font-semibold">AWS S3</h2>
            <p className="mb-4 list-inside list-disc space-y-1">
                AWS Simple Storage Service (S3) is a cloud storage service provided by AWS. It is used in Quickdrop
                to store and distribute files uploaded by users. The storage service utilises "buckets", which is a container to store
                objects. Each object has a key which acts as the unique identifier for the object.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </main>
    )
}

