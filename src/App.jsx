import "./App.css";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
    </main>
  );
}

export default App;
