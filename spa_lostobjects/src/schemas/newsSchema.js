import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "El título no puede ser vacio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "El título no puede tenerr apenas espacios",
    }),
  banner: z
    .string()
    .nonempty({ message: "El link del banner no puede ser vacio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "El link del banner no puede tener apenas espaços",
    }),
  text: z
    .string()
    .nonempty({ message: "El texto no puede ser vacio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "El texto no puede tener apenas espacios",
    }),
});
