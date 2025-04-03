import FlowingWords from './FlowingWords'; // Adjust the path as needed
import '../Styles/Header.css';

function App  () {
  return (
    <>
      <header>
        <FlowingWords texts={["Example text 1"]} velocity={150}/>
      </header>
    </>
  )
}
export default App;