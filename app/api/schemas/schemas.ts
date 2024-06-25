import { z } from 'zod'

export const creditSchema = z.object({
  email: z.string().email(),
  credits: z.number().nonnegative(),
})

export type Credit = z.infer<typeof creditSchema>
