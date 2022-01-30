import * as React from 'react';
import { withEnabledHooks } from '../../src';
import { shallow } from 'enzyme';
import { Foo } from './component';

describe('did-mount', function () {
  it('should not be called useEffect', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper.props().className).toBe('');
  });

  it('should be called useEffect and set classname', () => {
    withEnabledHooks(() => {
      const wrapper = shallow(<Foo />);
      expect(wrapper.props().className).toBe('some-classname');
    });
  });
});
