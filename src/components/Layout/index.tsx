import React from 'react';

interface LayoutProps {
  children?: any;
  location: any;
  noAuth?: boolean;
  forUser?: boolean;
}

const Layout: React.FunctionComponent<LayoutProps> = ({children}) => {

  return (
    <div className="layout">{children}</div>
  );
};

export default Layout;
