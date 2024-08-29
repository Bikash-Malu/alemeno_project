import React from 'react';
import Navigation from './Navbar';
import SidebarComponent from './SidebarComponent';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen w-screen">
            <SidebarComponent />
            <div className="flex-1 flex flex-col overflow-hidden">
                { <Navigation />}
                <div className="flex-1  overflow-y-auto">
                    <div className="font-semibold max-w-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
