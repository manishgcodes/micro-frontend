import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

import styles from "./styles.css";

export const headerLinks: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

export const Header = () => {
    return (
        <div className="app-header">
            <div className="header-container"  >
                <div><a href="/">Logo</a></div>
                <nav>
                    <button><a href="/home">Home</a></button>
                </nav>
                <div>Profile</div>
            </div>
        </div>
    )
}