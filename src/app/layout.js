
import {Inter} from 'next/font/google'

const inter = Inter ({subsets: ['latin']})

export const metadata = {
    title: 'My First App',
    description: 'My First App'
}

export default function RootLayout ({children}){
    return (
    <html lang= "en">
        <body className= {inter.className}>
            {children}
        </body>
    </html>
    )
}