import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: "La clave debe tener mínimo 6 caracteres" }),
});
