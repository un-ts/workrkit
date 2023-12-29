import echo from 'workerkit'

test('it should just work', () => {
  expect(echo()).toBe('Hello World!')
})
