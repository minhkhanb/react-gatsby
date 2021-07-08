import React from 'react';

interface ComponentCProps {
  children?: React.ReactNode;
}
const ComponentC: React.FunctionComponent<ComponentCProps> = () => {
  return (
    <div className='component-c'>
      <h1>Component C</h1>
      <p>Description</p>
    </div>
  );
};

export default ComponentC;
