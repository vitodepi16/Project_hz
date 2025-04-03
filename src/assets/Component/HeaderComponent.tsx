import FlowingWords from './FlowingWords'; // Adjust the path as needed
import '../Styles/Header.css';

function App  () {
  return (
    <>
      <header>
        <FlowingWords texts={["Header 1", "Header 2", "Header 3", "Header 4"]} velocity={150}/>
      </header>
    </>
  )
}
export default App;