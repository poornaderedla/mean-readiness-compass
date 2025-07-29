import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Brain, Code, Target, TrendingUp, CheckCircle, AlertTriangle, XCircle, Star, Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const [currentProgress] = useState(100);
  const navigate = useNavigate();

  // Mock results - in a real app, these would come from stored assessment data
  const results = {
    psychological: 85,
    technical: 72,
    wiscar: {
      will: 90,
      interest: 95,
      skill: 65,
      cognitive: 80,
      ability: 88,
      realWorld: 75,
      overall: 82
    },
    overall: 80,
    recommendation: "YES"
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-success/10";
    if (score >= 60) return "bg-warning/10";
    return "bg-destructive/10";
  };

  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case "YES": return <CheckCircle className="w-8 h-8 text-success" />;
      case "MAYBE": return <AlertTriangle className="w-8 h-8 text-warning" />;
      case "NO": return <XCircle className="w-8 h-8 text-destructive" />;
      default: return <CheckCircle className="w-8 h-8 text-success" />;
    }
  };

  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case "YES": return "text-success";
      case "MAYBE": return "text-warning";
      case "NO": return "text-destructive";
      default: return "text-success";
    }
  };

  const careerPaths = [
    {
      role: "Full Stack Developer",
      description: "End-to-end web application development",
      match: 85,
      skills: ["JavaScript", "Node.js", "Angular", "MongoDB"]
    },
    {
      role: "Frontend Developer",
      description: "UI building using Angular",
      match: 78,
      skills: ["Angular", "TypeScript", "HTML/CSS", "JavaScript"]
    },
    {
      role: "Backend Developer",
      description: "API and server logic",
      match: 75,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      role: "Web App Engineer",
      description: "Scalable web architecture",
      match: 80,
      skills: ["Full Stack", "System Design", "Performance", "Security"]
    }
  ];

  const learningPath = [
    { phase: "Beginner", topic: "HTML/CSS & JavaScript Fundamentals", duration: "2-3 months", status: "start" },
    { phase: "Intermediate", topic: "Node.js & Express.js Backend", duration: "2-3 months", status: "next" },
    { phase: "Intermediate", topic: "MongoDB Database Basics", duration: "1-2 months", status: "next" },
    { phase: "Advanced", topic: "Angular Frontend Framework", duration: "3-4 months", status: "future" },
    { phase: "Advanced", topic: "Full Stack Integration & Deployment", duration: "2-3 months", status: "future" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                🤖 Your MEAN Stack Assessment Results
              </h1>
              <p className="text-muted-foreground">
                Comprehensive analysis and personalized recommendations
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
                className="flex items-center justify-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md"
              >
                <Target className="w-4 h-4" />
                WISCAR Analysis
              </button>
              <button 
                onClick={() => navigate("/results")}
                className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground shadow-lg"
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
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Overall Recommendation */}
          <Card className="p-8 border-card-border shadow-lg mb-8 bg-gradient-to-br from-white to-primary-light/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {getRecommendationIcon()}
              </div>
              <h2 className={`text-4xl font-bold mb-4 ${getRecommendationColor()}`}>
                {results.recommendation === "YES" ? "YES, You Should Learn the MEAN Stack!" : 
                 results.recommendation === "MAYBE" ? "MAYBE - With Some Preparation" : 
                 "Consider Alternative Paths"}
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-warning fill-current" />
                  <span className="text-2xl font-bold text-foreground">{results.overall}/100</span>
                </div>
                <span className="text-muted-foreground">Overall Readiness Score</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Based on your assessment, you show strong potential for MEAN Stack development. 
                Your psychological fit and learning readiness indicate you're well-suited for this path.
              </p>
            </div>
          </Card>

          {/* Detailed Scores */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Assessment Breakdown */}
            <Card className="p-6 border-card-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Assessment Breakdown
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">Psychological Fit</span>
                    <span className={`font-bold ${getScoreColor(results.psychological)}`}>{results.psychological}/100</span>
                  </div>
                  <Progress value={results.psychological} className="h-3" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">Technical Aptitude</span>
                    <span className={`font-bold ${getScoreColor(results.technical)}`}>{results.technical}/100</span>
                  </div>
                  <Progress value={results.technical} className="h-3" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">WISCAR Overall</span>
                    <span className={`font-bold ${getScoreColor(results.wiscar.overall)}`}>{results.wiscar.overall}/100</span>
                  </div>
                  <Progress value={results.wiscar.overall} className="h-3" />
                </div>
              </div>
            </Card>

            {/* WISCAR Dimensions */}
            <Card className="p-6 border-card-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                WISCAR Dimension Scores
              </h3>
              
              <div className="space-y-4">
                {Object.entries(results.wiscar).map(([key, score]) => {
                  if (key === 'overall') return null;
                  const labels = {
                    will: "Will (Motivation)",
                    interest: "Interest (Passion)",
                    skill: "Skill (Foundation)",
                    cognitive: "Cognitive (Problem-solving)",
                    ability: "Ability (Learning resilience)",
                    realWorld: "Real-world (Environment fit)"
                  };
                  return (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{labels[key as keyof typeof labels]}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-16 h-2 rounded-full ${getScoreBg(score as number)}`}>
                          <div 
                            className={`h-2 rounded-full ${score as number >= 80 ? 'bg-success' : score as number >= 60 ? 'bg-warning' : 'bg-destructive'}`}
                            style={{ width: `${score}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-bold ${getScoreColor(score as number)}`}>{score}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Career Recommendations */}
          <Card className="p-8 border-card-border shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              🎓 Recommended Career Paths
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {careerPaths.map((career, index) => (
                <div key={index} className="p-6 border border-card-border rounded-lg hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-foreground">{career.role}</h4>
                    <Badge variant={career.match >= 80 ? "default" : "secondary"} className="text-sm">
                      {career.match}% Match
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-primary-light/30 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Learning Path */}
          <Card className="p-8 border-card-border shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              📚 Your Personalized Learning Path
            </h3>
            
            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${phase.status === 'start' ? 'bg-success text-white' : 
                      phase.status === 'next' ? 'bg-primary text-white' : 
                      'bg-muted text-muted-foreground'}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-foreground">{phase.topic}</h4>
                      <Badge variant="outline" className="text-xs">
                        {phase.phase}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    {phase.status === 'start' && (
                      <p className="text-sm text-success">✅ Perfect starting point based on your current skills</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="p-8 border-card-border shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              🚀 Recommended Next Steps
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Immediate Actions (This Week)</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Start with JavaScript fundamentals</span>
                      <p className="text-sm text-muted-foreground">Review ES6+ features, async/await, and DOM manipulation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Set up development environment</span>
                      <p className="text-sm text-muted-foreground">Install Node.js, VS Code, and essential extensions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <span className="font-medium text-foreground">Join MEAN Stack communities</span>
                      <p className="text-sm text-muted-foreground">Connect with other learners and developers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Resources to Explore</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-card-border rounded-lg">
                    <span className="font-medium text-foreground">FreeCodeCamp MEAN Stack</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between p-3 border border-card-border rounded-lg">
                    <span className="font-medium text-foreground">Angular Official Tutorial</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between p-3 border border-card-border rounded-lg">
                    <span className="font-medium text-foreground">Node.js Documentation</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between p-3 border border-card-border rounded-lg">
                    <span className="font-medium text-foreground">MongoDB University</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button variant="hero" size="lg" className="px-8 py-4">
                Start Your MEAN Stack Journey Today!
              </Button>
            </div>
          </Card>

          {/* Back to Assessment */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate("/introduction")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;