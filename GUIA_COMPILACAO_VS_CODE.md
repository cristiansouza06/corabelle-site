# 🔧 Guia Completo: Compilar Projeto Corabelle no Visual Studio Code

## PASSO 1: Instalar Pré-requisitos

### 1.1 Instalar Node.js
1. Acesse https://nodejs.org
2. Baixe a versão **LTS** (Long Term Support)
3. Execute o instalador e siga os passos
4. **Importante**: Marque a opção "Add to PATH"
5. Reinicie o computador após a instalação

**Verificar se foi instalado corretamente:**
- Abra o Prompt de Comando (Windows) ou Terminal (Mac/Linux)
- Digite: `node --version`
- Deve aparecer algo como: `v20.10.0`

### 1.2 Instalar Visual Studio Code
1. Acesse https://code.visualstudio.com
2. Baixe e instale
3. Abra o VS Code

---

## PASSO 2: Preparar o Projeto

### 2.1 Extrair o ZIP
1. Localize o arquivo `corabelle-website-final.zip`
2. Clique com botão direito → **Extrair Tudo**
3. Escolha uma pasta (ex: `C:\Users\SeuNome\Desktop\corabelle`)
4. Aguarde a extração

### 2.2 Abrir no VS Code
1. Abra o Visual Studio Code
2. Clique em **File** → **Open Folder**
3. Navegue até a pasta extraída
4. Selecione a pasta `corabelle-download`
5. Clique em **Select Folder**

**Resultado esperado:**
- Você verá a estrutura de pastas no lado esquerdo:
  ```
  corabelle-download
  ├── index.html
  ├── assets/
  ├── source-code/
  ├── README.md
  └── INSTRUCOES.txt
  ```

---

## PASSO 3: Abrir o Terminal no VS Code

### 3.1 Abrir Terminal Integrado
1. No VS Code, pressione **Ctrl + `** (backtick/crase)
   - Ou clique em **Terminal** → **New Terminal**
2. Um terminal aparecerá na parte inferior da tela

**Você verá algo como:**
```
PS C:\Users\SeuNome\Desktop\corabelle\corabelle-download>
```

### 3.2 Navegar até a Pasta do Projeto
No terminal, digite:
```bash
cd source-code
```

Pressione **Enter**

**Resultado:**
```
PS C:\Users\SeuNome\Desktop\corabelle\corabelle-download\source-code>
```

---

## PASSO 4: Instalar Dependências

### 4.1 Instalar pnpm (Gerenciador de Pacotes)
No terminal, digite:
```bash
npm install -g pnpm
```

Pressione **Enter** e aguarde (pode levar 1-2 minutos)

**Verificar se foi instalado:**
```bash
pnpm --version
```

Deve aparecer um número de versão (ex: `8.15.0`)

### 4.2 Instalar Dependências do Projeto
No terminal, digite:
```bash
pnpm install
```

Pressione **Enter** e aguarde (pode levar 3-5 minutos)

**Você verá:**
- Muitas linhas de instalação
- No final: `added XXX packages in Xs`

**Importante:** Não feche o terminal durante a instalação!

---

## PASSO 5: Compilar o Projeto

### 5.1 Executar o Build
No terminal, digite:
```bash
pnpm build
```

Pressione **Enter** e aguarde (pode levar 1-2 minutos)

**Você verá algo como:**
```
> vite build && esbuild server/index.ts...
vite v7.1.9 building for production...
transforming...
✓ 1622 modules transformed.
rendering chunks...
computing gzip size...
../dist/public/index.html                 367.89 kB │ gzip: 105.65 kB
../dist/public/assets/index-7KeCRRcP.css  118.73 kB │ gzip:  18.47 kB
../dist/public/assets/index-CFlHEQoL.js   557.71 kB │ gzip: 164.01 kB
✓ built in 4.23s
```

**Sucesso!** ✓ O projeto foi compilado!

---

## PASSO 6: Encontrar os Arquivos Compilados

### 6.1 Localizar a Pasta de Saída
1. No VS Code, abra o **Explorer** (lado esquerdo)
2. Procure pela pasta `dist`
3. Dentro dela, abra `public`

**Você verá:**
```
dist/
└── public/
    ├── index.html (novo arquivo compilado)
    ├── assets/
    │   ├── index-[hash].css
    │   └── index-[hash].js
    └── ...
