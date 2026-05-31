# 🏆 Países da Copa 2026

Uma SPA (Single Page Application) moderna e responsiva dedicada a apresentar informações detalhadas sobre os 48 países participantes da Copa do Mundo de 2026. ⚽🌍

## ✨ Funcionalidades

- 🌍 **Exploração Completa**: Visualize todos os 48 países participantes em uma grade organizada e visualmente atraente.
- 🌓 **Modo Escuro & Claro**: Suporte completo a temas com persistência no `localStorage` e detecção automática da preferência do sistema.
- 🇧🇷 **Internacionalização (i18n)**: Tradução dinâmica de nomes de continentes, idiomas e moedas para Português (pt-BR) utilizando a API nativa `Intl` do navegador.
- 📊 **Detalhes Técnicos**: Modal interativo com dados em tempo real consumidos da API, incluindo população, área, moedas e idiomas.
- ✨ **Experiência Fluida**: Animações de mola (`spring`) e transições suaves garantidas pelo Framer Motion.
- ♿ **Acessibilidade (a11y)**: Foco rigoroso em acessibilidade, incluindo gerenciamento de foco em modais, atributos ARIA e navegação nativa via teclado.
- 📱 **Design Responsivo**: Layout mobile-first que se adapta perfeitamente a qualquer tamanho de tela.

## 🛠️ Tecnologias Utilizadas

- **React 19**: Aproveitando as últimas melhorias da biblioteca para uma performance superior.
- **Tailwind CSS 4**: Estilização moderna utilizando a nova engine de alto desempenho e variáveis CSS nativas (`@theme`).
- **Vite**: Ferramenta de build ultra-rápida para um fluxo de desenvolvimento ágil.
- **Axios**: Cliente HTTP para consumo eficiente da [Rest Countries API](https://restcountries.com/).
- **Framer Motion**: Biblioteca poderosa para animações declarativas e interações de UI.
- **Lucide React**: Conjunto de ícones minimalistas e consistentes.
- **TypeScript**: Tipagem estrita em todo o projeto para evitar erros em tempo de execução e melhorar a DX.
- **Biome**: Toolchain moderna que substitui o ESLint/Prettier com performance até 100x superior.

## 🔧 Destaques Técnicos & Desafios

- **Precisão Geográfica**: A API Rest Countries retorna a bandeira do Reino Unido (UK) para países como Inglaterra e Escócia. Para garantir a fidelidade visual à Copa do Mundo, implementamos uma lógica de *override* integrando a **FlagCDN**, assegurando que cada federação exiba sua bandeira correta.
- **Traduções Nativas**: Em vez de bibliotecas pesadas de i18n, utilizamos a API nativa `Intl.DisplayNames` do navegador, garantindo um bundle final extremamente leve e performance superior na tradução dinâmica de dados da API.

## 🚀 Como Executar o Projeto

1.  **Clonar o repositório:**
    ```bash
    git clone [url-do-repositorio]
    ```
2.  **Instalar as dependências:**
    ```bash
    npm install
    ```
3.  **Executar em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  **Gerar a versão de produção:**
    ```bash
    npm run build
    ```

## 📂 Estrutura de Pastas

```text
src/
├── components/ # Componentes de UI (Header, Footer, Modais, Cards)
├── data/       # Lista estática dos 48 países e metadados
├── hooks/      # Lógica de negócio e fetch de dados (useCountries)
├── types/      # Centralização de interfaces TypeScript
├── utils/      # Utilitários de tradução e formatadores
└── index.css   # Configurações globais e variáveis do Tailwind 4
```

## 📝 Documentação Técnica

O código é inteiramente documentado com **JSDoc**, fornecendo explicações claras sobre:
- Lógica de merge entre dados locais e dados da API.
- Funcionamento dos utilitários de tradução nativa.
- Propriedades e comportamentos de cada componente de UI.

---
Desenvolvido com ❤️ por [Hugo Pereira](https://www.linkedin.com/in/hugopereiradev/) 🚀
