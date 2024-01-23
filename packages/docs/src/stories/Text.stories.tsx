import type { StoryObj, Meta } from '@storybook/react'
import { Text } from '@ignite-ui/react/src/index'
import { TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'lorem ispum, dolor line signed',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
}
