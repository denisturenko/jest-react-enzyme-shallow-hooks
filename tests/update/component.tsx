import React, { useState } from 'react';

export const Foo = ({ className }) => {
  const [value, setValue] = useState(className);

  React.useEffect(() => {
    setValue(className);
  }, [className]);

  return <div className={value} />;
};
