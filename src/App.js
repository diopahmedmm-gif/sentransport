import './App.css';
import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p>Bienvenue ! Cette application vous aide à trouver
        votre ligne de bus à Dakar.</p>

        <div className="stats-container">
          <Statistique chiffre="10" libelle="Lignes" />
          <Statistique chiffre="150" libelle="Arrêts" />
          <Statistique chiffre="50" libelle="Bus en service" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
