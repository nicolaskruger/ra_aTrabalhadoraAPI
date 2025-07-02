import { Static, Type } from '@sinclair/typebox'

export const create_user = Type.Object({
  name: Type.String(),
  mail: Type.String({ format: 'email' }),
})

export const user_reply = Type.Object({
  id: Type.String(),
  name: Type.String(),
  mail: Type.String()
})

export type create_user_type = Static<typeof create_user>

export type user_reply_type = Static<typeof user_reply>

