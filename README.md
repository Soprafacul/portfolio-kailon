# Portfólio de José Kailon Teixeira da Silva

Curso: Análise e Desenvolvimento de Sistemas. Turma: não informada.
Projeto acadêmico em HTML, CSS e JavaScript, desenvolvido com assistência de IA. Revise o código e personalize os textos antes da apresentação.

## Abrir
Extraia o ZIP e abra `site/index.html`. Para testar a persistência entre páginas de forma consistente, use um servidor HTTP local, por exemplo a extensão Live Server do seu editor ou `python -m http.server 8000` dentro da pasta do site e acesse http://localhost:8000. O comportamento de localStorage em URLs file:// varia por navegador.

## Conteúdo e requisitos
- index.html: apresentação e avatar SVG com texto alternativo.
- curriculo.html: formação, listas e tabela com caption e cabeçalhos.
- formulario.html: text, email, tel, date, select, textarea, radio e checkbox; labels, required, minlength e mensagens visíveis.
- multimidia.html: áudio WAV local com controls e iframe local funcional. Áudio sintetizado para demonstração, sem fala; não é depoimento pessoal.
- graficos.html: canvas desenhado via JS e SVG estilizado pelo CSS. Controle de quantidade de pontos.
- css/estilos.css: toda a estilização, Flexbox no menu e cartões, Grid no currículo e demais páginas; media queries min-width em 768 e 1024 px.
- js/scripts.js: gráficos, tema e validação. Sem framework, bibliotecas ou serviço externo.

## Tema e privacidade
O botão de tema aparece nas cinco páginas. A chave `portfolio-jk-tema` guarda somente `light` ou `dark` no localStorage do navegador. Alterne, recarregue e navegue entre as páginas: a preferência deve permanecer. O armazenamento é por origem. Falhas de armazenamento são tratadas sem interromper o site.
O formulário não envia e-mails nem armazena dados. A mensagem de sucesso informa explicitamente que se trata de validação demonstrativa. Não há backend.

## Histórico de desenvolvimento
As etapas foram implementadas e registradas em commits reais nesta sessão, sem datas retroativas. O pacote inclui `historico.patch`, exportado do Git, para importar os commits em um repositório novo. A autoria técnica é identificada como assistente; configure sua própria identidade para suas alterações posteriores. O patch preserva commits de conteúdo, não o nó de merge da branch original.

## Criar o repositório preservando os commits
Instale Git se necessário. Em uma pasta NOVA E VAZIA, execute os comandos abaixo. Substitua os campos entre aspas com seus dados reais. Não execute git am sobre a pasta site já preenchida.

    git init -b main
    git config user.name "SEU NOME"
    git config user.email "SEU EMAIL DO GITHUB"
    git am "/caminho/para/historico.patch"

No Windows use o caminho real do arquivo extraído. Após importar, o conteúdo estará na raiz dessa pasta nova. Confirme `git log --oneline` e `git status`. Revise e personalize o projeto; cada mudança deve receber um commit descritivo. Não invente commits de trabalhos anteriores.

## Publicação no GitHub Pages
1. Na sua conta GitHub, crie um repositório vazio, sem README automático. Para avaliação sem login, use um repositório público, após revisar os dados pessoais do site.
2. Na pasta importada, conecte e envie (substitua USUARIO e REPOSITORIO):

    git remote add origin https://github.com/USUARIO/REPOSITORIO.git
    git push -u origin main

3. No repositório, abra Settings > Pages. Selecione publicação por branch, `main` e `/ (root)`, e salve. A interface pode mudar.
4. Aguarde o endereço fornecido pelo GitHub. Confirme HTTPS e abra as CINCO páginas em janela anônima.
5. Depois das correções e testes finais, marque a entrega:

    git tag -a cp3-entrega -m "Entrega CP3: Git, deploy e JavaScript"
    git push origin main
    git push origin cp3-entrega

Se não importar os patches, é possível iniciar Git na pasta site, mas isso NÃO transporta o histórico existente. Prefira a importação.

## Roteiro de testes antes de entregar
- Abra as cinco páginas em 320, 768 e 1024 px; confirme ausência de rolagem horizontal.
- Use Tab e Enter; confira foco visível, menu e botão de tema.
- Troque o tema, recarregue e navegue; verifique a chave no DevTools > Application > Local Storage.
- Envie formulário vazio; depois e-mail inválido; depois campos válidos e caixa marcada. Confirme o feedback visível e que não há promessa de envio real.
- Reproduza o áudio, abra o iframe e mova o controle do canvas.
- Valide todos os HTMLs no W3C Markup Validator e css/estilos.css no W3C CSS Validator.
- Verifique links públicos em janela anônima. O repositório e o site devem refletir a mesma versão.

## Situação desta preparação
Código e histórico preparados. Turma ainda não informada. Experiências pessoais não fornecidas não foram inventadas. Publicação GitHub/Pages, validação oficial W3C e testes visuais em navegador ainda precisam ser concluídos. Não há links de entrega públicos criados. A tag final deve ser criada após essa conferência.

## Entrega CP3
Até 10/11/2026: enviar no Blackboard o link do repositório com a tag cp3-entrega e o link do site publicado. Este ZIP é o pacote de desenvolvimento, não substitui os dois links exigidos. Não inclua .git em ZIPs de entrega.
