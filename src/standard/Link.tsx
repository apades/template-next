import NLink from 'next/link'
import { ComponentProps, FC } from 'react'

type Props = ComponentProps<typeof NLink>
const Link: FC<Props> = props => {
  return <NLink {...props} />
}

export default Link
