// src/pages/AuthPage.tsx

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn, UserPlus } from "lucide-react";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border bg-card shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold text-foreground">
            {activeTab === "login" ? "Welcome Back" : "Create Account"}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {activeTab === "login" 
              ? "Enter your credentials to access the marketplace"
              : "Enter your details below to get started"
            }
          </p>
        </CardHeader>
        <CardContent>
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="w-full space-y-4"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">
                <LogIn className="h-4 w-4 mr-2" /> Login
              </TabsTrigger>
              <TabsTrigger value="signup">
                <UserPlus className="h-4 w-4 mr-2" /> Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm 
                onLoginSuccess={() => console.log("Redirect after login")} 
              />
            </TabsContent>

            <TabsContent value="signup">
              <SignUpForm 
                onSignUpSuccess={() => setActiveTab("login")} 
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;