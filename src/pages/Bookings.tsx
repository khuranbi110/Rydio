import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Navigation from "@/components/Navigation";
import { Calendar as CalendarIcon, Clock, MapPin, Phone, Mail, Upload, Car } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Bookings = () => {
  const [testRideData, setTestRideData] = useState({
    name: "",
    email: "",
    phone: "",
    bikeModel: "",
    showroom: "",
    date: undefined as Date | undefined,
    timeSlot: "",
    notes: "",
  });

  const [sellBikeData, setSellBikeData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    bikeBrand: "",
    bikeModel: "",
    year: "",
    kmsDriven: "",
    condition: "",
    expectedPrice: "",
    description: "",
  });

  const bikeModels = [
    "Honda CBR 150R",
    "Yamaha R15 V4",
    "Bajaj Pulsar NS200",
    "KTM Duke 200",
    "Royal Enfield Classic 350",
    "TVS Apache RTR 160",
    "Hero Xtreme 160R",
  ];

  const showrooms = [
    "Honda BigWing Delhi",
    "Yamaha Blue Square Mumbai",
    "Bajaj Pro Biking Bangalore",
    "KTM Store Chennai",
    "Royal Enfield Store Pune",
  ];

  const timeSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "12:00 PM - 12:30 PM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM",
    "5:00 PM - 5:30 PM",
  ];

  const bikeBrands = ["Honda", "Yamaha", "Bajaj", "KTM", "Royal Enfield", "TVS", "Hero", "Suzuki"];
  const years = Array.from({ length: 20 }, (_, i) => (new Date().getFullYear() - i).toString());
  const conditions = ["Excellent", "Good", "Fair", "Needs Repair"];

  const handleTestRideSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Test ride booking:", testRideData);
    // Handle form submission
  };

  const handleSellBikeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sell bike listing:", sellBikeData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Bookings & Listings</h1>
          <p className="text-muted-foreground">Book test rides or list your bike for sale</p>
        </div>

        <Tabs defaultValue="test-ride" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="test-ride">Book Test Ride</TabsTrigger>
            <TabsTrigger value="sell-bike">Sell Your Bike</TabsTrigger>
          </TabsList>

          <TabsContent value="test-ride">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  Book a Test Ride
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Schedule your test ride and experience your dream bike
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTestRideSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Enter your name"
                        value={testRideData.name}
                        onChange={(e) => setTestRideData({...testRideData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={testRideData.email}
                        onChange={(e) => setTestRideData({...testRideData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={testRideData.phone}
                        onChange={(e) => setTestRideData({...testRideData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="bikeModel">Bike Model *</Label>
                      <Select value={testRideData.bikeModel} onValueChange={(value) => setTestRideData({...testRideData, bikeModel: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bike model" />
                        </SelectTrigger>
                        <SelectContent>
                          {bikeModels.map((model) => (
                            <SelectItem key={model} value={model}>
                              {model}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="showroom">Preferred Showroom *</Label>
                    <Select value={testRideData.showroom} onValueChange={(value) => setTestRideData({...testRideData, showroom: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select showroom" />
                      </SelectTrigger>
                      <SelectContent>
                        {showrooms.map((showroom) => (
                          <SelectItem key={showroom} value={showroom}>
                            {showroom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !testRideData.date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {testRideData.date ? format(testRideData.date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={testRideData.date}
                            onSelect={(date) => setTestRideData({...testRideData, date})}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="timeSlot">Time Slot *</Label>
                      <Select value={testRideData.timeSlot} onValueChange={(value) => setTestRideData({...testRideData, timeSlot: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requirements or questions..."
                      value={testRideData.notes}
                      onChange={(e) => setTestRideData({...testRideData, notes: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Book Test Ride
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sell-bike">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Sell Your Bike
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  List your bike for sale and connect with potential buyers
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSellBikeSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ownerName">Owner Name *</Label>
                      <Input
                        id="ownerName"
                        required
                        placeholder="Enter your name"
                        value={sellBikeData.ownerName}
                        onChange={(e) => setSellBikeData({...sellBikeData, ownerName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="sellEmail">Email Address *</Label>
                      <Input
                        id="sellEmail"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={sellBikeData.email}
                        onChange={(e) => setSellBikeData({...sellBikeData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="sellPhone">Phone Number *</Label>
                    <Input
                      id="sellPhone"
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={sellBikeData.phone}
                      onChange={(e) => setSellBikeData({...sellBikeData, phone: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bikeBrand">Bike Brand *</Label>
                      <Select value={sellBikeData.bikeBrand} onValueChange={(value) => setSellBikeData({...sellBikeData, bikeBrand: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {bikeBrands.map((brand) => (
                            <SelectItem key={brand} value={brand}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="sellBikeModel">Bike Model *</Label>
                      <Input
                        id="sellBikeModel"
                        required
                        placeholder="e.g., CBR 150R"
                        value={sellBikeData.bikeModel}
                        onChange={(e) => setSellBikeData({...sellBikeData, bikeModel: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="year">Manufacturing Year *</Label>
                      <Select value={sellBikeData.year} onValueChange={(value) => setSellBikeData({...sellBikeData, year: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="kmsDriven">KMs Driven *</Label>
                      <Input
                        id="kmsDriven"
                        type="number"
                        required
                        placeholder="e.g., 15000"
                        value={sellBikeData.kmsDriven}
                        onChange={(e) => setSellBikeData({...sellBikeData, kmsDriven: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="condition">Condition *</Label>
                      <Select value={sellBikeData.condition} onValueChange={(value) => setSellBikeData({...sellBikeData, condition: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          {conditions.map((condition) => (
                            <SelectItem key={condition} value={condition}>
                              {condition}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="expectedPrice">Expected Price (₹) *</Label>
                    <Input
                      id="expectedPrice"
                      type="number"
                      required
                      placeholder="e.g., 85000"
                      value={sellBikeData.expectedPrice}
                      onChange={(e) => setSellBikeData({...sellBikeData, expectedPrice: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your bike's condition, service history, modifications, etc..."
                      value={sellBikeData.description}
                      onChange={(e) => setSellBikeData({...sellBikeData, description: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label>Upload Photos</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Click to upload or drag and drop photos
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Maximum 10 photos, up to 5MB each
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    List Your Bike
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Bookings;