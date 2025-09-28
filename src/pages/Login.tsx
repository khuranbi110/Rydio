// src/components/GreenThemedAuthCard.tsx

import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Facebook, Twitter, Chrome } from "lucide-react";

// --- START --- Custom Green Gradient Colors (Adjust these to match your Tailwind config)
const BG_GRADIENT = "bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400";
const BUTTON_GRADIENT = "bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700";
// --- END ---

interface GreenThemedAuthCardProps {
  onLoginSuccess: () => void;
  onNavigateToSignUp: () => void;
}

const GreenThemedAuthCard: React.FC<GreenThemedAuthCardProps> = ({ onLoginSuccess, onNavigateToSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call for login
    setTimeout(() => {
      console.log("Login attempt with Green Theme:", { username, password });
      setIsLoading(false);
      // For demo, assume success if fields are filled
      if (username && password) {
        alert("Login Successful! (Green Theme)");
        onLoginSuccess();
      } else {
        alert("Please enter username and password.");
      }
    }, 1000);
  };

  return (
    // Outer container for the full-screen background
    <div className={`flex min-h-screen items-center justify-center ${BG_GRADIENT} p-4`}>
      {/* The main white card */}
      <Card className="w-full max-w-sm rounded-xl p-8 shadow-2xl bg-white border-none">
        <CardTitle className="text-2xl font-bold mb-6 text-center text-foreground">
          Login
        </CardTitle>

        <CardContent className="p-0 space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Input */}
            <div className="relative flex items-center border-b border-gray-200">
              <Mail className="absolute left-0 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Type your username"
                className="pl-6 border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            {/* Password Input */}
            <div className="relative flex items-center border-b border-gray-200">
              <Lock className="absolute left-0 h-4 w-4 text-gray-400" />
              <Input
                type="password"
                placeholder="Type your password"
                className="pl-6 border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right text-sm">
              <a href="#" className="text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Gradient Login Button */}
            <Button 
              type="submit" 
              className={`w-full text-white font-semibold py-6 rounded-full ${BUTTON_GRADIENT}`}
              disabled={isLoading}
            >
              {isLoading ? "LOADING..." : "LOGIN"}
            </Button>
          </form>

          {/* Social Sign Up Section */}
          <div className="text-center space-y-4 pt-4">
            <p className="text-gray-500 text-sm">Or Sign Up Using</p>
            
            <div className="flex justify-center space-x-4">
              <Button size="icon" className="bg-[#3b5998] hover:bg-[#3b5998]/90 rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-[#DB4437] hover:bg-[#DB4437]/90 rounded-full">
                <Chrome className="h-4 w-4" />
              </Button>
            </div>

            {/* Regular Sign Up Link */}
            <p className="text-gray-500 text-sm pt-4">Or Sign Up Using</p>
            <Button variant="link" onClick={onNavigateToSignUp} className="text-base text-teal-600 hover:text-teal-700">
              SIGN UP
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GreenThemedAuthCard;