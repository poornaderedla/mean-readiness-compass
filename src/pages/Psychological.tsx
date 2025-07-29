import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, BookOpen, Brain, Code, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Psychological = () => {
  const [currentProgress] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const questions = [
    {
      id: 0,
      category: "Interest Scale (RIASEC)",
      question: "I enjoy figuring out how websites and web applications work behind the scenes.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree", points: 5 },
        { value: "agree", label: "Agree", points: 4 },
        { value: "neutral", label: "Neutral", points: 3 },
        { value: "disagree", label: "Disagree", points: 2 },
        { value: "strongly_disagree", label: "Strongly Disagree", points: 1 }
      ]
    },
    {
      id: 1,
      category: "Personality Compatibility",
      question: "I prefer working on projects that require both creative thinking and logical problem-solving.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree", points: 5 },
        { value: "agree", label: "Agree", points: 4 },
        { value: "neutral", label: "Neutral", points: 3 },
        { value: "disagree", label: "Disagree", points: 2 },
        { value: "strongly_disagree", label: "Strongly Disagree", points: 1 }
      ]
    },
    {
      id: 2,
      category: "Growth Mindset",
      question: "When I encounter a challenging coding problem, I see it as an opportunity to learn rather than a roadblock.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree", points: 5 },
        { value: "agree", label: "Agree", points: 4 },
        { value: "neutral", label: "Neutral", points: 3 },
        { value: "disagree", label: "Disagree", points: 2 },
        { value: "strongly_disagree", label: "Strongly Disagree", points: 1 }
      ]
    },
    {
      id: 3,
      category: "Work Style Preference",
      question: "I enjoy working on projects where I can see both the user interface and the server-side logic.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree", points: 5 },
        { value: "agree", label: "Agree", points: 4 },
        { value: "neutral", label: "Neutral", points: 3 },
        { value: "disagree", label: "Disagree", points: 2 },
        { value: "strongly_disagree", label: "Strongly Disagree", points: 1 }
      ]
    },
    {
      id: 4,
      category: "Learning Persistence",
      question: "I'm willing to spend several hours debugging code to understand why something isn't working.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree", points: 5 },
        { value: "agree", label: "Agree", points: 4 },
        { value: "neutral", label: "Neutral", points: 3 },
        { value: "disagree", label: "Disagree", points: 2 },
        { value: "strongly_disagree", label: "Strongly Disagree", points: 1 }
      ]
    },
    {
      id: 5,
      category: "Technology Adaptability",
      question: "I feel excited about learning new JavaScript frameworks and staying updated with web development trends.",
      options: [
        { value: "strongly_agree", label: "Strongly Agree", points: 5 },
        { value: "agree", label: "Agree", points: 4 },
        { value: "neutral", label: "Neutral", points: 3 },
        { value: "disagree", label: "Disagree", points: 2 },
        { value: "strongly_disagree", label: "Strongly Disagree", points: 1 }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/technical");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate("/introduction");
    }
  };

  const isAnswered = answers[currentQuestion] !== undefined;
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                🧠 Psychological Fit Assessment
              </h1>
              <p className="text-muted-foreground">
                Evaluate your psychological compatibility with MEAN Stack development
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                {currentProgress}% Complete
              </span>
              <Progress value={currentProgress} className="w-24" />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-card-border bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex w-full">
            <div className="grid grid-cols-5 w-full">
              <button 
                onClick={() => navigate("/introduction")}
                className="flex items-center justify-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                Introduction
              </button>
              <button 
                onClick={() => navigate("/psychological")}
                className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground shadow-lg"
              >
                <Brain className="w-4 h-4" />
                Psychological Fit
              </button>
              <button 
                onClick={() => navigate("/technical")}
                className="flex items-center justify-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md"
              >
                <Code className="w-4 h-4" />
                Technical Aptitude
              </button>
              <button 
                onClick={() => navigate("/wiscar")}
                className="flex items-center justify-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md"
              >
                <Target className="w-4 h-4" />
                WISCAR Analysis
              </button>
              <button 
                onClick={() => navigate("/results")}
                className="flex items-center justify-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md"
              >
                <TrendingUp className="w-4 h-4" />
                Your Results
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <Progress value={progressPercentage} className="w-full" />
          </div>

          {/* Question Card */}
          <Card className="p-8 border-card-border shadow-lg mb-8">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-primary-light/30 text-primary rounded-full text-sm font-medium mb-4">
                {questions[currentQuestion].category}
              </div>
              <h2 className="text-2xl font-semibold text-foreground leading-relaxed">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <RadioGroup 
              value={answers[currentQuestion] || ""} 
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.value}
                    className="text-primary border-2 border-primary"
                  />
                  <Label 
                    htmlFor={option.value} 
                    className="text-lg text-foreground cursor-pointer hover:text-primary transition-colors flex-1 py-3"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button 
              variant={isAnswered ? "hero" : "outline"}
              onClick={handleNext}
              disabled={!isAnswered}
              className="flex items-center gap-2"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Continue to Technical Assessment"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psychological;