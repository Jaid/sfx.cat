import {expect, test} from 'bun:test'

const {default: sfxCat} = await import('#src/main.ts')

test('should run', () => {
  const result = sfxCat()
  expect(result).toBe('sfx.cat') // TODO Test actual functionality
})
