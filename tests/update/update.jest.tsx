import * as React from 'react';
import { withEnabledHooks } from '../../src';
import { shallow } from 'enzyme';
import { Foo } from './component';

describe('update', function () {
  it('should be called useEffect and set classname after set props', () => {
    withEnabledHooks(() => {
      const prevClassName = 'prev-class-name';
      const nextClassName = 'next-class-name';
      const wrapper = shallow(<Foo className={prevClassName} />);
      expect(wrapper.props().className).toBe(prevClassName);
      wrapper.setProps({ className: nextClassName });
      expect(wrapper.props().className).toBe(nextClassName);
    });
  });
});
