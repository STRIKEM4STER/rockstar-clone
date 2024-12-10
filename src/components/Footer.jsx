import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-5 px-3">
      <div className="container">
        
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h5 className='text-warning'>Rockstar Games</h5>
            <p>&copy; 2024 Rockstar Games. All Rights Reserved.</p>
            <p style={{textAlign:"justify"}} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nostrum saepe. Odio soluta optio eum recusandae at dolorum qui dolores atque natus, debitis non voluptate cupiditate quis sunt excepturi repudiandae.</p>
          </div>
          
          
          <div className="col-md-4 mb-3">
            <h5 className='text-warning'>Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3 text-decoration-none"><i className="fab fa-facebook-f"></i> Facebook</a>
              <a href="#" className="text-white me-3 text-decoration-none"><i className="fab fa-twitter"></i> Twitter</a>
              <a href="#" className="text-white me-3 text-decoration-none"><i className="fab fa-instagram"></i> Instagram</a>
              <a href="#" className="text-white text-decoration-none"><i className="fab fa-youtube"></i> YouTube</a>
            </div>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5 className='text-warning'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Support</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">Copyright 2024 Rockstar Games. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
