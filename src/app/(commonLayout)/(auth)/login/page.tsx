import LoginForm from "@/components/modules/auth/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-medical-bg px-4 py-12">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-1 mb-4">
                        <span className="text-3xl font-bold text-lavender-500">PH</span>
                        <span className="text-3xl font-light text-medical-dark">Doc</span>
                    </div>
                    <h1 className="text-2xl font-semibold text-medical-dark mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to your account to continue</p>
                </div>

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="space-y-1 pb-4">
                        <CardTitle className="text-xl text-center text-medical-dark">Sign In</CardTitle>
                        <CardDescription className="text-center">
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;