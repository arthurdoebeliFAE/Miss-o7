import type { Piada, Categoria } from "@shared/schema";

export interface IStorage {
  getAllPiadas(): Promise<Piada[]>;
  getPiadaAleatoria(): Promise<Piada>;
  getPiadaPorCategoria(categoria: string): Promise<Piada>;
  getCategorias(): Promise<Categoria[]>;
  getUptime(): number;
}

const piadas: Piada[] = [
  // Categoria: trocadilhos
  {
    id: 1,
    texto: "Por que o livro de matemática se suicidou? Porque tinha muitos problemas!",
    categoria: "trocadilhos"
  },
  {
    id: 2,
    texto: "O que o pato disse para a pata? Vem Quá!",
    categoria: "trocadilhos"
  },
  {
    id: 3,
    texto: "Por que a galinha atravessou a rua? Para provar que não era frango!",
    categoria: "trocadilhos"
  },
  {
    id: 4,
    texto: "Qual é o fim da picada? Quando o pernilongo vai embora!",
    categoria: "trocadilhos"
  },
  {
    id: 5,
    texto: "O que o tomate foi fazer no banco? Tirar extrato!",
    categoria: "trocadilhos"
  },
  
  // Categoria: programacao
  {
    id: 6,
    texto: "Por que programadores preferem o modo escuro? Porque a luz atrai bugs!",
    categoria: "programacao"
  },
  {
    id: 7,
    texto: "Como você conforta um JavaScript triste? Você console ele!",
    categoria: "programacao"
  },
  {
    id: 8,
    texto: "Há 10 tipos de pessoas no mundo: as que entendem binário e as que não entendem.",
    categoria: "programacao"
  },
  {
    id: 9,
    texto: "Por que o programador foi demitido? Porque não conseguia commit com o trabalho!",
    categoria: "programacao"
  },
  {
    id: 10,
    texto: "Um SQL entra em um bar, se aproxima de duas tabelas e pergunta: Posso fazer um JOIN com vocês?",
    categoria: "programacao"
  },
  
  // Categoria: infantil
  {
    id: 11,
    texto: "O que é um pontinho amarelo no meio do mar? Um Ruffles perdido!",
    categoria: "infantil"
  },
  {
    id: 12,
    texto: "O que é um pontinho verde no canto da sala? Uma ervilha de castigo!",
    categoria: "infantil"
  },
  {
    id: 13,
    texto: "Por que o elefante não usa computador? Porque tem medo do mouse!",
    categoria: "infantil"
  },
  {
    id: 14,
    texto: "Qual é o animal que sempre está pronto para a guerra? O javali (já vai ali)!",
    categoria: "infantil"
  },
  {
    id: 15,
    texto: "O que o zero disse para o oito? Que cinto maneiro!",
    categoria: "infantil"
  }
];

const categorias: Categoria[] = [
  {
    nome: "trocadilhos",
    descricao: "Piadas com jogos de palavras e duplo sentido"
  },
  {
    nome: "programacao",
    descricao: "Piadas sobre programação e tecnologia"
  },
  {
    nome: "infantil",
    descricao: "Piadas leves e divertidas para todas as idades"
  }
];

export class MemStorage implements IStorage {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  async getAllPiadas(): Promise<Piada[]> {
    return piadas;
  }

  async getPiadaAleatoria(): Promise<Piada> {
    const randomIndex = Math.floor(Math.random() * piadas.length);
    return piadas[randomIndex];
  }

  async getPiadaPorCategoria(categoria: string): Promise<Piada> {
    const piadasDaCategoria = piadas.filter(
      (piada) => piada.categoria.toLowerCase() === categoria.toLowerCase()
    );

    if (piadasDaCategoria.length === 0) {
      throw new Error(`Categoria "${categoria}" não encontrada`);
    }

    const randomIndex = Math.floor(Math.random() * piadasDaCategoria.length);
    return piadasDaCategoria[randomIndex];
  }

  async getCategorias(): Promise<Categoria[]> {
    return categorias;
  }

  getUptime(): number {
    return Math.floor((Date.now() - this.startTime) / 1000);
  }
}

export const storage = new MemStorage();
