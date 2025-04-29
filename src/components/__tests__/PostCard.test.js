import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import PostCard from '../PostCard.vue'

describe('Post Card Component', () => {
  test('created posts renders correctly', () => {
    const title = 'Test Post'
    const body = 'Test post body...'
    const wrapper = mount(PostCard, {
      props: { title, body }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})