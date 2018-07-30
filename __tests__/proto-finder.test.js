import path from 'path';
import protoFinder, { findSingleFile } from '../src';

describe('protoFinder API', () => {
  test('Should return an instance when default function is called', () => {
    // eslint-disable-next-line
    expect(protoFinder.findSingleFile).toBeDefined();
    // eslint-disable-next-line
    expect(typeof protoFinder.findSingleFile).toBe('function');
  });

  test('Should expose single findSingleFile function', () => {
    expect(typeof findSingleFile).toBe('function');
  });
});

describe('findSingleFile()', () => {
  test('Should return the full path to the proto file', async () => {
    const expectedFilePath = path.resolve(__dirname, './protos/test.proto');
    const filePath = await findSingleFile('test');

    expect(filePath).toBe(expectedFilePath);
  });

  test('Should return undefined when file does not exist', async () => {
    const filePath = await findSingleFile('doesnotexist');

    expect(filePath).toBeUndefined();
  });

  test('Should return undefined when file name is not passed', async () => {
    const filePath = await findSingleFile();

    expect(filePath).toBeUndefined();
  });
});
