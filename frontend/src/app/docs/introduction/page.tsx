"use client"
import React from "react";

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold">Welcome to the Quickdrop Documenation</h1>
            <p className="mb-4">
                This app is an open source application that allows you to quickly upload and share files with others.
                Here you will find detailed information about the app's features, components, and API methods.
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-semibold">Features</h2>
            <ul className="mb-4 list-inside list-disc space-y-1">
                <li>Uses the shadcn component library.</li>
                <li>Spring boot backend.</li>
                <li>Dark and light mode (important for your eyes).</li>
                <li>AWS S3 implementation.</li>
            </ul>
            <h2 className="mb-4 mt-8 text-2xl font-semibold">Hidden directory</h2>
            <p className="mb-4">
                It may be unusual to have a hidden directory in a web application, but we have one. It is hidden to avoid unnecessary
                clutter for the main webpage, since it is a simple file dropper application.
            </p>
            <p className="mb-4">
                You would normally find this on our GitHub page, but we have included it here for your convenience.
            </p>
            <h2 className="mb-4 mt-8 text-2xl font-semibold">Contributing</h2>
            <p className="mb-4">
                If you would like to contribute to the Quickdrop application, please visit our GitHub page. We have
                included a CONTRIBUTIONS.md file that outlines the requirements for contributing to the project.
            </p>
        </main>
    )
}

