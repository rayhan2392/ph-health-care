/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";


const LoginForm = ({ redirect }: { redirect?: string }) => {
    const [state, formAction, isPending] = useActionState(loginUser, null);

    const getFieldError = (fieldName: string) => {
        if (state && state.errors) {
            const error = state.errors.find((err: any) => err.field === fieldName);
            return error.message;
        } else {
            return null;
        }
    };
     useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);
    return (
        <form action={formAction}>
            <FieldGroup>
                {redirect && <input type="hidden" name="redirect" value={redirect} />}
                <div className="grid grid-cols-1 gap-4">
                    {/* Email */}
                    <Field>
                        <FieldLabel htmlFor="email" className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Email
                        </FieldLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="m@example.com"
                        //   required
                        />

                        {getFieldError("email") && (
                            <FieldDescription className="text-red-600">
                                {getFieldError("email")}
                            </FieldDescription>
                        )}
                    </Field>

                    {/* Password */}
                    <Field>
                        <FieldLabel htmlFor="password" className="flex items-center gap-2">
                            <Lock className="h-4 w-4" />
                            Password
                        </FieldLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        //   required
                        />
                        {getFieldError("password") && (
                            <FieldDescription className="text-red-600">
                                {getFieldError("password")}
                            </FieldDescription>
                        )}
                    </Field>
                </div>
                <FieldGroup className="mt-4">
                    <Field>
                        <Button type="submit" disabled={isPending} className="w-full bg-lavender-500 hover:bg-lavender-600 text-white">
                            {isPending ? "Logging in..." : "Login"}
                        </Button>

                        <FieldDescription className="px-6 text-center text-sm text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <a href="/register" className="text-lavender-500 hover:text-lavender-600 font-medium hover:underline transition-colors">
                                Sign up
                            </a>
                        </FieldDescription>
                        <FieldDescription className="px-6 text-center text-sm text-muted-foreground">
                            <a
                                href="/forgot-password"
                                className="text-lavender-500 hover:text-lavender-600 font-medium hover:underline transition-colors"
                            >
                                Forgot password?
                            </a>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>
    );
};

export default LoginForm;