// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';

import NxWelcome from './nx-welcome';

export function App() {

  const [state, setState] = useState({});

  useEffect(() => {
    if (window) {
      window.addEventListener('message', ({ data }) => {
        setState(data);
      });
    }
  }, [])

  return (
    <div>
      I am react app but receiving data from a input created in next.js:{JSON.stringify(state)}
      <NxWelcome title="react-app" />
    </div>
  );
}

export default App;
