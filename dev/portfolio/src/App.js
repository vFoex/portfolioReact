import React from 'react';
import { BrowserRouter } from "react-router-dom";
// components
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Technologies from './components/Technologies';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
                <Banner/>
                <Nav/>
                <About/>
                <Technologies/>
                <Work/>
                <Contact/>
            </div>
        </BrowserRouter>

    );
};

export default App;
