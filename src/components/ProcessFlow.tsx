import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  QrCode, 
  Fingerprint, 
  DoorOpen, 
  CreditCard, 
  MapPin, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const ProcessFlow = () => {
  const steps = [
    {
      id: 1,
      title: "Scan Aadhaar QR",
      description: "Passenger scans their Aadhaar QR code at the train coach entrance",
      icon: QrCode,
      color: "primary",
    },
    {
      id: 2,
      title: "Biometric Verification",
      description: "Complete fingerprint authentication for secure identity verification",
      icon: Fingerprint,
      color: "secondary",
    },
    {
      id: 3,
      title: "Automated Entry",
      description: "Smart doors open automatically after successful authentication",
      icon: DoorOpen,
      color: "accent",
    },
    {
      id: 4,
      title: "Journey Tracking",
      description: "System tracks passenger location and calculates travel distance",
      icon: MapPin,
      color: "primary",
    },
    {
      id: 5,
      title: "Exit Authentication",
      description: "Scan QR code again when leaving the train at destination",
      icon: QrCode,
      color: "secondary",
    },
    {
      id: 6,
      title: "Automatic Payment",
      description: "Fare automatically deducted from linked bank account",
      icon: CreditCard,
      color: "accent",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Seamless Journey Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience hassle-free travel with our automated ticketing system that ensures 
            security, convenience, and accurate fare collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              primary: "from-primary to-primary-light",
              secondary: "from-secondary to-secondary-light", 
              accent: "from-accent to-accent-light",
            };

            return (
              <Card 
                key={step.id} 
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      Step {step.id}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow connector for larger screens */}
                  {index < steps.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/60" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary" />
              <p className="text-lg font-semibold text-foreground">
                All processes are controlled by UIDAI (Unique Identification Authority of India)
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;