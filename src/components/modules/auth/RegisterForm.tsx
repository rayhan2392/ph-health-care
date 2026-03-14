/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerPatient } from "@/services/auth/registerPatient";
import { useActionState } from "react";
import { User, MapPin, Mail, Lock } from "lucide-react";



const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerPatient, null);
    console.log(state, "state");

    const getFieldError = (fieldName: string) => {
        if (state && state.errors) {
            const error = state.errors.find((err: any) => err.field === fieldName);
            if (error) {
                return error.message;
            } else {
                return null;
            }
        } else {
            return null;
        }
    };
    return (
        <form action={formAction} className="space-y-5">
            <div className="space-y-5">
                {/* Name */}
                <Field>
                    <FieldLabel htmlFor="name" className="flex items-center gap-2 text-medical-dark font-medium">
                        <User className="h-4 w-4 text-lavender-500" />
                        Full Name
                    </FieldLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="h-11 mt-1.5"
                    />
                    {getFieldError("name") && (
                        <FieldDescription className="text-red-600 text-sm mt-1">
                            {getFieldError("name")}
                        </FieldDescription>
                    )}
                </Field>

                {/* Email */}
                <Field>
                    <FieldLabel htmlFor="email" className="flex items-center gap-2 text-medical-dark font-medium">
                        <Mail className="h-4 w-4 text-lavender-500" />
                        Email Address
                    </FieldLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="h-11 mt-1.5"
                    />
                    {getFieldError("email") && (
                        <FieldDescription className="text-red-600 text-sm mt-1">
                            {getFieldError("email")}
                        </FieldDescription>
                    )}
                </Field>

                {/* Address */}
                <Field>
                    <FieldLabel htmlFor="address" className="flex items-center gap-2 text-medical-dark font-medium">
                        <MapPin className="h-4 w-4 text-lavender-500" />
                        Address
                    </FieldLabel>
                    <Input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Enter your address"
                        className="h-11 mt-1.5"
                    />
                    {getFieldError("address") && (
                        <FieldDescription className="text-red-600 text-sm mt-1">
                            {getFieldError("address")}
                        </FieldDescription>
                    )}
                </Field>

                {/* Password Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field>
                        <FieldLabel htmlFor="password" className="flex items-center gap-2 text-medical-dark font-medium">
                            <Lock className="h-4 w-4 text-lavender-500" />
                            Password
                        </FieldLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Create password"
                            className="h-11 mt-1.5"
                        />
                        {getFieldError("password") && (
                            <FieldDescription className="text-red-600 text-sm mt-1">
                                {getFieldError("password")}
                            </FieldDescription>
                        )}
                    </Field>

                    <Field>
                        <FieldLabel htmlFor="confirmPassword" className="flex items-center gap-2 text-medical-dark font-medium">
                            <Lock className="h-4 w-4 text-lavender-500" />
                            Confirm Password
                        </FieldLabel>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            className="h-11 mt-1.5"
                        />
                        {getFieldError("confirmPassword") && (
                            <FieldDescription className="text-red-600 text-sm mt-1">
                                {getFieldError("confirmPassword")}
                            </FieldDescription>
                        )}
                    </Field>
                </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
                <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full h-12 bg-lavender-500 hover:bg-lavender-600 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    {isPending ? "Creating Account..." : "Create Account"}
                </Button>
            </div>

            {/* Sign In Link */}
            <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-lavender-500 hover:text-lavender-600 font-semibold hover:underline transition-colors"
                    >
                        Sign in here
                    </a>
                </p>
            </div>
        </form>
    );
};

export default RegisterForm;