// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef, useState } from 'react';
import Cookies from "js-cookie";
import NxWelcome from './nx-welcome';

export function App() {

  const [state, setState] = useState({});

  const accessBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window) {
      window.addEventListener('message', ({ data }) => {
        setState(data);
      });
    }
    Cookies.set("remoteApp", "React-js", {
      sameSite: "None",
      secure: true,
    })
    Cookies.set("hostApp", "Next-js")
  }, [])

  const remoteApp = Cookies.get("remoteApp");

  return (
    <div>
      <h1><button ref={accessBtnRef}>Request Storage Access</button></h1>
      <p>I am remote App:{remoteApp}</p>
      <span><strong>Parent:</strong>{JSON.stringify(state)}</span>
      <NxWelcome title="react-app" />
    </div>
  );
}

export default App;

// useEffect(() => {
//   if (window) {
//     // Check for iOS / Safari.
//     if (document.hasStorageAccess) {
//       document.hasStorageAccess().then(result => {

//         // If we don't have access we must request it, but the request
//         // must come from a UI event.
//         if (!result) {

//           // Show the button and tie to the click.
//           const requestStorageAccessButton = accessBtnRef.current;
//           if (requestStorageAccessButton) {
//             requestStorageAccessButton.style.display = "block";
//             requestStorageAccessButton.addEventListener("click", event => {

//               // On UI event, consume the event by requesting access.
//               document.requestStorageAccess().then(result => {

//                 // Finally, we are allowed! Reload to get the cookie.
//                 window.location.reload();
//               }).catch(err => {
//                 if (window.top) {
//                   // If we get here, it means either our page
//                   // was never loaded as a first party page,
//                   // or the user clicked 'Don't Allow'.
//                   // Either way open that now so the user can request
//                   // from there (or learn more about us).
//                   window.top.location = window.location.href + "requeststorageaccess.html";
//                 }
//               });

//             });
//           }
//         }
//       }).catch(err => console.error(err));
//     }
//   }
// }, []);