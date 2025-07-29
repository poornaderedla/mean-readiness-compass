import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Brain, Code, Target, TrendingUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/mean-stack-hero.jpg";

const Introduction = () => {
  const [currentProgress] = useState(0);
  const navigate = useNavigate();

  const handleStartPsychological = () => {
    navigate("/psychological");
  };

  const handleStartAssessment = () => {
    navigate("/psychological");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                🧠 TECHNICAL FUTURES: Should You Learn the MEAN Stack?
              </h1>
              <p className="text-muted-foreground">
                A Comprehensive Assessment for Learning and Career Readiness
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
                className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground shadow-lg"
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
          {/* Test Introduction */}
          <Card className="p-8 mb-8 border-card-border shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              🔍 1. Test Introduction
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                🎯 Purpose of This Assessment:
              </h3>
              <p className="text-muted-foreground mb-4">
                This assessment evaluates whether you're well-suited to learn and pursue a career using the MEAN Stack. 
                It examines your motivation, technical aptitude, personality alignment, cognitive readiness, and career potential.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                💡 What Is the MEAN Stack?
              </h3>
              <p className="text-muted-foreground mb-4">
                The MEAN stack is a full-stack JavaScript solution that comprises:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1"></div>
                  <div>
                    <strong className="text-foreground">MongoDB</strong> – NoSQL database
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full mt-1"></div>
                  <div>
                    <strong className="text-foreground">Express.js</strong> – Backend web framework
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1"></div>
                  <div>
                    <strong className="text-foreground">Angular</strong> – Frontend framework
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-warning rounded-full mt-1"></div>
                  <div>
                    <strong className="text-foreground">Node.js</strong> – Server-side JavaScript runtime
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                💼 Common Career Roles:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Front-End Developer (Angular)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Back-End Developer (Node.js)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Web Application Engineer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Software Engineer</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                👤 Personality Traits That Succeed in MEAN Stack:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Problem-solver, self-learner, logical thinker</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Enjoys working across front-end and back-end</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Curious, adaptable, collaborative</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-foreground">Organized and system-oriented</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleStartPsychological}
                className="px-8 py-4"
              >
                Begin Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Hero Image */}
          <Card className="p-4 border-card-border shadow-lg">
            <img 
              src={heroImage} 
              alt="MEAN Stack Technologies Overview" 
              className="rounded-lg w-full object-cover aspect-video"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Introduction;