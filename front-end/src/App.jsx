import Nav from './Nav';
import CallTo from './CallTo'
import Linker from './Linker'
import Results from './Results'

function App() {
  return (
    <>
    <header>
      <nav>
        <Nav />
      </nav>
    </header>
    <main>
      <CallTo />
    </main>
    <Linker />
    <Results />
    </>
  )
}

export default App;
