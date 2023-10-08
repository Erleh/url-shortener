import Nav from './Nav';
import CallTo from './CallTo';
import Linker from './Linker';
import Statistics from './Statistics';
import CallToBanner from './CallToBanner';
import PageFoot from './PageFoot';

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
    <section id="statistics">
      <Statistics />
    </section>
    <section>
      <CallToBanner />
    </section>
    <PageFoot />
    </>
  )
}

export default App;
