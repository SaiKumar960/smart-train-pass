import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Train, Search, AlertCircle, QrCode, Camera } from "lucide-react";

const AccessCard = () => {
    const [aadhaar, setAadhaar] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (aadhaar.length < 12) {
            setError("Please enter a valid 12-digit Aadhaar number.");
            return;
        }
        navigate(`/identity/${aadhaar}`);
    };

    const simulateQrScan = () => {
        // Kota Sai Kumar's Seeded Aadhaar Placeholder
        navigate(`/identity/123456789012`);
    };

    return (
        <Card className="w-full max-w-md shadow-2xl border-primary/20 backdrop-blur-sm bg-white/95">
            <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                    <Train className="w-6 h-6 text-primary" /> SmartRail Access
                </CardTitle>
                <CardDescription>Verify your identity to board the train</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="scan" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="scan" className="flex items-center gap-2">
                            <QrCode className="w-4 h-4" /> QR Scan
                        </TabsTrigger>
                        <TabsTrigger value="manual" className="flex items-center gap-2">
                            <Search className="w-4 h-4" /> Manual
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="scan" className="space-y-4">
                        <div className="aspect-video bg-slate-900/5 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group">
                            <div className="absolute inset-2 border border-primary/20 rounded shadow-inner" />
                            <Camera className="w-8 h-8 text-slate-400 mb-2 group-hover:scale-110 transition-transform" />
                            <p className="text-[10px] text-slate-500 font-medium px-4">Scanner Ready</p>

                            <Button
                                onClick={simulateQrScan}
                                size="sm"
                                className="mt-4 relative z-10"
                            >
                                Tap to Scan
                            </Button>
                        </div>
                    </TabsContent>

                    <TabsContent value="manual" className="space-y-4">
                        <form onSubmit={handleSearch} className="space-y-4">
                            <div className="space-y-2">
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="Enter Aadhaar Number"
                                        maxLength={12}
                                        value={aadhaar}
                                        onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ""))}
                                        className="h-10 text-center tracking-[0.1em]"
                                    />
                                </div>
                                {error && <p className="text-red-500 text-[10px] text-center">{error}</p>}
                            </div>
                            <Button type="submit" className="w-full btn-hover-effect">Proceed to Ticket</Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

export default AccessCard;
