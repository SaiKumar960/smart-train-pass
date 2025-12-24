import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Train, Search, AlertCircle, QrCode, Camera } from "lucide-react";
import Header from "@/components/Header";

const GetStarted = () => {
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

    // Simulate QR Scan
    const simulateQrScan = () => {
        // Use a seeded Aadhaar number for the demo (Kota Sai Kumar)
        // Note: The actual number depends on the seed, but I'll use a placeholder
        // In a real demo, this would be the actual scanned value
        navigate(`/identity/123456789012`);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <div className="pt-32 pb-12 px-6 flex flex-col items-center">
                <Card className="max-w-md w-full shadow-2xl border-primary/10">
                    <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Train className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold">Access SmartRail ID</CardTitle>
                        <CardDescription>Choose your preferred method to verify your identity.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="scan" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8">
                                <TabsTrigger value="scan" className="flex items-center gap-2">
                                    <QrCode className="w-4 h-4" /> QR Scan
                                </TabsTrigger>
                                <TabsTrigger value="manual" className="flex items-center gap-2">
                                    <Search className="w-4 h-4" /> Manual Enter
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="scan" className="space-y-6">
                                <div className="aspect-square bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                    <div className="absolute inset-4 border-2 border-primary/30 rounded-lg animate-pulse" />
                                    <Camera className="w-12 h-12 text-slate-400 mb-4" />
                                    <p className="text-sm text-slate-500 font-medium">Position the Aadhaar QR code within the frame</p>

                                    <Button
                                        onClick={simulateQrScan}
                                        className="mt-8 relative z-10"
                                    >
                                        Simulate Scan
                                    </Button>

                                    <div className="mt-4 text-[10px] text-muted-foreground uppercase flex items-center gap-1 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                        Live Scanner Preview (Demo)
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="manual" className="space-y-6">
                                <form onSubmit={handleSearch} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Aadhaar Number</label>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                placeholder="1234 5678 9012"
                                                maxLength={12}
                                                value={aadhaar}
                                                onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ""))}
                                                className="pl-10 h-12 text-lg tracking-[0.2em]"
                                            />
                                            <Search className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                                        </div>
                                        {error && (
                                            <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                                                <AlertCircle className="w-3 h-3" /> {error}
                                            </p>
                                        )}
                                    </div>
                                    <Button type="submit" className="w-full h-12 text-lg">Verify & Proceed</Button>
                                </form>
                            </TabsContent>
                        </Tabs>

                        <div className="mt-8 pt-6 border-t text-center space-y-4">
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 italic">
                                <p className="text-[11px] text-amber-700">QR Scanning is the recommended method for faster automated fare collection at station gates.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Link to="/" className="mt-8 text-sm text-muted-foreground hover:text-primary underline transition-colors">
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default GetStarted;
