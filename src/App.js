import React from 'react';
import DarkmodeToggle from './DarkmodeToggler';
import CookieConsent from './CookieConsent';

function App() {
  return (
    <>
      <DarkmodeToggle />
      <CookieConsent
        text="This sites uses third-party cookies.
  By accepting this prompt, you agree to our cookie-policys."
      />
    </>
  );
}

export default App;