```

### 6.2 Usar os Arquivos Compilados
1. Copie todos os arquivos da pasta `dist/public`
2. Cole em uma nova pasta (ex: `corabelle-site-final`)
3. Abra o `index.html` em um navegador
4. Seu site está pronto!

---

## PASSO 7: Editar e Recompilar

### 7.1 Fazer Edições
1. Abra o arquivo que quer editar:
   - **Para mudar textos**: `source-code/src/pages/Home.tsx`
   - **Para mudar cores**: `source-code/src/index.css`
   - **Para mudar imagens**: Procure por `backgroundImage:` em Home.tsx

2. Faça suas edições
3. Salve o arquivo (**Ctrl + S**)

### 7.2 Recompilar
1. Volte ao terminal
2. Digite:
```bash
pnpm build
```

3. Pressione **Enter**
4. Aguarde a compilação
5. Os arquivos atualizados estarão em `dist/public`

---

## 🚀 MODO DESENVOLVIMENTO (Opcional)

Se você quer ver as mudanças em tempo real enquanto edita:

### 7.3 Iniciar Servidor de Desenvolvimento
No terminal, digite:
```bash
pnpm dev
```

Pressione **Enter**

**Você verá:**
```
➜  Local:   http://localhost:5173/
➜  Network: http://169.254.0.21:5173/
```

### 7.4 Abrir no Navegador
1. Copie a URL: `http://localhost:5173/`
2. Cole no navegador
3. O site abrirá
4. **Agora, toda vez que você salvar um arquivo (Ctrl + S), o site atualiza automaticamente!**

### 7.5 Parar o Servidor
No terminal, pressione **Ctrl + C**

---

## ❓ TROUBLESHOOTING (Soluções de Problemas)

### Problema: "pnpm: comando não encontrado"
**Solução:**
1. Reinstale o Node.js
2. Marque a opção "Add to PATH"
3. Reinicie o computador

### Problema: "Permission denied" no Mac/Linux
**Solução:**
```bash
sudo pnpm install
sudo pnpm build
```

### Problema: Porta 5173 já está em uso
**Solução:**
1. Feche outros navegadores/aplicações
2. Ou use outra porta:
```bash
pnpm dev -- --port 3000
```

### Problema: Muitos erros de compilação
**Solução:**
1. Delete a pasta `node_modules`:
```bash
rm -r node_modules
```

2. Reinstale:
```bash
pnpm install
pnpm build
```

---

## 📝 EXEMPLO PRÁTICO: Mudar a Cor do Ouro

### Passo 1: Abrir o arquivo CSS
1. No VS Code, clique em `source-code/src/index.css`
2. Pressione **Ctrl + F** para abrir a busca
3. Digite: `--primary: #daa46e`
4. Encontrará a linha com a cor ouro

### Passo 2: Mudar a Cor
1. Selecione o código de cor: `#daa46e`
2. Substitua por uma nova cor, ex: `#ff6b6b` (vermelho)
3. Salve (**Ctrl + S**)

### Passo 3: Compilar
1. No terminal, digite: `pnpm build`
2. Aguarde a compilação
3. Abra o novo `index.html` em `dist/public`
4. A cor mudou! ✓

---

## 📚 REFERÊNCIA RÁPIDA DE COMANDOS

```bash
# Instalar dependências
pnpm install

# Compilar para produção
pnpm build

# Iniciar servidor de desenvolvimento
pnpm dev

# Verificar erros de TypeScript
pnpm check

# Formatar código
pnpm format
```

---

## 🎯 PRÓXIMOS PASSOS

Após compilar com sucesso:

1. **Publicar Online**: Use Vercel, Netlify ou Manus
2. **Integrar Email**: Configure Formspree ou Netlify Forms
3. **Adicionar Mais Seções**: Edite Home.tsx e recompile
4. **Customizar Cores**: Edite index.css e recompile

---

## 📞 PRECISA DE AJUDA?

Se tiver problemas:
1. Verifique se Node.js está instalado: `node --version`
2. Verifique se pnpm está instalado: `pnpm --version`
3. Tente deletar `node_modules` e reinstalar
4. Consulte o README.md para mais informações

---

**Desenvolvido com ❤️ - Corabelle Semijoias**
