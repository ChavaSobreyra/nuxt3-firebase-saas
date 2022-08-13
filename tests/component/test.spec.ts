import { mount } from '@vue/test-utils'
import { expect, describe, it } from 'vitest'

import Tutorial from './Test.vue'

describe('Example Test', () => {
  it('can get data-testid', () => {
    const wrapper = mount(Tutorial)

    expect(wrapper.attributes()['data-testid']).toEqual(`jest-test`)
  })
})
