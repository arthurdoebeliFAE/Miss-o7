import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2, Sparkles, Github, Activity, Code2, Laugh } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Piada, Categoria, HealthResponse } from "@shared/schema";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentJoke, setCurrentJoke] = useState<Piada | null>(null);
  const { toast } = useToast();

  const { data: health } = useQuery<HealthResponse>({
    queryKey: ["/api/health"],
    refetchInterval: 30000,
  });

  const { data: categorias } = useQuery<Categoria[]>({
    queryKey: ["/api/categorias"],
  });

  const {
    data: piada,
    isLoading,
    refetch,
  } = useQuery<Piada>({
    queryKey: selectedCategory ? ["/api/piada/categoria", selectedCategory] : ["/api/piada"],
    enabled: false,
  });

  const handleGetJoke = async () => {
    try {
      const result = await refetch();
      if (result.data) {
        setCurrentJoke(result.data);
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível obter uma piada. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Laugh className="w-8 h-8 text-primary" />
              <h1 className="text-xl font-bold text-foreground">API de Piadas</h1>
            </div>
            <div className="flex items-center gap-4">
              {health && (
                <div className="flex items-center gap-2" data-testid="health-status">
                  <Activity className="w-4 h-4 text-status-online" />
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    Online
                  </span>
                </div>
              )}
              <Button
                variant="outline"
                size="sm"
                asChild
                data-testid="link-github"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Microsserviço Educacional de Piadas
            </h2>
            <p className="text-lg text-muted-foreground">
              Aprenda conceitos fundamentais de backend: servidores, endpoints e APIs REST
              através de uma aplicação prática e divertida.
            </p>
            
            {/* Quick Start Code */}
            <Card className="mt-8 text-left">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-mono">Quick Start</CardTitle>
                  <Badge variant="secondary" className="font-mono text-xs">
                    JavaScript
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono text-foreground">
{`// Obter uma piada aleatória
fetch('/api/piada')
  .then(res => res.json())
  .then(data => console.log(data.texto));

// Filtrar por categoria
fetch('/api/piada/categoria/programacao')
  .then(res => res.json())
  .then(data => console.log(data));`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Sidebar - API Documentation */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Documentação da API
                  </CardTitle>
                  <CardDescription>
                    Endpoints disponíveis para consumo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Endpoint 1 */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-status-online text-white font-medium">
                        GET
                      </Badge>
                      <code className="text-sm font-mono text-foreground">
                        /api/piada
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Retorna uma piada aleatória de qualquer categoria
                    </p>
                  </div>

                  <Separator />

                  {/* Endpoint 2 */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-status-online text-white font-medium">
                        GET
                      </Badge>
                      <code className="text-sm font-mono text-foreground break-all">
                        /api/piada/categoria/:categoria
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Retorna uma piada aleatória da categoria especificada
                    </p>
                  </div>

                  <Separator />

                  {/* Endpoint 3 */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-status-online text-white font-medium">
                        GET
                      </Badge>
                      <code className="text-sm font-mono text-foreground">
                        /api/categorias
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Lista todas as categorias disponíveis
                    </p>
                  </div>

                  <Separator />

                  {/* Endpoint 4 */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-status-online text-white font-medium">
                        GET
                      </Badge>
                      <code className="text-sm font-mono text-foreground">
                        /api/health
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Verifica o status e uptime do servidor
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Categories Filter */}
              {categorias && categorias.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Filtrar por Categoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant={selectedCategory === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(null)}
                        data-testid="button-category-all"
                      >
                        Todas
                      </Button>
                      {categorias.map((cat) => (
                        <Button
                          key={cat.nome}
                          variant={selectedCategory === cat.nome ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(cat.nome)}
                          data-testid={`button-category-${cat.nome}`}
                        >
                          {cat.nome.charAt(0).toUpperCase() + cat.nome.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Main Panel - Testing Interface */}
            <div className="lg:col-span-3 space-y-6">
              {/* Testing Panel */}
              <Card>
                <CardHeader>
                  <CardTitle>Testar API</CardTitle>
                  <CardDescription>
                    Clique no botão abaixo para obter uma piada{" "}
                    {selectedCategory
                      ? `da categoria "${selectedCategory}"`
                      : "aleatória"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button
                    onClick={handleGetJoke}
                    disabled={isLoading}
                    size="lg"
                    className="w-full sm:w-auto"
                    data-testid="button-get-joke"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Buscando...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Obter Piada
                      </>
                    )}
                  </Button>

                  {/* Joke Display */}
                  {currentJoke && (
                    <Card className="border-2 border-primary/20">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <p className="text-lg text-foreground leading-relaxed" data-testid="text-joke">
                              {currentJoke.texto}
                            </p>
                            <Laugh className="w-6 h-6 text-primary flex-shrink-0" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" data-testid={`badge-category-${currentJoke.categoria}`}>
                              {currentJoke.categoria}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              ID: {currentJoke.id}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* JSON Response */}
                  {currentJoke && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-foreground">
                          Resposta JSON
                        </h3>
                        <Badge variant="outline" className="font-mono text-xs">
                          200 OK
                        </Badge>
                      </div>
                      <Card className="bg-muted">
                        <CardContent className="pt-6">
                          <pre className="overflow-x-auto">
                            <code className="text-sm font-mono text-foreground" data-testid="code-json-response">
                              {JSON.stringify(currentJoke, null, 2)}
                            </code>
                          </pre>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Empty State */}
                  {!currentJoke && !isLoading && (
                    <div className="text-center py-12 space-y-3">
                      <Code2 className="w-12 h-12 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Clique no botão acima para obter sua primeira piada
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Servidor vs Endpoint: Qual a diferença?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🖥️ Servidor</h4>
                  <p className="text-sm">
                    O servidor é o programa que está <strong>sempre rodando</strong>,
                    aguardando e processando requisições HTTP. No nosso caso, é a
                    aplicação Express.js configurada para escutar na porta 5000.
                    Ele é a "casa" onde todos os endpoints vivem.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">📍 Endpoint</h4>
                  <p className="text-sm">
                    Um endpoint é uma <strong>rota específica</strong> dentro do
                    servidor que executa uma ação particular. Por exemplo,{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono text-xs">
                      GET /api/piada
                    </code>{" "}
                    é um endpoint que retorna uma piada. Cada endpoint tem seu
                    próprio método HTTP (GET, POST, etc.) e caminho único.
                  </p>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm italic">
                    💡 <strong>Analogia:</strong> Se o servidor é um prédio, os
                    endpoints são os apartamentos individuais dentro dele. Cada
                    apartamento (endpoint) tem um número/endereço específico e
                    uma função própria.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>Projeto educacional - Microsserviço Backend com Node.js + Express</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
