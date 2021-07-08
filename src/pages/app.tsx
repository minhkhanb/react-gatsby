import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import Layout from '@src/components/Layout';
import ComponentA from '@src/sections/ComponentA';
import ComponentB from '@src/sections/ComponentB';
import ComponentC from '@src/sections/ComponentC';

const AppPage = ({ location }: RouteComponentProps): React.ReactNode => {
  return (
    <Router>
      <Layout path='app' location={location}>
        <ComponentA path='a' />
        <ComponentB path='b' />
        <ComponentC default />
      </Layout>
    </Router>
  );
};

export default AppPage;
