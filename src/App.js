import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        Content
        <AmplifySignOut />
      </header>
      <div id="otEmbedContainer">
        <script src="https://tokbox.com/embed/embed/ot-embed.js?embedId=1f1059f3-ed6d-4a1b-9fd0-01f988a0bdea&room=DEFAULT_ROOM"></script>
      </div>
    </div>
  );
}

export default withAuthenticator(App, true);
