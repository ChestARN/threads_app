import * as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().nonempty().min(3, {message: 'Mínimo de três caracteres'}),
    accountId: z.string(),
})

export const CommentValidation = z.object({
    thread: z.string().nonempty().min(3, {message: 'Mínimo de três caracteres'}),
})