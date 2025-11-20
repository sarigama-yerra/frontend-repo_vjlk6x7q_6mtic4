import Header from "./components/Header";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Gallery from "./components/Gallery";
import Wallpaper from "./components/Wallpaper";

function App() {
  return (
    <div className="min-h-screen text-white relative">
      <Wallpaper />
      <div className="relative">
        <Header />
        <Hero />
        <Details />
        <Gallery />
        <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-violet-200/70">
          Crafted with love for the violet season. Sources: horticultural references and global street-tree observations.
        </footer>
      </div>
    </div>
  );
}

export default App;
