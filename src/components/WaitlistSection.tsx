import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "../lib/supabaseClient";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // ✅ Insert into Supabase with created_at timestamp
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    setLoading(false);

    if (error) {
      console.error("Supabase Error:", error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Welcome to the waitlist!",
      description: "You'll be the first to know when SkillProof launches.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 relative" id="waitlist-section">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to start your
            <span className="text-gradient"> skill journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of learners who are already on the waitlist. Be the first to experience the future of skill tracking.
          </p>

          <Card className="glass-card border-card-border/50 p-8">
            <CardContent className="p-0">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 bg-input/50 border-card-border focus:border-primary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="h-12 px-8 whitespace-nowrap"
                    disabled={loading}
                  >
                    {loading ? "Joining..." : "Join Waitlist"}
                  </Button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 py-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">You're on the list!</span>
                </div>
              )}

              <p className="text-sm text-muted-foreground mt-4 text-center">
                No spam, ever. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>1,000+ developers waiting</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Launching 2030</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
