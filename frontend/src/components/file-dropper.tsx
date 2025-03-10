"use client"

import React, { useState, useCallback } from "react"
import { useDropzone, type FileRejection } from "react-dropzone"
import { Upload, X } from "lucide-react"

export function FileDropper() {
    const [files, setFiles] = useState<File[]>([])
    const [error, setError] = useState<string | null>(null)

    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        if (fileRejections.length > 0) {
            setError("File(s) rejected. Only images under 5MB are accepted.")
        } else {
            setError(null)
        }

        setFiles(prev => [...prev, ...acceptedFiles])
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxSize: 10 * 1024 * 1024 * 1024 // 10 GB
    })

    const formatFileSize = (bytes: number) => {
        if (bytes >= 1024 ** 3) { // GB
            return `${(bytes / (1024 ** 3)).toFixed(1)} GB`;
        }
        if (bytes >= 1024 ** 2) { // MB
            return `${(bytes / (1024 ** 2)).toFixed(1)} MB`;
        }
        return `${(bytes / 1024).toFixed(1)} KB`;
    };

    const truncateFileName = (fileName: string) => {
        if (fileName.length <= 20) {
            return fileName;
        }
        return (fileName.slice(0, 20) + "...");
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index))
    }

    const clearAll = () => {
        setFiles([])
        setError(null)
    }

    return (
        <div className="w-full max-w-md">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                    min-h-[200px] flex flex-col items-center justify-center ${
                    isDragActive ? "border-primary bg-primary/10" : "border-muted-foreground"
                }`}
            >
                <input {...getInputProps()} aria-label="File upload" />
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                {isDragActive ? (
                    <p>Drop the files here...</p>
                ) : (
                    <p>Drag 'n' drop images here, or click to select (max 10GB)</p>
                )}
            </div>

            {error && <p className="mt-2 text-sm text-destructive">{error}</p>}

            {files.length > 0 && (
                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Uploaded Files ({files.length})</h2>
                        <button
                            type="button"
                            onClick={clearAll}
                            className="text-sm text-destructive hover:underline"
                        >
                            Clear All
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {files.map((file, index) => (
                            <li
                                key={`${file.name}-${index}`}
                                className="flex items-center justify-between p-2 bg-muted/50 rounded"
                            >
                                <div className="">
                                    <span className="font-medium">{truncateFileName(file.name)}</span>
                                    <span className="text-sm text-muted-foreground ml-2">
                                        ({formatFileSize(file.size)})
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="text-destructive hover:bg-muted p-1 rounded-full"
                                    aria-label="Remove file"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}