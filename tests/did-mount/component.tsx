import React, { useState } from 'react';

export const Foo = () => {
  const [value, setValue] = useState('');

  React.useEffect(() => {
    setValue('some-classname');
  }, []);

  return <div className={value} />;
};
