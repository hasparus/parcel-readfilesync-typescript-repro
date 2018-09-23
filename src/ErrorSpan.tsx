import React from 'react';

const ErrorSpan = ({ error }: { error: Error }) => (
  <span style={{ color: 'crimson' }}>{error.toString()}</span>
);

export default ErrorSpan;
