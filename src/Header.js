import './Header.css';

function Header() {
  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <header className="header">
      <h1 className="header-titre">SénTransport</h1>
      <p className="header-sous-titre">Votre guide des transports à Dakar</p>
      <p className="header-date">{today}</p>
    </header>
  );
}

export default Header;
