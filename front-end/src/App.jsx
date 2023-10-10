import Nav from './components/Nav';
import CallTo from './components/CallTo';
import Linker from './components/Linker';
import Statistics from './components/Statistics';
import CallToBanner from './components/CallToBanner';
import PageFoot from './components/PageFoot';

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
