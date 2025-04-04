// src/components/Base.tsx
import Nav from './Nav'
import Footer from './Footer'

type BaseProps = {
    title: string
    children: React.ReactNode
}

export default function Base({ title, children }: BaseProps) {
    document.title = title

    return (
        <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 min-h-screen">
            <div className="max-w-4xl mx-auto p-6">
                <Nav />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}
