import React from 'react';

import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <div>
    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
