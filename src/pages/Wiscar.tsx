import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, BookOpen, Brain, Code, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wiscar = () => {
  const [currentProgress] = useState(80);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const questions = [
    {
      id: 0,
      dimension: "W - Will",
      question: "I am willing to dedicate 5+ hours weekly to learning MEAN Stack development for the next 6 months.",
      options: [
        { value: "5", label: "Strongly Agree - I'm committed to consistent learning", points: 5 },
        { value: "4", label: "Agree - I can make this time commitment", points: 4 },
        { value: "3", label: "Neutral - I might be able to commit this time", points: 3 },
        { value: "2", label: "Disagree - This seems like a lot of time", points: 2 },
        { value: "1", label: "Strongly Disagree - I don't have this much time", points: 1 }
      ]
    },
    {
      id: 1,
      dimension: "I - Interest",
      question: "Web development and building interactive applications genuinely excites me.",
      options: [
        { value: "5", label: "Strongly Agree - I'm passionate about web development", points: 5 },
        { value: "4", label: "Agree - I find web development interesting", points: 4 },
        { value: "3", label: "Neutral - It's okay, not my main passion", points: 3 },
        { value: "2", label: "Disagree - I prefer other types of development", points: 2 },
        { value: "1", label: "Strongly Disagree - Web development doesn't interest me", points: 1 }
      ]
    },
    {
      id: 2,
      dimension: "S - Skill",
      question: "I have experience with JavaScript fundamentals and HTML/CSS basics.",
      options: [
        { value: "5", label: "Strong foundation - I'm comfortable with these technologies", points: 5 },
        { value: "4", label: "Good foundation - I know the basics well", points: 4 },
        { value: "3", label: "Some experience - I've dabbled in these areas", points: 3 },
        { value: "2", label: "Limited experience - I know very little", points: 2 },
        { value: "1", label: "No experience - I'm completely new to these", points: 1 }
      ]
    },
    {
      id: 3,
      dimension: "C - Cognitive Readiness",
      question: "I enjoy breaking down complex problems into smaller, manageable parts and debugging systematically.",
      options: [
        { value: "5", label: "Strongly Agree - This is how I naturally approach problems", points: 5 },
        { value: "4", label: "Agree - I can think this way with effort", points: 4 },
        { value: "3", label: "Neutral - Sometimes I think this way", points: 3 },
        { value: "2", label: "Disagree - I prefer intuitive problem-solving", points: 2 },
        { value: "1", label: "Strongly Disagree - This approach doesn't suit me", points: 1 }
      ]
    },
    {
      id: 4,
      dimension: "A - Ability to Learn",
      question: "When I encounter setbacks or don't understand something immediately, I persist and seek help rather than giving up.",
      options: [
        { value: "5", label: "Strongly Agree - I'm resilient and actively seek learning resources", points: 5 },
        { value: "4", label: "Agree - I usually persist through challenges", points: 4 },
        { value: "3", label: "Neutral - Sometimes I persist, sometimes I don't", points: 3 },
        { value: "2", label: "Disagree - I get frustrated easily with challenges", points: 2 },
        { value: "1", label: "Strongly Disagree - I tend to give up when things get difficult", points: 1 }
      ]
    },
    {
      id: 5,
      dimension: "R - Real-World Fit",
      question: "I understand that MEAN Stack developers often work in collaborative environments, handle changing requirements, and need to keep learning new technologies.",
      options: [
        { value: "5", label: "Strongly Agree - This work environment appeals to me", points: 5 },
        { value: "4", label: "Agree - I'm comfortable with this type of work", points: 4 },
        { value: "3", label: "Neutral - I'm unsure about these aspects", points: 3 },
        { value: "2", label: "Disagree - This environment seems challenging", points: 2 },
        { value: "1", label: "Strongly Disagree - This doesn't sound appealing", points: 1 }
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
      navigate("/results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate("/technical");
    }
  };

  const isAnswered = answers[currentQuestion] !== undefined;
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  const getDimensionColor = (dimension: string) => {
    switch (dimension.charAt(0)) {
      case "W": return "bg-primary/20 text-primary";
      case "I": return "bg-secondary/20 text-secondary";
      case "S": return "bg-accent/20 text-accent";
      case "C": return "bg-warning/20 text-warning";
      case "A": return "bg-success/20 text-success";
      case "R": return "bg-destructive/20 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                🧭 WISCAR Framework Analysis
              </h1>
              <p className="text-muted-foreground">
                6-dimensional readiness evaluation for MEAN Stack development
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
                className="flex items-center justify-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md"
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
                className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground shadow-lg"
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
          {/* WISCAR Framework Explanation */}
          {currentQuestion === 0 && (
            <Card className="p-6 border-card-border shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                🎯 About the WISCAR Framework
              </h3>
              <p className="text-muted-foreground mb-4">
                WISCAR evaluates your readiness across 6 critical dimensions:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <strong className="text-foreground">W - Will:</strong> <span className="text-muted-foreground">Motivation and commitment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <strong className="text-foreground">I - Interest:</strong> <span className="text-muted-foreground">Genuine passion for the field</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <strong className="text-foreground">S - Skill:</strong> <span className="text-muted-foreground">Current technical foundation</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <strong className="text-foreground">C - Cognitive:</strong> <span className="text-muted-foreground">Problem-solving approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <strong className="text-foreground">A - Ability:</strong> <span className="text-muted-foreground">Learning resilience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <strong className="text-foreground">R - Real-world:</strong> <span className="text-muted-foreground">Career environment fit</span>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Dimension {currentQuestion + 1} of {questions.length}
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
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${getDimensionColor(questions[currentQuestion].dimension)}`}>
                {questions[currentQuestion].dimension}
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
              {currentQuestion < questions.length - 1 ? "Next Dimension" : "View My Results"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiscar;