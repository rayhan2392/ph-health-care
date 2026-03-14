import RegisterForm from "@/components/modules/auth/RegisterForm"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Clock } from "lucide-react"

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-medical-bg via-white to-lavender-500/5">
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen max-w-7xl mx-auto">

                    {/* Left Side - Benefits */}
                    <div className="hidden lg:block">
                        <div className="max-w-md space-y-12">
                            {/* Brand */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-5xl font-bold text-lavender-500">PH</span>
                                    <span className="text-5xl font-light text-medical-dark">Doc</span>
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold text-medical-dark leading-tight">
                                        Join Our Healthcare Community
                                    </h1>
                                </div>
                            </div>

                            {/* Key Benefits - Simplified */}
                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0 w-12 h-12 bg-lavender-500/10 rounded-full flex items-center justify-center">
                                        <CheckCircle className="h-6 w-6 text-lavender-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-medical-dark text-lg">Expert Doctors</h3>
                                        <p className="text-muted-foreground">Verified healthcare professionals</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0 w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-medical-dark text-lg">Secure & Private</h3>
                                        <p className="text-muted-foreground">Your data is fully protected</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-medical-dark text-lg">24/7 Access</h3>
                                        <p className="text-muted-foreground">Healthcare when you need it</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Registration Form */}
                    <div className="w-full max-w-md mx-auto lg:mx-0">
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-8">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <span className="text-3xl font-bold text-lavender-500">PH</span>
                                <span className="text-3xl font-light text-medical-dark">Doc</span>
                            </div>
                            <h1 className="text-2xl font-bold text-medical-dark mb-2">Create Account</h1>
                            <p className="text-muted-foreground">Join our healthcare community</p>
                        </div>

                        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                            <CardContent className="p-8">
                                <div className="hidden lg:block text-center mb-6">
                                    <h2 className="text-2xl font-bold text-medical-dark mb-2">Create Your Account</h2>
                                    <p className="text-muted-foreground">Fill in your details to get started</p>
                                </div>
                                <RegisterForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage