import React from 'react'
import Styles4 from "./MainSection.module.css"

export default function MainSection() {
return (
<>
    <main>

    <div className={Styles4.body}>
    <div className={Styles4.maincontent}>
        <div className={Styles4.maincontentsecond}>
        <h1>Enter your info to sign in</h1>
        <h2>Or get started with a new account.</h2>

        <form action="submit">
            <input type="email or num" placeholder="Email or mobile Number" required/>
            <br/>
            <button>Continue</button>
        </form>

        <select >
            <option value="Get Help">Get Help</option>
            <option value="Get Help">Forget emial or mobile number?</option>
            <option value="Get Help">Learn more about sign-in</option>
        </select>

        <p>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot.</p>
        <a href="#" target="_blank">Learn more</a>
        
        </div>
        </div>
    </div>

</main>
</>
)
}
