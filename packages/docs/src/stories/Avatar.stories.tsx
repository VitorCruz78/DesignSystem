import type { StoryObj, Meta } from '@storybook/react'
import { Avatar } from '@tinhosinho-ignite-ui/react/src/index'
import { AvatarProps } from '@tinhosinho-ignite-ui/react'

// teste
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/VitorCruz78.png',
    alt: 'Vitor Luiz',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
