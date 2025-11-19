import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const schemesData = [
  {
    id: 1,
    title: "Pradhan Mantri Jan Dhan Yojana",
    description: "National Mission for Financial Inclusion to ensure access to financial services, namely, Banking/ Savings & Deposit Accounts, Remittance, Credit, Insurance, Pension in an affordable manner.",
    level: "Central",
    sector: "Finance",
    tags: ["Banking", "Insurance", "Pension"],
  },
  {
    id: 2,
    title: "Ayushman Bharat",
    description: "A flagship scheme of Government of India, was launched as recommended by the National Health Policy 2017, to achieve the vision of Universal Health Coverage (UHC).",
    level: "Central",
    sector: "Health",
    tags: ["Health Insurance", "Wellness"],
  },
  {
    id: 3,
    title: "State Housing Scheme (Example)",
    description: "Providing affordable housing to the urban poor with a focus on slum rehabilitation and affordable housing in partnership with public and private sectors.",
    level: "State",
    sector: "Housing",
    tags: ["Urban", "Housing"],
  },
  {
    id: 4,
    title: "Kisan Credit Card",
    description: "The scheme aims at providing adequate and timely credit support from the banking system under a single window with flexible and simplified procedure to the farmers.",
    level: "Central",
    sector: "Agriculture",
    tags: ["Farmers", "Credit"],
  },
  {
    id: 5,
    title: "Digital Literacy Mission",
    description: "Making one person in every family digitally literate is one of the integral components of the Prime Minister's vision of 'Digital India'.",
    level: "State",
    sector: "Education",
    tags: ["Digital", "Skill Development"],
  },
  {
    id: 6,
    title: "Clean Water Initiative",
    description: "Ensuring regular and long-term sustainable supply of fresh water to rural households through functional household tap connections.",
    level: "State",
    sector: "Infrastructure",
    tags: ["Water", "Rural"],
  }
];

export default function Schemes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");

  const filteredSchemes = schemesData.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === "all" || scheme.level.toLowerCase() === filterLevel.toLowerCase();
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary">Government Schemes</h1>
              <p className="text-muted-foreground mt-1">Find benefits and programs applicable to you.</p>
            </div>
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search schemes..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setFilterLevel}>
            <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
              <TabsTrigger value="all">All Schemes</TabsTrigger>
              <TabsTrigger value="central">Central</TabsTrigger>
              <TabsTrigger value="state">State</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSchemes.map((scheme, index) => (
              <motion.div
                key={scheme.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="flex flex-col h-full hover:border-primary/50 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={scheme.level === "Central" ? "default" : "secondary"} className="mb-2">
                        {scheme.level} Govt
                      </Badge>
                      <span className="text-xs font-medium text-muted-foreground">{scheme.sector}</span>
                    </div>
                    <CardTitle className="text-xl font-serif text-primary">{scheme.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base">
                      {scheme.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {scheme.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">View Details</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredSchemes.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No schemes found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
