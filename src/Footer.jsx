import React from "react";

function FooterData() {
  return (
    <>
      <footer>
        <div className="footcon" id="footer">
          <div className="fctext">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="cta">

              <form action="htmlfor" className="cta">
              <input type="email" placeholder="Email Address" required/>
              <button>
                Get Started &gt;
              </button>
                </form>
            </div>
          </div>
<br /><br /><br /><br /><br />
          <h3 className="h3">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Questions? Contact us.
            </a>
          </h3>

          <br />

          <div className="dtext2">
            <div className="dt2">
              <a href="#" target="_blank" rel="noopener noreferrer">FAQ</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Investor Relations</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Privacy</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Speed Test</a>
            </div>

            <br /><br />

            <div className="dt3">
              <a href="#" target="_blank" rel="noopener noreferrer">Help Center</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Jobs</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Cookie Preferences</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Legal Notices</a>
            </div>

            <br /><br />

            <div className="dt4">
              <a href="#" target="_blank" rel="noopener noreferrer">Account</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Ways to Watch</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Corporate Information</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Only on Netflix</a>
            </div>

            <br /><br />

            <div className="dt5">
              <a href="#" target="_blank" rel="noopener noreferrer">Media Center</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Terms of Use</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
          </div>

          <br /><br />

          <div className="checkbox">
            <select defaultValue="">
              <option value="">Select your Language</option>
              <option value="pk">Pakistan</option>
              <option value="in">India</option>
              <option value="us">United States</option>
            </select>
          </div>

          <br /><br />

          <div className="dt123">
          <h3 >Netflix Pakistan</h3>
          <p className="p1">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn more.</a>
          </p>
        </div>
        </div>
      </footer>
    </>
  );
}

export default FooterData;
