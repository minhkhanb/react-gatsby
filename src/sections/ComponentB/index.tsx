import React from 'react';

interface ComponentBProps {
  children?: React.ReactNode;
}
const ComponentB: React.FunctionComponent<ComponentBProps> = () => {
  return (
    <div className='component-b'>
      <h1>Component B</h1>
      <p>Description</p>
    </div>
  );
};

export default ComponentB;
