import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/smart-railway-hero.jpg";
import { Train, Shield, Smartphone, CreditCard } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
            <Train className="w-4 h-4 mr-2" />
            Revolutionary Railway Technology
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Smart Railway
            <span className="block text-transparent bg-gradient-to-r from-primary-light to-accent-light bg-clip-text">
              Ticketing System
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
            Revolutionizing Indian Railways with Aadhaar-based authentication, 
            automated fare collection, and seamless passenger experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explore System
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center animate-float">
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-light" />
              </div>
              <p className="text-sm font-medium">Secure Authentication</p>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-secondary-light" />
              </div>
              <p className="text-sm font-medium">QR Code Entry</p>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-accent-light" />
              </div>
              <p className="text-sm font-medium">Auto Payment</p>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="w-16 h-16 mx-auto mb-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Train className="w-8 h-8 text-primary-glow" />
              </div>
              <p className="text-sm font-medium">Smart Doors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;