import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import Layout from '@src/components/Layout';

const AppPage = ({ location }: RouteComponentProps) => {
  return (
    <Router>
      <Layout location={location}></Layout>
    </Router>
  );
};

export default AppPage;
