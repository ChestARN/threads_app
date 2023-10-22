import { ClerkProvider } from "@clerk/nextjs"
import '../globals.css';
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: 'Threads',
    description: 'A next.js 13 Meta Threads Application'
}


export default function RootLayout({
    children 
}: {
    children: React.ReactNode 
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="w-full flex justify-center items-center min-h-screen">
                    {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}
