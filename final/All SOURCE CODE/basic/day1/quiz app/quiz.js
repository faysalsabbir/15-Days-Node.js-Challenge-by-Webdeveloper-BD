const myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];
const answeres = []

process.stdout.write(myQuestions[0].question + '\n')

process.stdin.on('data', data => {

    if(myQuestions[answeres.length].correctAnswer == data.toString().trim()) {
        answeres.push('Correct')
    } else {
        answeres.push('Wrong')
    }
    if (answeres.length < myQuestions.length) {
        process.stdout.write(myQuestions[answeres.length].question + '\n')
    } else {
        process.exit()
    }
})

process.on('exit', () => {

    process.stdout.write('Your quiz result is \n')
    let correct = 0
    let wrong = 0

    answeres.forEach((result, index) => {
        result == 'Correct' ? correct += 1 : wrong += 1
    })

    process.stdout.write(`Correct : ${correct} \n Wrong : ${wrong}\n`)
})