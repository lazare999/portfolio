import React from 'react';

import Header from '../Header/Index';
import NameAndPhoto from '../NameAndPhoto/Index';
import About from '../About/Index';
import Projects from '../Projects/Index';
import WhatIDo from '../WhatIDo/Index';
import Footer from '../Footer/Index';

const MainPage = () => {
  return (
    <div>
      <Header />
      <NameAndPhoto />
      <About />
      <Projects />
      <WhatIDo />
      <Footer />
    </div>
  );
};

export default MainPage;