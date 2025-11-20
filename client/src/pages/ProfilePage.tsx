import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, MapPin, Phone, Mail, FileText, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Sidebar / User Card */}
          <Card className="h-fit">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-serif text-primary border-4 border-background shadow-lg">
                RK
              </div>
              <CardTitle className="text-xl">Rahul Kumar</CardTitle>
              <CardDescription>Citizen ID: IND-8821-992</CardDescription>
              <Badge className="mt-2 w-fit mx-auto bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Verified Citizen</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" /> rahul.k@example.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Pune, Maharashtra
              </div>
              <Separator />
              <div className="pt-2">
                <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                  Log Out
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Activity</CardTitle>
                <CardDescription>Track your reported issues and applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-4 rounded-lg border bg-muted/5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs font-normal">Infrastructure</Badge>
                        <span className="text-xs text-muted-foreground">Reported on 12 Nov 2024</span>
                      </div>
                      <h4 className="font-medium leading-none">Potholes on Main Road, Sector 4</h4>
                      <p className="text-sm text-muted-foreground">Reference: #CIV-2024-8921</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-yellow-200 gap-1">
                        <Clock className="h-3 w-3" /> In Progress
                      </Badge>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-4 rounded-lg border bg-muted/5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs font-normal">Health</Badge>
                        <span className="text-xs text-muted-foreground">Applied on 10 Oct 2024</span>
                      </div>
                      <h4 className="font-medium leading-none">Ayushman Bharat Card Application</h4>
                      <p className="text-sm text-muted-foreground">Reference: #SCH-2024-1102</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Approved
                      </Badge>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Schemes</CardTitle>
                <CardDescription>Based on your profile and location.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow cursor-pointer">
                    <h4 className="font-medium text-primary mb-2">Solar Rooftop Subsidy</h4>
                    <p className="text-sm text-muted-foreground mb-3">Get up to 40% subsidy on solar panel installation for residential homes.</p>
                    <Link href="/schemes">
                      <span className="text-xs font-semibold text-primary hover:underline">Learn More &rarr;</span>
                    </Link>
                  </div>
                  <div className="p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow cursor-pointer">
                    <h4 className="font-medium text-primary mb-2">Skill India Training</h4>
                    <p className="text-sm text-muted-foreground mb-3">Free vocational training programs for youth in Maharashtra.</p>
                    <Link href="/schemes">
                      <span className="text-xs font-semibold text-primary hover:underline">Learn More &rarr;</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
