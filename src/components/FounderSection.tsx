import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-24 relative" id="founder-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Why I Built
              <span className="text-gradient"> SkillProof</span>
            </h2>
          </div>

          <Card className="glass-card border-card-border/50 relative overflow-hidden">
            <CardContent className="p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                  "As a developer, I've always been passionate about continuous learning. But I noticed something frustrating: 
                  there was no good way to track my skill development over time. I'd learn new technologies, practice coding challenges, 
                  read technical books, but all that progress felt invisible.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                  I wanted to create something that would not only help me track my learning but also motivate me to stay consistent. 
                  Something that could showcase my growth to potential employers and inspire others to start their own learning journeys.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-12">
                  SkillProof is that solution. It's designed by learners, for learners. Whether you're a developer, designer, 
                  or anyone passionate about skill development, this is your platform to prove your growth."
                </p>

                {/* Founder Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    AL
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Amiara Lucky</h4>
                    <p className="text-muted-foreground">Founder & Lead Developer</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;