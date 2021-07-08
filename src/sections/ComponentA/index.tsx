import React from 'react';

interface ComponentAProps {
  children?: React.ReactNode;
}
const ComponentA: React.FunctionComponent<ComponentAProps> = () => {
  return (
    <div className='component-a'>
      <h1>Component A</h1>
      <p>Description</p>
    </div>
  );
};

export default ComponentA;
