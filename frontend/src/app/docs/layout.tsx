import "../globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "@/components/theme-script"
import { ThemeToggle } from "@/components/theme-toggle"
import { AppSidebar } from "@/components/sidebar"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "File Dropper App Documentation",
    description: "A simple file dropper application",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider defaultTheme="system" storageKey="docs-theme">
            <ThemeScript />
            <SidebarProvider>
                <AppSidebar />
                <div className="flex items-center gap-2 fixed top-3 right-4 z-50">
                    <ThemeToggle />
                    <SidebarTrigger />
                </div>
                <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
            </SidebarProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}


