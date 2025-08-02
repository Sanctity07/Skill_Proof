import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Users, Zap, Calendar, Trophy } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visualize your skill development with detailed analytics and progress charts that show your growth over time."
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set specific learning goals and milestones to keep yourself motivated and on track."
  },
  {
    icon: Calendar,
    title: "Streak Tracking",
    description: "Build consistent learning habits with streak tracking that gamifies your daily practice."
  },
  {
    icon: Users,
    title: "Public Profiles",
    description: "Share your learning journey publicly and inspire others with your skill development progress."
  },
  {
    icon: Zap,
    title: "Quick Logging",
    description: "Log your practice sessions in seconds with our streamlined, mobile-friendly interface."
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Unlock badges and achievements as you hit milestones and maintain consistent practice."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Everything you need to
            <span className="text-gradient"> master your skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SkillProof provides all the tools you need to track, measure, and showcase your learning progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-border glow-on-hover group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow-primary transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;