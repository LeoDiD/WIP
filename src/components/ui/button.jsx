import React from 'react';

export function Button({ variant, className, asChild, children }) {
  const Component = asChild ? 'span' : 'button';
  return (
    <Component className={`btn ${variant} ${className}`}>
      {children}
    </Component>
  );
}
