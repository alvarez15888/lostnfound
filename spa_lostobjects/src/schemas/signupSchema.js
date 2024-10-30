import { z } from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nombre debe tener mínimo 3 caracteres" })
      .transform((name) =>
        name
          .trim()
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
      ),
    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
    password: z.string().min(6, "La clave debe tener mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La clave debe tener mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Claves no coicindem",
    path: ["confirmPassword"],
  });
