"use client"

import { useEffect } from "react"
import { useTheme } from "@/components/theme-provider"

export function ThemeScript() {
    const { setTheme } = useTheme()

    useEffect(() => {
        const savedTheme = localStorage.getItem("docs-theme")
        if (savedTheme) {
            setTheme(savedTheme as "light" | "dark")
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setTheme(prefersDark ? "dark" : "light")
        }
    }, [setTheme])

    return null
}

