import { startServer, testConfig } from '../index';

const { app, express } = testConfig;

jest.mock('express');

test('starting server should call app.listen', () => {
  startServer();
  expect(app.listen).toBeCalled();
});

test('static path is setup', () => {
  expect(express.static).toBeCalled();
  expect(app.use).toBeCalled();
})
