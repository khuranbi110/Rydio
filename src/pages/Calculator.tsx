import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { Calculator as CalcIcon, DollarSign, Fuel, Leaf, TrendingUp, FileText } from "lucide-react";

const Calculator = () => {
  const [emiData, setEmiData] = useState({
    loanAmount: "",
    interestRate: "",
    tenure: "",
  });

  const [fuelData, setFuelData] = useState({
    dailyKm: "",
    mileage: "",
    fuelPrice: "",
  });

  const [emiResult, setEmiResult] = useState<any>(null);
  const [fuelResult, setFuelResult] = useState<any>(null);

  const calculateEMI = () => {
    const P = parseFloat(emiData.loanAmount);
    const R = parseFloat(emiData.interestRate) / 12 / 100;
    const N = parseFloat(emiData.tenure) * 12;

    if (P && R && N) {
      const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalAmount = emi * N;
      const totalInterest = totalAmount - P;

      setEmiResult({
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest),
      });
    }
  };

  const calculateFuelCost = () => {
    const dailyKm = parseFloat(fuelData.dailyKm);
    const mileage = parseFloat(fuelData.mileage);
    const fuelPrice = parseFloat(fuelData.fuelPrice);

    if (dailyKm && mileage && fuelPrice) {
      const dailyFuel = dailyKm / mileage;
      const dailyCost = dailyFuel * fuelPrice;
      const monthlyCost = dailyCost * 30;
      const yearlyCost = dailyCost * 365;

      setFuelResult({
        dailyCost: Math.round(dailyCost),
        monthlyCost: Math.round(monthlyCost),
        yearlyCost: Math.round(yearlyCost),
      });
    }
  };

  const calculatorTypes = [
    {
      id: "emi",
      title: "EMI Calculator",
      icon: <CalcIcon className="h-5 w-5" />,
      description: "Calculate monthly installments for bike loans",
    },
    {
      id: "fuel",
      title: "Fuel Cost Calculator",
      icon: <Fuel className="h-5 w-5" />,
      description: "Estimate monthly/yearly fuel expenses",
    },
    {
      id: "tco",
      title: "Total Cost of Ownership",
      icon: <TrendingUp className="h-5 w-5" />,
      description: "Complete ownership cost analysis",
    },
    {
      id: "insurance",
      title: "Insurance Calculator",
      icon: <FileText className="h-5 w-5" />,
      description: "Estimate annual insurance premiums",
    },
    {
      id: "carbon",
      title: "Carbon Emission Calculator",
      icon: <Leaf className="h-5 w-5" />,
      description: "Environmental impact comparison",
    },
    {
      id: "eligibility",
      title: "Loan Eligibility Checker",
      icon: <DollarSign className="h-5 w-5" />,
      description: "Check your loan eligibility",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Bike Calculators</h1>
          <p className="text-muted-foreground">Make informed decisions with our comprehensive calculators</p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {calculatorTypes.map((calc) => (
            <Card key={calc.id} className="hover:shadow-bike transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-primary">{calc.icon}</div>
                  <CardTitle className="text-lg text-foreground">{calc.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{calc.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Main Calculators */}
        <Tabs defaultValue="emi" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="emi">EMI</TabsTrigger>
            <TabsTrigger value="fuel">Fuel Cost</TabsTrigger>
            <TabsTrigger value="tco">TCO</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="carbon">Carbon</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
          </TabsList>

          <TabsContent value="emi">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">EMI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      placeholder="e.g., 150000"
                      value={emiData.loanAmount}
                      onChange={(e) => setEmiData({...emiData, loanAmount: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
                    <Input
                      id="interestRate"
                      type="number"
                      placeholder="e.g., 10.5"
                      value={emiData.interestRate}
                      onChange={(e) => setEmiData({...emiData, interestRate: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                    <Input
                      id="tenure"
                      type="number"
                      placeholder="e.g., 3"
                      value={emiData.tenure}
                      onChange={(e) => setEmiData({...emiData, tenure: e.target.value})}
                    />
                  </div>
                  <Button onClick={calculateEMI} className="w-full">
                    Calculate EMI
                  </Button>
                </CardContent>
              </Card>

              {emiResult && (
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">EMI Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly EMI:</span>
                      <span className="font-bold text-primary">₹{emiResult.emi.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Amount:</span>
                      <span className="font-bold text-foreground">₹{emiResult.totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest:</span>
                      <span className="font-bold text-foreground">₹{emiResult.totalInterest.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="fuel">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Fuel Cost Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="dailyKm">Average Daily KM</Label>
                    <Input
                      id="dailyKm"
                      type="number"
                      placeholder="e.g., 50"
                      value={fuelData.dailyKm}
                      onChange={(e) => setFuelData({...fuelData, dailyKm: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mileage">Bike Mileage (km/l)</Label>
                    <Input
                      id="mileage"
                      type="number"
                      placeholder="e.g., 40"
                      value={fuelData.mileage}
                      onChange={(e) => setFuelData({...fuelData, mileage: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fuelPrice">Fuel Price (₹/liter)</Label>
                    <Input
                      id="fuelPrice"
                      type="number"
                      placeholder="e.g., 105"
                      value={fuelData.fuelPrice}
                      onChange={(e) => setFuelData({...fuelData, fuelPrice: e.target.value})}
                    />
                  </div>
                  <Button onClick={calculateFuelCost} className="w-full">
                    Calculate Fuel Cost
                  </Button>
                </CardContent>
              </Card>

              {fuelResult && (
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">Fuel Cost Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Daily Cost:</span>
                      <span className="font-bold text-primary">₹{fuelResult.dailyCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Cost:</span>
                      <span className="font-bold text-foreground">₹{fuelResult.monthlyCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Yearly Cost:</span>
                      <span className="font-bold text-foreground">₹{fuelResult.yearlyCost.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="tco">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Total Cost of Ownership Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Coming soon - Calculate complete ownership costs including purchase price, EMI, fuel, insurance, and maintenance.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Insurance Premium Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Coming soon - Estimate your annual insurance premium based on bike model and coverage type.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="carbon">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Carbon Emission Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Coming soon - Compare environmental impact between electric and petrol vehicles.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eligibility">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground">Loan Eligibility Checker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Coming soon - Check your loan eligibility based on income and credit score.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Calculator;