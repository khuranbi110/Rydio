import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/home.jpg";
import { Link } from "react-router-dom";
import { Calculator, MapPin, Calendar, BookOpen, Search, Zap } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "EXPLORE",
      description: "Browse thousands of bikes",
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "CALCULATE",
      description: "EMI & cost calculators",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "LOCATE",
      description: "Find nearby showrooms",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "BOOK",
      description: "Schedule test rides",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "LAUNCHES",
      description: "Latest bike releases",
    },
  ];

  const categories = ["MOTOR", "CHARGE", "TIME", "BATTERY", "DISTANCE"];

  return (
    <div className="min-h-screen bg-gradient-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-5xl font-bold text-white leading-tight">
                Decode the Essence of
                <br />
                <span className="text-bike-light">RIDING</span>
              </h1>
              <p className="text-xl text-white/90 mt-6 mb-8">
                Discover your perfect two-wheeler companion with comprehensive market insights, 
                calculations, and seamless booking experience.
              </p>
              <Link to="/marketplace">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 px-8 py-4 text-lg font-semibold shadow-bike">
                  Explore Now
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src={heroImage} 
                alt="Red Sports Bike" 
                className="max-w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow bg-card border-border">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {categories.map((category, index) => (
              <div key={index} className="text-accent font-bold text-lg tracking-wide">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What Would You Like To Do?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-bike transition-all duration-300 border-border bg-card">
              <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Calculate Costs</h3>
              <p className="text-muted-foreground mb-4">EMI, fuel costs, and total ownership calculations</p>
              <Link to="/calculator">
                <Button variant="outline" className="w-full">
                  Start Calculating
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-bike transition-all duration-300 border-border bg-card">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Find Showrooms</h3>
              <p className="text-muted-foreground mb-4">Locate nearby dealers and book test rides</p>
              <Link to="/showrooms">
                <Button variant="outline" className="w-full">
                  Find Dealers
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-bike transition-all duration-300 border-border bg-card">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Book Test Ride</h3>
              <p className="text-muted-foreground mb-4">Schedule your test ride experience today</p>
              <Link to="/bookings">
                <Button variant="outline" className="w-full">
                  Book Now
                </Button>
              </Link>
            </Card>
            <Card className="p-8 text-center hover:shadow-bike transition-all duration-300 border-border bg-card">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Find Showrooms</h3>
              <p className="text-muted-foreground mb-4">Login to the page</p>
              <Link to="/Login">
                <Button variant="outline" className="w-full">
                  Find Dealers
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;