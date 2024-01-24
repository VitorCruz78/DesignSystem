import type { StoryObj, Meta } from '@storybook/react'
import { Avatar } from '@ignite-ui/react/src/index'
import { AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/VitorCruz78.png',
    alt: 'Vitor Luiz',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
