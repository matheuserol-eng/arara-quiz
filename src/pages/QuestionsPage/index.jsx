import { XCircle } from "lucide-react"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

const QUESTIONS = [
    {
        id: 1,
        question: "Em que ano foi inaugurado o Museu Ferroviário de Araraquara?",
        alternatives: ["1950", "1968", "1975", "1982"],
        answers: 1,
        theme: { name: "Museu ferroviário" },
        points: 10,
        explanation: "O Museu Ferroviário foi inaugurado em 1968, preservando a memória da ferrovia na região.",
    },
    {
        id: 2,
        question: "Qual ferrovia foi fundamental para o desenvolvimento de Araraquara?",
        alternatives: [
            "Estrada de Ferro Sorocabana",
            "Estrada de Ferro Paulista",
            "Estrada de Ferro Araraquarense",
            "Estrada de Ferro Santos-Jundiaí",
        ],
        answer: 2,
        theme: { name: "Museu ferroviário" },
        points: 20,
        explanation: "A Estrada de Ferro Araraquarense foi crucial para o desenvolvimento econômico da cidade.",
    },
    {
        id: 3,
        question: "O que o museu preserva principalmente?",
        alternatives: ["Locomotivas antigas", "Documentos históricos", "Uniformes ferroviários", "Todas as alternativas"],
        answer: 3,
        theme: { name: "Museu ferroviário" },
        points: 30,
        explanation:
            "O museu preserva locomotivas, documentos, uniformes e diversos objetos relacionados à história ferroviária.",
    }
]

export const QuestionsPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [quizComplete, setQuizComplete] = useState(false)
    const [totalPoints, setTotalPoints] = useState(0)

    const question = QUESTIONS[currentQuestion]
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100

    console.log({selectedAnswer})

    const handleAnswerSelect = (answerIndex) => {
        if (showFeedback) return
        setSelectedAnswer(answerIndex)
    }

    const handleSubmitAnswer = () => {
        const correct = selectedAnswer === question.correctAnswer
        setIsCorrect(correct)
        setShowFeedback(true)

        if (correct) {
            const points = question.points
            setTotalPoints(totalPoints + points)
        }
    }

    const handleNextQuestion = () => {
        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setShowFeedback(false)
            setIsCorrect(false)
        } else {
            setQuizComplete(true)
        }
    }

    const getButtonClassName = (index) => {
        const isSelected = selectedAnswer === index
        const isCorrectAnswer = index === question.answer

        let baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all"

        if (showFeedback) {
            baseClasses += " cursor-not-allowed"
            if (isCorrectAnswer) {
                return `${baseClasses} border-green-500 bg-green-50`
            }
            if (isSelected && !isCorrectAnswer) {
                return `${baseClasses} border-red-500 bg-red-50`
            }
            return `${baseClasses} border`
        }

        baseClasses += " cursor-pointer"
        if (isSelected) {
            return `${baseClasses} border-purple-500 bg-purple-500/5`
        }
        return `${baseClasses} border hover:border-purple-500/50`
    }

    return (
        <div className="bg-[url('./araraquaraantiga.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">

            <main className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-neutral-50">
                            {/* <span>{theme.title}</span> */}
                            <span>{question.theme.name}</span>
                            <span>
                                Questão {currentQuestion + 1} de {QUESTIONS.length}
                            </span>
                        </div>
                        {/* <Progress value={progress} className="h-2" /> */}
                    </div>

                    <div>
                        <header>
                            <h3 className="text-xl text-balance">{question.question}</h3>
                            <p className="text-base font-medium text-purple-500">
                                Vale {question.points} pontos
                            </p>
                        </header>

                        <div className="space-y-4">

                            <div className="space-y-2">
                                {question.alternatives.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(index)}
                                        disabled={showFeedback}
                                        className={getButtonClassName(index)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{option}</span>
                                            {showFeedback && index === question.answer && (
                                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                                            )}
                                            {showFeedback && selectedAnswer === index && index !== question.answer && (
                                                <XCircle className="h-5 w-5 text-red-600" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {showFeedback && (
                                <div
                                    className={`p-4 rounded-lg ${isCorrect
                                        ? "bg-green-50 dark:bg-green-950 border border-green-200"
                                        : "bg-red-50 dark:bg-red-950 border border-red-200"
                                        }`}
                                >
                                    <div className="flex items-start gap-2 mb-2">
                                        {isCorrect ? (
                                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                                        ) : (
                                            <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                                        )}
                                        <div>
                                            <p className="font-semibold">{isCorrect ? "Correto!" : "Incorreto"}</p>
                                            {isCorrect && (
                                                <p className="text-sm text-green-700 dark:text-green-300">+{question.points} pontos</p>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral-50">{question.explanation}</p>
                                </div>
                            )}

                            {!showFeedback ? (
                                <button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="w-full">
                                    Confirmar Resposta
                                </button>
                            ) : (
                                <button onClick={handleNextQuestion} className="w-full">
                                    {currentQuestion < QUESTIONS.length - 1 ? "Próxima Questão" : "Ver Resultado"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}