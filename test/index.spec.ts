import { sayHello } from 'index';

test('hello', () => {
	expect(sayHello('foo')).toEqual('Hello foo!');
});