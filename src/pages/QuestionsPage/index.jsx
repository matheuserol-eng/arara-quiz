import axios from "axios";
import { XCircle } from "lucide-react"
import { CheckCircle2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

export const QuestionsPage = () => {
    const token = localStorage.getItem("@arara-quiz/token")
    const { id: themeId } = useParams();
    const navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [quizComplete, setQuizComplete] = useState(false)
    const [totalPoints, setTotalPoints] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (themeId) {
            axios.get(`/questions/${themeId}`,
                {
                    baseURL: import.meta.env.VITE_API_URL
                }
            ).then(response => {
                setQuestions(response.data);
                setLoading(false);
            }).catch(error => {
                console.error("Erro ao buscar questões:", error);
                setLoading(false); 
            });
        }
    }, [themeId]);

    const question = questions[currentQuestion]
    const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

    const handleAnswerSelect = (answerIndex) => {
        if (showFeedback) return

        setSelectedAnswer(answerIndex)
    }

    const handleSubmitAnswer = async () => {
        if (!question || selectedAnswer === null) return; 

        const correct = selectedAnswer === question.correctAnswer

        await axios.post("/answers", {questionId: question.id, answer: selectedAnswer}, {
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        setIsCorrect(correct)
        setShowFeedback(true)

        if (correct) {
            const points = question.score
            setTotalPoints(prevPoints => prevPoints + points)
        }
    }

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setShowFeedback(false)
            setIsCorrect(false)
        } else {
            setQuizComplete(true)
            navigate(`/resultados/${themeId}`); 
        }
    }

    const getButtonClassName = (index) => {
        if (!question) return ""; 

        const isSelected = selectedAnswer === index
        const isCorrectAnswer = index === question.correctAnswer

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

    if (loading) {
        return <p className="text-xl text-center p-8">Carregando Questões...</p>;
    }
    
    if (!questions || questions.length === 0) {
        return <p className="text-xl text-center p-8">Nenhuma questão encontrada para este tema.</p>;
    }

  
    return (
        <div className="bg-[url('/araraquaraantiga.png')] min-h-screen bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full max-w-2xl bg-yellow-100 p-8 rounded-lg border">
                <main className="container mx-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto space-y-6">

                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm text-stone-800">
                                <span>{question.theme.name}</span>
                                <span>
                                    Questão {currentQuestion + 1} de {questions.length}
                                </span>
                            </div>
                            {/* Adicionar um progress bar aqui se desejar, usando a variável 'progress' */}
                            {/* <Progress value={progress} className="h-2" /> */} 
                        </div>

                        <div>
                            <header>
                                <h3 className="text-xl text-balance">{question.question}</h3>
                                <p className="text-base font-medium text-purple-500">
                                    Vale {question.score} pontos
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
                                                {/* Correção na condição de renderização dos ícones: question.correctAnswer */}
                                                {showFeedback && index === question.correctAnswer && (
                                                    <CheckCircle2 className="h-5 w-5 text-green-600" /> 
                                                )}
                                                {showFeedback && selectedAnswer === index && index !== question.correctAnswer && (
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
                                        <div className="flex items-center justify-center gap-2 mb-2 bg-neutral-50 max-w-fit px-3 rounded-3xl">
                                            {isCorrect ? (
                                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                                            ) : (
                                                <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                                            )}
                                            <div>
                                                <p className="font-semibold">{isCorrect ? "Correto!" : "Incorreto"}</p>
                                                {isCorrect && (
                                                    <p className="text-sm text-green-700">+{question.score} pontos</p>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-sm text-neutral-300">{question.explanation}</p>
                                    </div>
                                )}

                                <div className="w-full flex items-center justify-center">

                                    {!showFeedback ? (
                                        <button 
                                            onClick={handleSubmitAnswer} 
                                            disabled={selectedAnswer === null} 
                                            className={`w-44 rounded-4xl cursor-pointer justify-center mx-auto px-4 py-2 border items-center 
                                                ${selectedAnswer === null ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-sky-300'}`}
                                        >
                                            Confirmar Resposta
                                        </button>
                                    ) : (
                                        <button onClick={handleNextQuestion} className="w-44 rounded-4xl cursor-pointer justify-center bg-sky-300 mx-auto px-4 py-2  border items-center">
                                            {currentQuestion < questions.length - 1 ? "Próxima Questão" : "Ver Resultado"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}