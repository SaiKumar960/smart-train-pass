import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserByAadhaar } from "@/services/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Train, User, Shield, CreditCard, ArrowLeft } from "lucide-react";

const Identity = () => {
    const { aadhaar } = useParams();
    const [userData, setUserData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (aadhaar) {
                try {
                    const data = await getUserByAadhaar(aadhaar);
                    setUserData(data);
                } catch (error) {
                    console.error("Failed to fetch user:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [aadhaar]);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (!userData) return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <h2 className="text-2xl font-bold">Identity Not Found</h2>
            <Link to="/"><Button>Go Home</Button></Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
            <div className="max-w-4xl w-full">
                <Link to="/" className="flex items-center gap-2 text-primary hover:underline mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Virtual Aadhaar Card */}
                    <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
                        <div className="bg-gradient-to-r from-primary to-accent p-4 text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Train className="w-6 h-6" />
                                <span className="font-bold">SmartRail Digital ID</span>
                            </div>
                            <Badge className="bg-white/20">UIDAI Verified (Mock)</Badge>
                        </div>
                        <CardContent className="p-6">
                            <div className="flex gap-6 mb-6">
                                <div className="w-32 h-40 bg-slate-200 rounded-md flex items-center justify-center border">
                                    <User className="w-16 h-16 text-slate-400" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-xl font-bold">{userData.fullName}</h3>
                                    <p className="text-sm text-muted-foreground">Aadhaar: XXXX-XXXX-{userData.aadhaarNumber.slice(-4)}</p>
                                    <p className="text-sm">DOB: {userData.dob || "XX-XX-XXXX"}</p>
                                    <p className="text-sm capitalize">Gender: {userData.gender}</p>
                                    <p className="text-xs text-muted-foreground mt-4">{userData.address}</p>
                                </div>
                            </div>
                            <div className="border-t pt-4 flex justify-center">
                                <img src={userData.qrCodeDataUrl} alt="Aadhaar QR" className="w-32 h-32" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Linked Bank Account */}
                    <Card className="shadow-lg border-2 border-green-100">
                        <CardHeader className="bg-green-50 border-b">
                            <CardTitle className="flex items-center gap-2 text-green-700">
                                <CreditCard className="w-5 h-5" /> Linked Bank Account
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            {userData.bankAccounts && userData.bankAccounts[0] ? (
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase font-semibold">Bank Name</p>
                                        <p className="font-medium">{userData.bankAccounts[0].bankName}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase font-semibold">Account Number</p>
                                        <p className="font-medium">XXXX-XXXX-{userData.bankAccounts[0].accountNumber.slice(-4)}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase font-semibold">IFSC</p>
                                            <p className="font-medium">{userData.bankAccounts[0].ifscCode}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase font-semibold">Wallet Connection</p>
                                            <p className="font-medium text-green-600">Active - Auto Pay</p>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-4 bg-slate-100 rounded-lg">
                                        <p className="text-center text-xs text-muted-foreground mb-1">Current Balance (Mock)</p>
                                        <p className="text-center text-2xl font-bold text-slate-700">₹{userData.bankAccounts[0].balance.toLocaleString()}</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-muted-foreground italic">No bank account linked.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Security Info */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                        <Shield className="w-10 h-10 text-primary" />
                        <span className="text-sm font-medium">Biometric Auth Enabled</span>
                    </div>
                    {/* Add more info boxes if needed */}
                </div>
            </div>
        </div>
    );
};

// Simple Badge component mockup since I'm not sure if it's exported globally
const Badge = ({ children, className }: any) => (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${className}`}>
        {children}
    </span>
);

export default Identity;
