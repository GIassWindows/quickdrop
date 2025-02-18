import { FileDropper } from "@/components/file-dropper"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col min-h-svh">
            <header className="flex items-center justify-between p-4 border-b">
                <Link href="/">
                    <h1 className="text-2xl">Quick Drop</h1>
                </Link>

                <Button size="sm">Sign In</Button>
            </header>

            <main className="flex-grow flex items-center justify-center p-4">
                <FileDropper />
            </main>

            <footer className="p-4 border-t text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Quick Drop: File Dropper App.
            </footer>
        </div>
    )
}

