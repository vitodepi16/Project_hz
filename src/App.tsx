import './App.css'
import HeaderComponent from './assets/Component/HeaderComponent'
import CardComponent from './assets/Component/CardComponent'

  

function App() {
  

  return (
    <>
    
<HeaderComponent
  texts={['React Bits']} 
  velocity={200} 
  className="custom-scroll-text"
      />
      <CardComponent className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
Prova carda
</CardComponent>
      <HeaderComponent
        texts={['React Bits']} 
  velocity={200} 
  className="custom-scroll-text"/>
    </>
  )
}

export default App
