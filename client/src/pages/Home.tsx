import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Users, Activity, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Abstract_digital_connection_between_citizens_and_government_c819b884.png";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary font-medium">
                Official Government Portal
              </div>
              <h1 className="text-4xl font-serif font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Empowering Citizens, <br />
                <span className="text-secondary">Strengthening Governance</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A unified platform to report public sector issues, access government schemes, and track the progress of our nation's development.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/report-issue">
                  <Button size="lg" className="gap-2 font-semibold">
                    Report an Issue <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/schemes">
                  <Button size="lg" variant="outline" className="font-semibold">
                    Browse Schemes
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="mx-auto lg:ml-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border/50 aspect-video w-full max-w-[600px]">
                <img
                  alt="Digital India Governance"
                  className="object-cover w-full h-full"
                  src={heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary">
              How We Serve You
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Direct access to government services and grievance redressal mechanisms.
            </p>
          </div>
          <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <AlertCircle className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Report Issues</CardTitle>
                  <CardDescription>
                    Identify problems in public sectors like roads, water, or electricity and notify authorities directly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/report-issue">
                    <Button variant="link" className="p-0 h-auto text-primary">Learn more &rarr;</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Government Schemes</CardTitle>
                  <CardDescription>
                    Discover welfare schemes from Central and State governments tailored for your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/schemes">
                    <Button variant="link" className="p-0 h-auto text-primary">Browse schemes &rarr;</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <Activity className="h-10 w-10 text-secondary mb-2" />
                  <CardTitle>Track Progress</CardTitle>
                  <CardDescription>
                    View real-time dashboards on resolution status and development project milestones.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/dashboard">
                    <Button variant="link" className="p-0 h-auto text-primary">View dashboard &rarr;</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold font-serif">1.2L+</span>
              <span className="text-sm opacity-80">Issues Resolved</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold font-serif">450+</span>
              <span className="text-sm opacity-80">Active Schemes</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold font-serif">28</span>
              <span className="text-sm opacity-80">States Covered</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-4xl font-bold font-serif">98%</span>
              <span className="text-sm opacity-80">Response Rate</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
