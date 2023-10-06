import Nav from './Nav';
import CallTo from './CallTo';
import Linker from './Linker';
import Results from './Results';
import Statistics from './Statistics';

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
    <section id="statistics">
      <Statistics />
    </section>
    </>
  )
}

export default App;
