import React from 'react'
import '../Footer/Footer.css'
import Logo from '../../assets/Images/logo.png'

 
export default function Footer (){
    return(
        <>
   <footer id='main_footer'>
      <div className="container-fluid">
        <div className="row">
          {/* First Section: Company Logo */}
          <div className="col-md-2 footer-section ml-2 mt-5">
            {/* Replace this with your company logo */}
            <img src={Logo} alt="Company Logo" style={{ width: '100px', marginBottom: '10px' }} />
            <p style={{ color: '#fff' }}>Your Company Slogan</p>
          </div>

          {/* Second Section: Quick Links */}
          <div className="col-md-3 footer-section">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li className='mt-2'><a href="#">Shop</a></li>
              <li className='mt-2'><a href="#">Fabric</a></li>
              <li className='mt-2'><a href="#">Print & Pattern</a></li>
              <li className='mt-2'><a href="#">Home Furnishing</a></li>
              <li className='mt-2'><a href="#">Bulk</a></li>
              <li className='mt-2'><a href="#">Book an Appointment</a></li>
            </ul>
          </div>

          {/* Third Section: Helpful Links */}
          <div className="col-md-3 footer-section">
            <h5>Helpful Links</h5>
            <ul className="list-unstyled">
              <li className='mt-2'><a href="#">Quick Line</a></li>
              <li className='mt-2'><a href="#">Privacy Policy</a></li>
              <li className='mt-2'><a href="#">Terms and Conditions</a></li>
              <li className='mt-2'><a href="#">Shipping Conditions</a></li>
              <li className='mt-2'><a href="#">FAQ</a></li>
              <li className='mt-2'><a href="#">Refund Policy</a></li>
              <li className='mt-2'><a href="#">Terms of Services</a></li>
            </ul>
          </div>

          {/* Fourth Section: Company Info */}
          <div className="col-md-2 footer-section">
            <h5>Company Info</h5>
            <ul className="list-unstyled">
              <li className='mt-2'><a href="#">FavStore Fabrics</a></li>
              <li className='mt-2'><a href="#">Blog</a></li>
              <li className='mt-2'><a href="#">About Us</a></li>
              <li className='mt-2'><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Fifth Section: Address and Social Media */}
          <div className="col-md-2 footer-section">
            <h5>Address</h5>
            rz c 18 sita puri 1 delhi 110045,<br></br>
            Mon-Sun 10.00 AM To 7.00 PM
            Contact us: +91 9818896884

            {/* Social Media Icons */}
            <div className="mt-5">
              {/* Replace these with your actual social media handles */}
              <a href="#" className="social-icons"><i className="fab fa-facebook px-2"></i></a>
              <a href="#" className="social-icons"><i className="fab fa-twitter px-2"></i></a>
              <a href="#" className="social-icons"><i className="fab fa-instagram  px-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}