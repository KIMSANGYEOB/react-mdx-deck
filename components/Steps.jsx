import React from "react";

export const Steps = ({ children, className }) => {
  const renderChildren = () => {
    return React.Children.map(children, (element, index) => {
      return (
        <element.type order={index} {...element.props}>
          {element.props.children}
        </element.type>
      );
    });
  };

  return <div 
    className={className}>
      {renderChildren()}
    </div>;
};

export default Steps;
