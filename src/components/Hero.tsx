import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/smart-railway-hero.jpg";
import { Shield, Smartphone, CreditCard, Train } from "lucide-react";
import AccessCard from "./AccessCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart Railway System"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-20">
        <div className="text-left flex-1 text-white animate-fade-in">
          <Badge variant="secondary" className="mb-6 bg-primary/20 backdrop-blur-md border-white/10 text-white">
            <Train className="w-4 h-4 mr-2" />
            Live Deployment: Station Gate 04
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Seamless
            <span className="block text-transparent bg-gradient-to-r from-primary-light to-accent-light bg-clip-text">
              Railway Entry
            </span>
          </h1>

          <p className="text-xl mb-8 max-w-xl leading-relaxed text-gray-300">
            Automated ticket validation using Aadhaar-integrated biometric scanning and instant UPI payments.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md hidden md:grid">
            <div className="flex flex-col items-center gap-1 bg-white/5 p-4 rounded-xl border border-white/10">
              <Shield className="w-6 h-6 text-primary-light" />
              <span className="text-[10px] font-bold text-gray-400">SECURE</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white/5 p-4 rounded-xl border border-white/10">
              <Smartphone className="w-6 h-6 text-accent-light" />
              <span className="text-[10px] font-bold text-gray-400">CONTACTLESS</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white/5 p-4 rounded-xl border border-white/10">
              <CreditCard className="w-6 h-6 text-green-400" />
              <span className="text-[10px] font-bold text-gray-400">AUTO-PAY</span>
            </div>
          </div>
        </div>

        {/* Access UI - First Thing User Sees */}
        <div className="flex-shrink-0 w-full max-w-sm animate-float">
          <AccessCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;