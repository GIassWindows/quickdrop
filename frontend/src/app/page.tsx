import { FileDropper } from "@/components/file-dropper"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div className="flex flex-col min-h-svh">
            <header className="flex items-center justify-between p-4 border-b">
                <h1 className="text-2xl font-bold">File Dropper</h1>
                <Button size="sm">Sign In</Button>
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

