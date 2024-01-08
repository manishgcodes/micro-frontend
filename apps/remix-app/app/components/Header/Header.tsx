import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "./header.css";
import { NavLink } from "@remix-run/react";

export const headerLinks: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

export const Header = () => {
    return (
        <div className="app-header">
            <div className="header-container"  >
                <div><NavLink to="/">Logo</NavLink></div>
                <nav>
                    <button><NavLink to="/home">Home</NavLink></button>
                </nav>
                <div>Profile</div>
            </div>
        </div>
    )
}