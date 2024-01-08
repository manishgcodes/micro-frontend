import { NavLink } from "@remix-run/react";

const LandingPage = () => (
    <div style={{ textAlign: "center" }}>
        <h1>I am landing page</h1>
        <p>for more information go to home page, click below!</p>
        <button><NavLink to="/home">Home</NavLink></button>
    </div>
)

export default LandingPage;