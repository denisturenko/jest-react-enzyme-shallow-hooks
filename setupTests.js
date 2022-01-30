const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({adapter: new Adapter()});


jest.mock('react', () => require("./src/index").default());
