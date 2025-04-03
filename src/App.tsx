import './App.css'
import HeaderComponent from './assets/Component/HeaderComponent'
import FooterComponent from './assets/Component/FooterComponent'
import CardComponent from './assets/Component/CardComponent'

  

function App() {
  

  return (
    <>
    
    <HeaderComponent/>
      <CardComponent className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        Prova card
      </CardComponent>
    <FooterComponent/>
    </>
  )
}

export default App
