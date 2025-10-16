import { z } from "zod";

export const piadaSchema = z.object({
  id: z.number(),
  texto: z.string(),
  categoria: z.string(),
});

export type Piada = z.infer<typeof piadaSchema>;

export const categoriaSchema = z.object({
  nome: z.string(),
  descricao: z.string(),
});

export type Categoria = z.infer<typeof categoriaSchema>;

export const healthResponseSchema = z.object({
  status: z.string(),
  uptime: z.number(),
  timestamp: z.string(),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
