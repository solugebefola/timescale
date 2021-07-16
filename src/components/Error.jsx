import React from 'react';

const Error = ({ error }) => (
  <div style={{ color: "red" }}>{error.message}</div>
)

export default Error;