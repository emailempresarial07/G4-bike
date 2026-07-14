# 🚴 G4bikes Bike Shop — Site Oficial

Site completo, moderno e responsivo para a **G4bikes Bike Shop**, loja de bicicletas de montanha em São Paulo (nota 5,0 no Google · 289 avaliações).

## 📄 Páginas

| Página | Arquivo | Destaques |
|---|---|---|
| Início | `index.html` | Banner com carrossel automático, categorias, vitrine, oferta com contador, serviços, depoimentos, blog |
| Bicicletas / Acessórios | `bicicletas.html` | Filtros inteligentes (13 critérios) + 6 ordenações |
| Produto | `produto.html?id=...` | Galeria com zoom e 360°, specs, tabela de tamanhos, frete por CEP, avaliações, FAQ, relacionados |
| Comparador | `comparador.html` | Até 3 bikes lado a lado com melhores valores destacados |
| Serviços | `servicos.html` | 10 serviços da oficina + agendamento online via WhatsApp |
| Ofertas | `ofertas.html` | Contador regressivo, últimas unidades, cupom |
| Sobre | `sobre.html` | História, missão, diferenciais e números |
| Blog | `blog.html` | 9 pautas de conteúdo sobre ciclismo |
| Contato | `contato.html` | Formulário, mapa do Google, rota até a loja |

## 🎨 Identidade visual

Cores extraídas da logo oficial G4 Bikes: **G vermelho** (`#e8392c`), **4 azul royal** (`#2438cf`), **Bikes laranja** (`#f28a2e`) e o slogan *"Você pode confiar"*. A logo é um SVG embutido (cabeçalho, rodapé e favicon) — sem depender de arquivos de imagem.

## ⚙️ Recursos

- **Compra via WhatsApp**: o site é a porta de entrada — "Comprar agora" e "Finalizar pedido" abrem o WhatsApp da loja (11 94702-4219) com o pedido pronto (produto, cor, tamanho, quantidades e total)
- **Carrinho, favoritos e comparador** persistentes (localStorage)
- **Assistente virtual** de 8 perguntas com recomendações personalizadas
- **Busca inteligente** no cabeçalho
- **Tema claro/escuro** com preferência salva
- Menu lateral no mobile, header fixo transparente, animações de rolagem, parallax
- Botão flutuante de WhatsApp, aviso de cookies, área do cliente, newsletter com cupom
- SEO: meta tags, Open Graph e dados estruturados (Schema.org BikeStore)
- Acessibilidade: skip link, foco visível, ARIA, `prefers-reduced-motion`
- 100% estático — sem dependências, sem build. Basta abrir `index.html` ou servir a pasta.

## 🏪 Dados da loja

- **G4bikes Bike Shop** — Av. Primavera de Caiena, 568 - Parque Santa Madalena, São Paulo - SP, 03981-010
- ☎️ / WhatsApp: (11) 94702-4219 · Seg–Sex 09:00–18:00 · Sáb 09:00–14:00
- Instagram: @g4bikes

Para personalizar produtos, serviços, depoimentos e dados da loja, edite **`js/data.js`**.

## ▶️ Como rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```
