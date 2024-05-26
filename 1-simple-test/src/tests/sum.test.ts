import {describe, expect, test} from '@jest/globals';
import {sum, multiply} from '../index';
import { app } from '../simple';
import request from 'supertest'; // to test http server you dont want the tests also start the http server
// and also run app.listen

// a describe block is a collection of related tests and each test is wrritten in a test block
describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds -1 + -2 to equal -3', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});

describe('multiply module', () => {
  test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('multiply -2 * -2 to equal 4', () => {
    expect(multiply(-2, -2)).toBe(4);
  });
});

describe(' testing http server', () => {
  test('should return the sum of two numbers', async () => {
    const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
    })
    expect(res.body.answer).toBe(3);
    expect(res.statusCode).toBe(200);
  });
})