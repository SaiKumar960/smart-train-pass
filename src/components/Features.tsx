import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Smartphone, 
  CreditCard, 
  Wifi, 
  Users, 
  MapPin,
  Clock,
  Lock,
  TrendingUp 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Aadhaar Authentication",
      description: "Secure identity verification using UIDAI's Aadhaar system with QR code scanning and biometric authentication",
      gradient: "from-primary to-primary-light",
      badge: "Security"
    },
    {
      icon: CreditCard,
      title: "Automatic Fare Collection",
      description: "Distance-based fare calculation with automatic deduction from linked bank account upon journey completion",
      gradient: "from-secondary to-secondary-light",
      badge: "Payment"
    },
    {
      icon: Smartphone,
      title: "Smart Door Access",
      description: "Automated train doors with QR readers for seamless entry and exit without physical tickets",
      gradient: "from-accent to-accent-light",
      badge: "Technology"
    },
    {
      icon: Users,
      title: "Passenger Limit Control",
      description: "Prevents overcrowding by monitoring coach capacity and controlling passenger entry in real-time",
      gradient: "from-primary to-accent",
      badge: "Safety"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "GPS-based journey tracking to calculate exact travel distance for accurate fare calculation",
      gradient: "from-secondary to-primary",
      badge: "Tracking"
    },
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description: "Fully connected trains with high-speed internet for seamless data processing and communication",
      gradient: "from-accent to-secondary",
      badge: "Connectivity"
    },
    {
      icon: Lock,
      title: "Fraud Prevention",
      description: "Eliminates ticketless travel and reduces revenue loss through secure authentication mechanisms",
      gradient: "from-primary-light to-secondary",
      badge: "Anti-fraud"
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Faster boarding and alighting process reduces station dwell time and improves punctuality",
      gradient: "from-secondary-light to-accent",
      badge: "Efficiency"
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Comprehensive passenger analytics for route optimization and capacity planning",
      gradient: "from-accent-light to-primary",
      badge: "Analytics"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            System Features
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Advanced Railway Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our smart ticketing system combines cutting-edge technology with government 
            infrastructure to create a secure, efficient, and user-friendly travel experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;