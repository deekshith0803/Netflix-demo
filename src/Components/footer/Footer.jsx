import React from 'react'
import  './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="line"></div>
      <div className="footer-row">
        <div className="row-1">
          <spam className='content-1' >Questions? Call <a href="">000-800-919-1694</a></spam>
          <br />
          <spam className='content-1'>FAQ</spam>
          <br />
          <spam className='content-1'>Investor Relations</spam>
          <br />
          <spam className='content-1'>Privacy</spam>
          <br />
          <spam className='content-1'>Speed Test</spam>
          <br />
          <select className='content-1-btn' name="cars" id="cars">
            <option className='drop-down' value="volvo">English</option>
            <option className='drop-down' value="saab">हिंदी</option>
          </select>
          <br />
          <span className='content-1'>Netflix India</span>
        </div>
        <div className="row-2">
          <span className="content-2">Help Centre</span>
          <br />
          <span className="content-2">Jobs</span>
          <br />
          <span className="content-2">Cookie Preferences</span>
          <br />
          <span className="content-2">Legal Notices</span>
        </div>
        <div className="row-3">
          <span className="content-3">Account</span>
          <br />
          <span className="content-3">Ways to Watch</span>
          <br />
          <span className="content-3">Corporate Information</span>
          <br />
          <span className="content-3">Only on Netflix</span>
        </div>
        <dic className="row-4">
          <span className="content-4">Media Centre</span>
          <br />
          <span className="content-4">Terms of Use</span>
          <br />
          <span className="content-4">Contact Us</span>
        </dic>
      </div>
    </div>
  )
}

export default Footer
