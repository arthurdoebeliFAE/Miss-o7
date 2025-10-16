import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { Piada, Categoria, HealthResponse } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // GET /api/piada - Retorna uma piada aleatória
  app.get("/api/piada", async (req, res) => {
    try {
      const piada: Piada = await storage.getPiadaAleatoria();
      res.json(piada);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao buscar piada",
        message: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  });

  // GET /api/piada/categoria/:categoria - Retorna uma piada da categoria especificada
  app.get("/api/piada/categoria/:categoria", async (req, res) => {
    try {
      const { categoria } = req.params;
      
      if (!categoria) {
        return res.status(400).json({
          error: "Categoria não especificada",
          message: "Por favor, forneça uma categoria válida"
        });
      }

      const piada: Piada = await storage.getPiadaPorCategoria(categoria);
      res.json(piada);
    } catch (error) {
      if (error instanceof Error && error.message.includes("não encontrada")) {
        return res.status(404).json({
          error: "Categoria não encontrada",
          message: error.message,
          categoriasDisponiveis: (await storage.getCategorias()).map(c => c.nome)
        });
      }
      
      res.status(500).json({
        error: "Erro ao buscar piada",
        message: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  });

  // GET /api/categorias - Lista todas as categorias disponíveis
  app.get("/api/categorias", async (req, res) => {
    try {
      const categorias: Categoria[] = await storage.getCategorias();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao listar categorias",
        message: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  });

  // GET /api/health - Verifica o status do servidor
  app.get("/api/health", async (req, res) => {
    try {
      const uptime = storage.getUptime();
      const healthResponse: HealthResponse = {
        status: "online",
        uptime: uptime,
        timestamp: new Date().toISOString()
      };
      res.json(healthResponse);
    } catch (error) {
      res.status(500).json({
        status: "error",
        error: "Erro ao verificar status",
        message: error instanceof Error ? error.message : "Erro desconhecido"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
