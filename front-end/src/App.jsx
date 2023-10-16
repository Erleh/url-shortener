import { useState } from 'react';
import { useEffect } from 'react';
import Nav from './components/Nav';
import CallTo from './components/CallTo';
import Linker from './components/Linker';
import Statistics from './components/Statistics';
import CallToBanner from './components/CallToBanner';
import PageFoot from './components/PageFoot';

function App() {
  const [screenWidth, setWidth] = useState(window.innerWidth);
  const minWidth = 768;

  function handleResize () {
    setWidth(window.innerWidth);
  }

  // Registers current screen width as a state using side effects
  useEffect(() => {
    // Connects to the browser api
    window.addEventListener("resize", handleResize);

    // Cleanup to disconnect from outside-of-react system
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  });

  return (
    <>
    <header>
      <Nav screenWidth={screenWidth} minWidth={minWidth}/>
    </header>
    <main>
      <CallTo />
    </main>
    <Linker />
    <section id="statistics">
      <Statistics screenWidth={screenWidth} minWidth={minWidth}/>
    </section>
    <section className="dark-bg">
      <CallToBanner />
    </section>
    <PageFoot />
    </>
  )
}

export default App;
