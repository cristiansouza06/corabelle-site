# Corabelle Semijoias - Website

Site estático responsivo para captação de revendedoras autorizadas de semijoias de luxo.

## 📁 Estrutura de Arquivos

```
corabelle-download/
├── index.html              # Página principal (compilada)
├── assets/                 # CSS e JavaScript compilados
│   ├── index-[hash].css   # Estilos compilados
│   └── index-[hash].js    # JavaScript compilado
├── source-code/            # Código-fonte original
│   ├── src/
│   │   ├── pages/         # Componentes de página
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── App.tsx        # Componente principal
│   │   ├── main.tsx       # Ponto de entrada
│   │   └── index.css      # Estilos globais
│   ├── public/            # Arquivos estáticos
│   └── index.html         # Template HTML
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador
1. Abra o arquivo `index.html` em qualquer navegador web
2. O site funcionará completamente sem necessidade de servidor

### Opção 2: Servir Localmente (Recomendado)
Se você tem Node.js instalado:

```bash
# Instalar um servidor HTTP simples
npm install -g http-server

# Navegar até a pasta
cd corabelle-download

# Iniciar o servidor
http-server

# Abrir em http://localhost:8080
```

Ou com Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 🎨 Design

- **Tipografia**: Cormorant Garamond (títulos) + Lato (corpo)
- **Cores**: Bege (#fff4e3), Ouro (#daa46e), Preto (#1a1a1a)
- **Responsivo**: Otimizado para mobile, tablet e desktop
- **Animações**: Fade-in e parallax sutis

## 📱 Responsividade

- ✅ Mobile (320px - 640px)
- ✅ Tablet (641px - 1024px)
- ✅ Desktop (1025px+)

## 🔧 Editar o Código

Para editar o código-fonte:

1. Abra a pasta `source-code/` em seu editor favorito (VS Code, Sublime, etc)
2. Modifique os arquivos em `src/`
3. Para compilar as mudanças, você precisará de Node.js e pnpm:

```bash
cd /caminho/para/corabelle-site
pnpm install
pnpm build
```

## 📝 Seções do Site

1. **Hero Section**: Apresentação visual com call-to-action
2. **Coleções**: Showcase de produtos
3. **Benefícios**: 6 vantagens de ser revendedora
4. **Lifestyle**: Imagem inspiradora com CTA
5. **Processo**: 4 passos para começar
6. **CTA Final**: Chamada para inscrição
7. **Footer**: Informações de contato e links

## 📧 Formulário de Inscrição

O formulário modal coleta:
- Nome
- Email
- Telefone
- Mensagem/Interesse

**Nota**: Atualmente o formulário não envia dados. Para integrar com email:
- Use Formspree (https://formspree.io)
- Use Netlify Forms
- Configure um backend próprio

## 🌐 Hospedagem

Para publicar o site online:

### Opção 1: Manus (Recomendado)
Use a plataforma Manus para publicar diretamente

### Opção 2: Vercel
```bash
npm install -g vercel
vercel
```

### Opção 3: Netlify
Faça upload da pasta via https://app.netlify.com

### Opção 4: GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

## 📞 Contato

- Email: contato@corabelle.com.br
- Telefone: (11) 9999-9999

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**
