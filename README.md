# ⚖️ **Landing Page - Advocacia Previdenciária**
![lp-roberto](https://github.com/user-attachments/assets/e34c35e4-a8cc-4f8f-9ab4-bd8bd94ba624)

## 🎯 **Visão Geral**
Este projeto consiste em uma aplicação de Landing Page para um advogado especializado em advocacia previdenciária.
O objetivo é captar clientes e fortalecer a presença profissional no mercado jurídico, apresentando informações claras, confiáveis e organizadas sobre os serviços do escritório.


## 🔄 **Fluxo de Funcionamento**

### **1. Inicialização da Aplicação**
```bash
# 1. Clonar o repositório
git clone https://github.com/wilsonneander/lp-roberto-adv.git

# 2. Entrar na pasta do projeto
cd lp-roberto-adv

# 3. Instalar dependências
npm install

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

## 🛠️ **Tecnologias Utilizadas**

### **Core**
- **Framework**: Next.js 15
- **Runtime**: React 19 com TypeScript
- **Styling**: Tailwind CSS

### **UI/UX**
- **Componentes**: Radix UI (acessíveis)
- **Ícones**: Lucide React
- **Notificações**: Sonner
- **Animações**: Tailwind CSS Animate + tw-animate-css
- **Merge de classes**: tailwind-merge


### **Desenvolvimento**
- **TypeScript**: Tipagem estática
- **ESLint**: Linting de código
- **PostCSS**: Processamento CSS
- **Hot Reload**: Next.js dev server

## 📱 **Características da Interface**

### **Design System**
- **Cores**: Paleta do advogado (#111111, #0B1B33, #283D59)
- **Tipografia**: Titulos: Baskerville Old Face, Apoio: Raleway
- **Espaçamento**: Sistema utilitário do Tailwind CSS
- **Bordas**: Bordas: Radius padronizado em componentes (via classes Tailwind)
- **Sombras**: Uso de tailwindcss-animate e tw-animate-css para microinterações sutis

### **Responsividade**
- **Mobile First**: Estrutura otimizada para telas menores
- **Breakpoints**: sm, md, lg, xl, 2xl (Tailwind padrão)
- **Flexbox/Grid**: Construídos com Flexbox/Grid
- **Touch Friendly**: Elementos e botões otimizados para dispositivos móveis

## 🔧 **Scripts Disponíveis**

```json
{
  "dev": "next dev",        // Servidor de desenvolvimento
  "build": "next build",    // Build de produção
  "start": "next start",    // Servidor de produção
  "lint": "next lint"       // Linting de código
}
```

Este frontend está configurado como uma aplicação moderna, responsiva e acessível, seguindo as melhores práticas de desenvolvimento React/Next.js com foco em experiência do usuário e performance. 
