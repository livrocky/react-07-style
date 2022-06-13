import './Header.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <nav className='main-nav'>
          <div>
            <a href='#home' className='nav-link'>
              HOME
            </a>
            <a href='#about' className='nav-link'>
              ABOUT
            </a>
            <a href='#contacts' className='nav-link'>
              CONTACTS
            </a>
          </div>
          <div>
            <a href='#search' className='nav-link'>
              SEARCH
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
