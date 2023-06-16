const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "No contexto do HTML, a sintaxe correta para um comentário, delimitando um trecho que NÃO deve ser exibido pelo browser, é:",
        options: ["<* Texto do comentário *>", "<--Texto do comentário --/>", "<!--Texto do comentário -->", "<!--Texto do comentário *>"],
        answer: "<!--Texto do comentário -->",
      },
      {
        question: "Qual elemento define o conteúdo de um documento HTML?",
        options: ["body", "head", "style", "meta"],
        answer: "body",
      },
      {
        question: "Qual tecnologia permite que dados de aplicações e páginas web possam ser armazenados localmente?",
        options: ["JSON", "Local Storage", "Web Storage", "Local Web"],
        answer: "Local Storage",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: "A propriedade CSS que pode ser utilizada para tornar um texto negrito é:",
        options: ["text-decoration: bold", "font-weight: bold", "boldness: true", "font-style: bold"],
        answer: "font-weight: bold",
      },
      {
        question: "Para definir ou mudar a ordem de sobreposição dos elementos deve-se utilizar a propriedade CSS:",
        options: ["position", "x-order", "flex-position", "z-index"],
        answer: "z-index",
      },
      {
        question: "No contexto do uso de CSS para aplicar estilos a elementos HTML numa página web, o seletor universal, que referencia todos os elementos, é identificado pelo símbolo:",
        options: ["*", "@", "#", "&"],
        answer: "*",
      },
      {
        question: "É correto afirmar que, em CSS3, o caractere '#' é:",
        options: ["Um seletor de elemento pela classe", "Indicador comentários de linha", "Um seletor de elemento pelo tipo", "Um seletor de elemento pelo ID"],
        answer: "Um seletor de elemento pelo ID",
      },
      {
        question: "Qual é a propriedade do CSS que estabelece o raio da borda inferior esquerda do box?",
        options: ["border-top-left-radius", "border-bottom-right-radius", "border-bottom-left-radius", "border-top-right-radius"],
        answer: "border-bottom-left-radius",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question: "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question: "Qual o tipo de dado de um operando em formato de string retorna se o valor verificado é uma String, Number, Boolean, Null, Undefined, entre outros?",
        options: ["typeoper", "datatype", "typeof", "formatype"],
        answer: "typeof",
      },
      {
        question: "Qual a função que permite percorrer uma coleção de itens de um array para fazer alguma operação de transformação ou alteração nos itens?",
        options: ["loop", "map", "array", "list"],
        answer: "map",
      },
      {
        question: "Qual é a função que é executada somente após a execução de outra, onde é passada como argumento de uma função inicial e será executada em sequência?",
        options: ["square", "closure", "arrow", "callback "],
        answer: "callback ",
      },
    ],
  },
];

export default data;
