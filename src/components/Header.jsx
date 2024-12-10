import React from 'react';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        
        <div className="ms-5 navbar-brand">
          <img 
            src="https://w0.peakpx.com/wallpaper/776/772/HD-wallpaper-rockstar-games-logo-rockstargames-rokcstar-games.jpg" 
            alt="Rockstar Logo" 
            width="60px" 
            height="110px" 
          />
        </div>

        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-center w-100"> 
            <li className="ms-3 nav-item">
              <div className="nav-link text-white hover-link">Games</div>
            </li>
            <li className="ms-3 nav-item">
              <div className="nav-link text-white hover-link">Newswire</div>
            </li>
            <li className="ms-3 nav-item">
              <div className="nav-link text-white hover-link">Videos</div>
            </li>
            <li className="ms-3 nav-item">
              <div className="nav-link text-white hover-link">Store & Downloads</div>
            </li>
            <li className="ms-3 nav-item">
              <div className="nav-link text-white hover-link">Support</div>
            </li>
          </ul>
        </div>

        <div className='ms-auto me-4' >
        <button className="btn btn-warning p-2 rounded fw-bold hover-effect"> Get launcher </button>

            <i className="fa-solid fa-user text-white  ms-3 pt-3" style={{ fontSize: '24px' }}></i>

        </div>

      </div>
    </nav>
  );
}

export default Header;
