import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock } from "lucide-react"

interface Choice {
  id: string
  text: string
  isCorrect: boolean
}

interface StampCardProps {
  id: string
  timestamp: number
  question: string
  difficulty: "easy" | "medium" | "hard"
  choices: Choice[]
  explanation: string
  onAnswer: (stampId: string, choiceId: string, isCorrect: boolean) => void
  isCompleted?: boolean
  userAnswer?: string
}

const formatTimestamp = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "easy": return "bg-green-100 text-green-800 border-green-200"
    case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "hard": return "bg-red-100 text-red-800 border-red-200"
    default: return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export function StampCard({ 
  id, 
  timestamp, 
  question, 
  difficulty, 
  choices, 
  explanation, 
  onAnswer, 
  isCompleted = false,
  userAnswer 
}: StampCardProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(userAnswer || null)
  const [showExplanation, setShowExplanation] = useState(isCompleted)

  const handleChoiceSelect = (choiceId: string) => {
    if (isCompleted) return
    setSelectedChoice(choiceId)
  }

  const handleSubmit = () => {
    if (!selectedChoice) return
    
    const choice = choices.find(c => c.id === selectedChoice)
    if (choice) {
      onAnswer(id, selectedChoice, choice.isCorrect)
      setShowExplanation(true)
    }
  }

  const getChoiceStatus = (choice: Choice) => {
    if (!showExplanation) return null
    if (choice.isCorrect) return "correct"
    if (selectedChoice === choice.id && !choice.isCorrect) return "incorrect"
    return null
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <Badge variant="outline" className="text-xs">
              {formatTimestamp(timestamp)}
            </Badge>
          </div>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold leading-tight">
          {question}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {choices.map((choice) => {
            const status = getChoiceStatus(choice)
            return (
              <button
                key={choice.id}
                onClick={() => handleChoiceSelect(choice.id)}
                disabled={isCompleted}
                className={`
                  w-full p-3 text-left rounded-lg border-2 transition-all duration-200
                  ${selectedChoice === choice.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                  }
                  ${status === 'correct' 
                    ? 'border-green-500 bg-green-50 text-green-800' 
                    : ''
                  }
                  ${status === 'incorrect' 
                    ? 'border-red-500 bg-red-50 text-red-800' 
                    : ''
                  }
                  ${isCompleted ? 'cursor-default' : 'cursor-pointer hover:bg-muted/50'}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{choice.text}</span>
                  {status === 'correct' && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {status === 'incorrect' && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Explanation:</strong> {explanation}
            </p>
          </div>
        )}

        {!isCompleted && (
          <div className="flex justify-end pt-2">
            <Button 
              onClick={handleSubmit}
              disabled={!selectedChoice}
              className="px-6"
            >
              Submit Answer
            </Button>
          </div>
        )}

        {isCompleted && (
          <div className="flex items-center justify-center pt-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="w-4 h-4 mr-1" />
              Stamped
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}