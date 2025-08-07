import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const HeroSection = () => {
  const [signupsCount, setSignupsCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase
        .from("waitlist_count")
        .select("total")
        .single();

      if (!error && data) {
        setSignupsCount(data.total);
      }
    };

    fetchCount();

    // ✅ Listen for realtime inserts
    const subscription = supabase
      .channel("waitlist-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "waitlist" },
        () => fetchCount()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-card-border/50 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Track your skills.</span>
            <br />
            <span className="text-foreground">Prove your growth.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            The modern platform for tracking skills, logging progress, and sharing your learning journey with the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group" onClick={() => window.location.href = "#waitlist-section"}>
              Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" onClick={() => window.location.href = "#founder-section"}>
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">{signupsCount}</div>
              <div className="text-sm text-muted-foreground">Early Signups</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground">Progress Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">∞</div>
              <div className="text-sm text-muted-foreground">Skills to Master</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
