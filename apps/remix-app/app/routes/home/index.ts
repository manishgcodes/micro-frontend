import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { Home } from "./Home";
import styles from "./home.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];


export default Home;