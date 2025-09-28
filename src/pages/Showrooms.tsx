import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { MapPin, Phone, Clock, Star, Navigation as NavIcon, Calendar } from "lucide-react";

const Showrooms = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");

  const showrooms = [
    {
      id: 1,
      name: "Honda BigWing Delhi",
      brand: "Honda",
      address: "Connaught Place, New Delhi - 110001",
      city: "Delhi",
      phone: "+91 9876543210",
      rating: 4.5,
      timing: "9:00 AM - 8:00 PM",
      image: "/placeholder.svg",
      bikes: ["CBR 150R", "CBR 250R", "CB Hornet"],
      offers: ["10% off on accessories", "Free service for 1 year"],
      testRideAvailable: true,
    },
    {
      id: 2,
      name: "Yamaha Blue Square Mumbai",
      brand: "Yamaha",
      address: "Bandra West, Mumbai - 400050",
      city: "Mumbai",
      phone: "+91 9876543211",
      rating: 4.7,
      timing: "10:00 AM - 9:00 PM",
      image: "/placeholder.svg",
      bikes: ["R15 V4", "MT-15", "FZ-S"],
      offers: ["Extended warranty", "Monsoon special discount"],
      testRideAvailable: true,
    },
    {
      id: 3,
      name: "Bajaj Pro Biking Bangalore",
      brand: "Bajaj",
      address: "Koramangala, Bangalore - 560034",
      city: "Bangalore",
      phone: "+91 9876543212",
      rating: 4.3,
      timing: "9:30 AM - 8:30 PM",
      image: "/placeholder.svg",
      bikes: ["Pulsar NS200", "Dominar 400", "Avenger"],
      offers: ["EMI starting ₹2999", "Exchange bonus"],
      testRideAvailable: true,
    },
    {
      id: 4,
      name: "KTM Store Chennai",
      brand: "KTM",
      address: "T. Nagar, Chennai - 600017",
      city: "Chennai",
      phone: "+91 9876543213",
      rating: 4.6,
      timing: "10:00 AM - 8:00 PM",
      image: "/placeholder.svg",
      bikes: ["Duke 200", "RC 200", "Adventure 250"],
      offers: ["Ready to race kit", "Performance parts discount"],
      testRideAvailable: true,
    },
    {
      id: 5,
      name: "Royal Enfield Store Pune",
      brand: "Royal Enfield",
      address: "FC Road, Pune - 411005",
      city: "Pune",
      phone: "+91 9876543214",
      rating: 4.4,
      timing: "9:00 AM - 9:00 PM",
      image: "/placeholder.svg",
      bikes: ["Classic 350", "Meteor 350", "Himalayan"],
      offers: ["Genuine accessories", "Riding gear combo"],
      testRideAvailable: true,
    },
  ];

  const brands = ["All", "Honda", "Yamaha", "Bajaj", "KTM", "Royal Enfield", "TVS"];
  const cities = ["All", "Delhi", "Mumbai", "Bangalore", "Chennai", "Pune", "Hyderabad"];

  const filteredShowrooms = showrooms.filter((showroom) => {
    const matchesLocation = showroom.address.toLowerCase().includes(searchLocation.toLowerCase()) ||
                           showroom.city.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesBrand = selectedBrand === "all" || showroom.brand === selectedBrand;
    const matchesCity = selectedCity === "all" || showroom.city === selectedCity;
    return matchesLocation && matchesBrand && matchesCity;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Showrooms</h1>
          <p className="text-muted-foreground">Locate nearby dealers and book test rides</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Enter location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="flex-1"
              />
            </div>
            
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand.toLowerCase()}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase()}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredShowrooms.length} showrooms
          </p>
        </div>

        {/* Showroom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredShowrooms.map((showroom) => (
            <Card key={showroom.id} className="hover:shadow-bike transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-foreground">{showroom.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {showroom.brand}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {showroom.rating}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                  <p className="text-sm text-foreground">{showroom.address}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-foreground">{showroom.phone}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-foreground">{showroom.timing}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Available Bikes:</p>
                  <div className="flex flex-wrap gap-1">
                    {showroom.bikes.map((bike) => (
                      <Badge key={bike} variant="outline" className="text-xs">
                        {bike}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Current Offers:</p>
                  <div className="space-y-1">
                    {showroom.offers.map((offer, index) => (
                      <p key={index} className="text-xs text-green-600">• {offer}</p>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <NavIcon className="h-3 w-3 mr-1" />
                    Get Directions
                  </Button>
                  {showroom.testRideAvailable && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Book Test Ride
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Showroom Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Showrooms;