import Hero from "./components/Hero";
import Demo from "./components/Demo";

import './App.scss';

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient" />
        </div>

        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App