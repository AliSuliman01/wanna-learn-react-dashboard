import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import logo from './logo.svg'
import modules from './modules';

export default function App() {
    const [currentTab, setCurrentTab] = useState('Materials');
    return (
        <BrowserRouter>
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <ul className='App-nav'>
                        {modules.map(module => (
                            <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                                <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>
                                    {module.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </header>
                <div>
                    {modules.map(module => (
                        <Route key={module.name} {...module.routeProps} />
                    ))}
                </div>
            </div>
        </BrowserRouter>
    );
}