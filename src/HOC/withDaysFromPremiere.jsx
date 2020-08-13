import React from 'react'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
    const daysFromPremiere = Math.round(
      (new  Date() - new Date(props.premiered)) / 1000 / 60 / 60 / 24
    );
    return <WrappedComponent {...props} daysFromPremiere={daysFromPremiere} />;
  };

  return hocComponent;
};

