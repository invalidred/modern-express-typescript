function express () {
  return {
    static: jest.fn(),
    use: jest.fn(),
    get: jest.fn(),
    listen: jest.fn()
  };
};

express.static = jest.fn();

export default express;
export const Request = {};
export const Response = {};
