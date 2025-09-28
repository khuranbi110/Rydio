import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Users, Target, Award, Zap, Shield, Clock, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Calculators",
      description: "Advanced EMI, fuel cost, and TCO calculators to help you make informed decisions.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trusted Platform",
      description: "Verified showrooms and authentic listings ensure a safe buying experience.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Real-time Updates",
      description: "Latest launches, prices, and availability updated in real-time.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Personalized Experience",
      description: "Tailored recommendations based on your preferences and requirements.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "1,000+", label: "Bike Models" },
    { number: "500+", label: "Partner Showrooms" },
    { number: "25+", label: "Cities Covered" },
  ];

  const team = [
    {
      role: "Founder & CEO",
      description: "Passionate about two-wheelers with 15+ years in automotive industry.",
    },
    {
      role: "Head of Operations",
      description: "Expert in marketplace operations and customer experience.",
    },
    {
      role: "Tech Lead",
      description: "Full-stack developer specializing in automotive platforms.",
    },
    {
      role: "Marketing Director",
      description: "Digital marketing expert with focus on automotive sector.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Rydio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's most comprehensive two-wheeler marketplace, helping millions of riders find their perfect match.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To revolutionize the two-wheeler buying experience in India by providing a comprehensive platform 
                that connects buyers with the right bikes, showrooms, and services. We believe in making bike 
                ownership accessible, transparent, and enjoyable for everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Award className="h-6 w-6 mr-2 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become India's most trusted two-wheeler platform, empowering every rider with the tools, 
                information, and services they need to make the best decisions. We envision a future where 
                buying a bike is as simple as a few clicks.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What Makes Us Special</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-bike transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-hero rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-bike-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border bg-card">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Have questions? We'd love to hear from you.</p>
                <a href="mailto:info@Rydio.com" className="text-primary hover:underline">
                  info@Rydio.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Speak with our customer support team.</p>
                <a href="tel:+911800123456" className="text-primary hover:underline">
                  1800-123-456
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Come to our headquarters in Bangalore.</p>
                <p className="text-primary">
                  HSR Layout, Bangalore<br />
                  Karnataka - 560102
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Find Your Perfect Bike?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of riders who have found their dream bikes through Rydio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Explore Marketplace
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Calculate EMI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;