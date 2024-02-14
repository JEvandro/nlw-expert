const questions = [
    {
      question: "Qual é a forma correta de declarar uma variável em JavaScript?",
      answer: [
        "var myVar;",
        "variable myVar;",
        "let myVar;",
      ],
      correct: 2
    },
    {
      question: "Qual é o operador de igualdade estrita em JavaScript?",
      answer: [
        "==",
        "===",
        "=",
      ],
      correct: 1
    },
    {
      question: "Qual é a função usada para imprimir algo no console em JavaScript?",
      answer: [
        "console.log()",
        "print()",
        "log()",
      ],
      correct: 0
    },
    {
      question: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      answer: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correct: 0
    },
    {
      question: "Qual é a função que retorna o tamanho de uma string em JavaScript?",
      answer: [
        "length()",
        "count()",
        "length",
      ],
      correct: 2
    },
    {
      question: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      answer: [
        "for loop",
        "if...else statement",
        "switch statement",
      ],
      correct: 1
    },
    {
      question: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
      answer: [
        "7",
        "52",
        "TypeError",
      ],
      correct: 1
    },
    {
      question: "Qual é a maneira correta de acessar o elemento de índice 2 em um array?",
      answer: [
        "array[2]",
        "array(2)",
        "array{2}",
      ],
      correct: 0
    },
    {
      question: "Qual método de array é usado para adicionar um elemento ao final de um array?",
      answer: [
        "push()",
        "append()",
        "add()",
      ],
      correct: 0
    },
    {
      question: "Qual é o operador de incremento em JavaScript?",
      answer: [
        "++",
        "+=",
        "inc()",
      ],
      correct: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corrects = new Set()
  const numQuestion = questions.length
  const showRate = document.querySelector('#acertos span')
  
  for(const item of questions){
    const quiz_item = template.content.cloneNode(true)
    quiz_item.querySelector('h3').textContent = item.question
  
    for(let answer of item.answer){
      const dt = quiz_item.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = answer
      dt.querySelector('input').setAttribute('name', 'pergunta - '+ questions.indexOf(item))
      dt.querySelector('input').value = item.answer.indexOf(answer)
      dt.querySelector('input').onchange = (event) => {
        const iscorrect = event.target.value == item.correct
  
        corrects.delete(item)
        
        if(iscorrect){
          corrects.add(item)
        }
        
        showRate.textContent = corrects.size + ' de ' + numQuestion
  
      }
  
  
      quiz_item.querySelector('dl').appendChild(dt)
    }
  
    quiz_item.querySelector('dl dt').remove()
  
    quiz.appendChild(quiz_item)
  }