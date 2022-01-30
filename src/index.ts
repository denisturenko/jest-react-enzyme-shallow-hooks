const react = jest.requireActual('react');
const useEffectMock = jest.fn(react.useEffect.bind(react));

const hasChanged = (prev, next) => prev === undefined || prev.some((prevDep, index) => prevDep !== next[index]);

const buildMockUseEffect = () => {
  const prevCalls = new Map();
  const cleanup = new Map();

  return (eff, deps) => {
    const key = eff.toString();

    if (prevCalls.has(key) && !hasChanged(prevCalls.get(key), deps)) return;

    prevCalls.set(key, deps);

    cleanup.has(key) && cleanup.get(key)();

    const cleanupFunction = eff();
    typeof cleanupFunction === 'function' && cleanup.set(key, cleanupFunction);
  };
};

export const withEnabledHooks = (test) => {
  useEffectMock.mockImplementation(buildMockUseEffect());
  try {
    test();
  } finally {
    useEffectMock.mockImplementation(react.useEffect.bind(react));
  }
};

export default () => ({ ...react, useEffect: useEffectMock });
