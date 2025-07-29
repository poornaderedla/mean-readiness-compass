import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, BookOpen, Brain, Code, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Technical = () => {
  const [currentProgress] = useState(60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const questions = [
    {
      id: 0,
      category: "JavaScript Fundamentals",
      difficulty: "Basic",
      question: "What will the following JavaScript code output?\n\nconst arr = [1, 2, 3];\nconsole.log(arr.map(x => x * 2));",
      options: [
        { value: "a", label: "[2, 4, 6]", points: 5, correct: true },
        { value: "b", label: "[1, 2, 3, 2, 4, 6]", points: 0 },
        { value: "c", label: "undefined", points: 0 },
        { value: "d", label: "Error", points: 0 }
      ]
    },
    {
      id: 1,
      category: "Node.js Understanding",
      difficulty: "Intermediate",
      question: "In Node.js, which of the following is TRUE about the event loop?",
      options: [
        { value: "a", label: "It blocks execution until all operations complete", points: 0 },
        { value: "b", label: "It allows asynchronous, non-blocking operations", points: 5, correct: true },
        { value: "c", label: "It only handles file system operations", points: 0 },
        { value: "d", label: "It runs in a separate thread from the main process", points: 0 }
      ]
    },
    {
      id: 2,
      category: "Angular Concepts",
      difficulty: "Intermediate",
      question: "What is the purpose of Angular's dependency injection system?",
      options: [
        { value: "a", label: "To inject HTML templates into components", points: 0 },
        { value: "b", label: "To manage and provide dependencies to classes", points: 5, correct: true },
        { value: "c", label: "To handle HTTP requests automatically", points: 0 },
        { value: "d", label: "To create component hierarchies", points: 0 }
      ]
    },
    {
      id: 3,
      category: "MongoDB Query Logic",
      difficulty: "Basic",
      question: "Which MongoDB operation would you use to find all documents where the 'age' field is greater than 25?",
      options: [
        { value: "a", label: "db.collection.find({ age: > 25 })", points: 0 },
        { value: "b", label: "db.collection.find({ age: { $gt: 25 } })", points: 5, correct: true },
        { value: "c", label: "db.collection.query({ age.gt(25) })", points: 0 },
        { value: "d", label: "db.collection.where('age > 25')", points: 0 }
      ]
    },
    {
      id: 4,
      category: "Express.js Routing",
      difficulty: "Basic",
      question: "In Express.js, which method is used to handle POST requests to a specific route?",
      options: [
        { value: "a", label: "app.get('/route', handler)", points: 0 },
        { value: "b", label: "app.post('/route', handler)", points: 5, correct: true },
        { value: "c", label: "app.route('/route').post(handler)", points: 2 },
        { value: "d", label: "app.listen('/route', handler)", points: 0 }
      ]
    },
    {
      id: 5,
      category: "Problem Solving",
      difficulty: "Advanced",
      question: "You need to build a real-time chat application. Which MEAN stack technologies would you primarily use for real-time communication?",
      options: [
        { value: "a", label: "MongoDB for real-time data sync", points: 0 },
        { value: "b", label: "Angular HTTP client for polling", points: 1 },
        { value: "c", label: "Socket.io with Node.js and Angular", points: 5, correct: true },
        { value: "d", label: "Express.js middleware for real-time features", points: 0 }
      ]
    },
    {
      id: 6,
      category: "Full-Stack Integration",
      difficulty: "Advanced",
      question: "What is the best practice for handling user authentication in a MEAN stack application?",
      options: [
        { value: "a", label: "Store passwords in localStorage", points: 0 },
        { value: "b", label: "Use JWT tokens with secure HTTP-only cookies", points: 5, correct: true },
        { value: "c", label: "Store user sessions in MongoDB directly", points: 0 },
        { value: "d", label: "Use Angular guards without backend validation", points: 0 }
      ]
    },
    {
      id: 7,
      category: "System Design",
      difficulty: "Advanced",
      question: "For a scalable MEAN stack application, what would be the most appropriate database schema design approach?",
      options: [
        { value: "a", label: "Always normalize data like in SQL databases", points: 0 },
        { value: "b", label: "Design based on query patterns and embed related data when appropriate", points: 5, correct: true },
        { value: "c", label: "Store everything in a single collection", points: 0 },
        { value: "d", label: "Use only references, never embed documents", points: 0 }
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
      navigate("/wiscar");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate("/psychological");
    }
  };

  const isAnswered = answers[currentQuestion] !== undefined;
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Basic": return "bg-success/20 text-success";
      case "Intermediate": return "bg-warning/20 text-warning";
      case "Advanced": return "bg-destructive/20 text-destructive";
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
                ⚙️ Technical Aptitude Assessment
              </h1>
              <p className="text-muted-foreground">
                Evaluate your technical readiness for MEAN Stack development
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
                className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground shadow-lg"
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
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-block px-3 py-1 bg-primary-light/30 text-primary rounded-full text-sm font-medium">
                  {questions[currentQuestion].category}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(questions[currentQuestion].difficulty)}`}>
                  {questions[currentQuestion].difficulty}
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-foreground leading-relaxed whitespace-pre-line">
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
                    className="text-lg text-foreground cursor-pointer hover:text-primary transition-colors flex-1 py-3 font-mono"
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
              {currentQuestion < questions.length - 1 ? "Next Question" : "Continue to WISCAR Analysis"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;