import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Brain, Code, Target, TrendingUp, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/mean-stack-hero.jpg";

const Index = () => {
  const [currentProgress] = useState(20);
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate("/introduction");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Should You Learn the MEAN Stack?
              </h1>
              <p className="text-muted-foreground">
                Comprehensive Assessment for Learning and Career Readiness
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
          <Tabs defaultValue="introduction" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-transparent h-auto p-0">
              <TabsTrigger value="introduction" className="flex items-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                <BookOpen className="w-4 h-4" />
                Introduction
              </TabsTrigger>
              <TabsTrigger value="psychological" className="flex items-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                <Brain className="w-4 h-4" />
                Psychological Fit
              </TabsTrigger>
              <TabsTrigger value="technical" className="flex items-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                <Code className="w-4 h-4" />
                Technical Aptitude
              </TabsTrigger>
              <TabsTrigger value="wiscar" className="flex items-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                <Target className="w-4 h-4" />
                WISCAR Analysis
              </TabsTrigger>
              <TabsTrigger value="results" className="flex items-center gap-2 py-4 bg-white/80 text-foreground border border-card-border hover:bg-white hover:shadow-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">
                <TrendingUp className="w-4 h-4" />
                Your Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="introduction" className="mt-0">
              <div className="py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                  {/* Hero Section */}
                  <Card className="p-8 mb-12 bg-gradient-to-br from-white to-primary-light/30 border-card-border shadow-lg">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                          Discover Your MEAN Stack Career Potential
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          Take our comprehensive assessment to evaluate your psychological fit, 
                          technical readiness, and career alignment for a future in MEAN Stack development.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <Badge variant="secondary" className="px-3 py-1">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            25-30 minutes
                          </Badge>
                          <Badge variant="secondary" className="px-3 py-1">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Personalized Results
                          </Badge>
                          <Badge variant="secondary" className="px-3 py-1">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Career Guidance
                          </Badge>
                        </div>

                        <Button 
                          variant="hero" 
                          size="lg" 
                          onClick={handleStartAssessment}
                          className="text-lg px-8 py-6"
                        >
                          Start Assessment
                        </Button>
                      </div>
                      
                      <div className="relative">
                        <img 
                          src={heroImage} 
                          alt="MEAN Stack Technologies" 
                          className="rounded-lg shadow-lg w-full object-cover aspect-video"
                        />
                      </div>
                    </div>
                  </Card>

                  {/* What is MEAN Stack */}
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <Card className="p-6 border-card-border shadow-md hover:shadow-lg transition-all">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        What is the MEAN Stack?
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        The MEAN stack is a <strong>full-stack JavaScript solution</strong> that 
                        specializes in building modern web applications with seamless front-to-back integration.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-foreground">MongoDB</strong>
                            <p className="text-sm text-muted-foreground">NoSQL database for flexible data storage</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                          <div>
                            <strong className="text-foreground">Express.js</strong>
                            <p className="text-sm text-muted-foreground">Backend web application framework</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                          <div>
                            <strong className="text-foreground">Angular</strong>
                            <p className="text-sm text-muted-foreground">Frontend framework for dynamic UIs</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                          <div>
                            <strong className="text-foreground">Node.js</strong>
                            <p className="text-sm text-muted-foreground">Server-side JavaScript runtime</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-card-border shadow-md hover:shadow-lg transition-all">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Career Opportunities
                      </h3>
                      <div className="space-y-4">
                        <div className="p-3 bg-primary-light/50 rounded-lg">
                          <h4 className="font-semibold text-foreground">Full Stack Developer</h4>
                          <p className="text-sm text-muted-foreground">End-to-end web application development</p>
                        </div>
                        <div className="p-3 bg-secondary-light/50 rounded-lg">
                          <h4 className="font-semibold text-foreground">Frontend Developer</h4>
                          <p className="text-sm text-muted-foreground">Angular-based user interface creation</p>
                        </div>
                        <div className="p-3 bg-accent-light/50 rounded-lg">
                          <h4 className="font-semibold text-foreground">Backend Developer</h4>
                          <p className="text-sm text-muted-foreground">Node.js server and API development</p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                          <h4 className="font-semibold text-foreground">Web App Engineer</h4>
                          <p className="text-sm text-muted-foreground">Scalable application architecture</p>
                        </div>
                        <div className="p-3 bg-muted-darker rounded-lg">
                          <h4 className="font-semibold text-foreground">Software Engineer</h4>
                          <p className="text-sm text-muted-foreground">Enterprise software development</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-card-border shadow-md hover:shadow-lg transition-all">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Ideal Traits & Skills
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-foreground">Strong analytical thinking</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-foreground">Full-stack mindset</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-foreground">Logical problem-solving</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-foreground">JavaScript proficiency interest</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-foreground">Modern web development</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-foreground">Continuous learning</span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Assessment Modules */}
                  <Card className="p-8 border-card-border shadow-lg">
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                      What You'll Discover
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">
                          Assessment Modules:
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                              1
                            </div>
                            <div>
                              <h5 className="font-semibold text-foreground">Psychological Fit Evaluation</h5>
                              <p className="text-sm text-muted-foreground">Assess personality alignment with MEAN development</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                              2
                            </div>
                            <div>
                              <h5 className="font-semibold text-foreground">Technical Aptitude Testing</h5>
                              <p className="text-sm text-muted-foreground">Evaluate coding logic and JavaScript readiness</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                              3
                            </div>
                            <div>
                              <h5 className="font-semibold text-foreground">WISCAR Framework Analysis</h5>
                              <p className="text-sm text-muted-foreground">6-dimensional readiness evaluation</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">
                          Your Results Include:
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground">Personalized fit score (0-100)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-foreground">Detailed trait analysis</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground">Technical readiness assessment</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                            <span className="text-foreground">Career pathway recommendations</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                            <span className="text-foreground">Next steps and learning resources</span>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <Button 
                            variant="secondary" 
                            size="lg" 
                            onClick={handleStartAssessment}
                            className="w-full"
                          >
                            Begin Your Assessment Journey
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;