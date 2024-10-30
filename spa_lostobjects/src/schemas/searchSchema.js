import { z } from "zod";

export const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "La búsqueda no puede ser vacia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "La búsqueda no tener apenas espacios",
    }),
});
