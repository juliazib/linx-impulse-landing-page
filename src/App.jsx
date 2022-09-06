import './App.css'
import { Header } from './components/Header/Header.jsx'
import { MainContent } from './components/MainContent/MainContent.jsx'
import { Products } from './components/Products/Products.jsx'
import { Newsletter } from './components/ShareForm/ShareForm.jsx'
import { Footer } from './components/Footer/Footer.jsx'

function App() {
    return <div>
    <Header/>
    <MainContent />
    <Products />
    <Newsletter />
    <Footer />
  </div>
}

export default App