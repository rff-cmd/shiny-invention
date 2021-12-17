import Card from './assets/card'
import Experience from './assets/experience'
import Footer from './assets/footer'
import Navbar from './assets/navbar'
import Soon from './assets/soon'

export default function Layout({ children }) {
    return (
        <div>
            <main>
                <Navbar/>
                <Card />
                <Experience />
                <Soon/>
                <Footer />
                {children}
            </main>
        </div>
    )
} 
