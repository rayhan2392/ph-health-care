import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const PublicNavbar = () => {
  const navItems = [
    { href: "#", label: "Consultation" },
    { href: "#", label: "Health Plans" },
    { href: "#", label: "Medicine" },
    { href: "#", label: "Diagnostics" },
    { href: "#", label: "NGOs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-medical-dark/10 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-6">
        
        {/* Brand Logo: Styled like WellEase */}
        <Link href="/" className="flex items-center space-x-1">
          <span className="text-2xl font-bold text-lavender-500">PH</span>
          <span className="text-2xl font-light text-medical-dark">Doc</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-medical-dark hover:text-lavender-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/login" className="text-sm font-medium text-medical-dark hover:text-lavender-500 transition-colors">
            Sign in
          </Link>
          <Link href="/register">
            <Button className="bg-lavender-500 text-white px-6 py-5 rounded-full text-sm font-medium hover:bg-lavender-600 transition-all shadow-sm">
              Get started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-medical-dark hover:text-lavender-500 hover:bg-lavender-500/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6 bg-medical-bg">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              {/* Mobile Brand */}
              <div className="flex items-center space-x-1 mb-8">
                <span className="text-2xl font-bold text-lavender-500">PH</span>
                <span className="text-2xl font-light text-medical-dark">Doc</span>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col space-y-6">
                {navItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-medical-dark hover:text-lavender-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Actions */}
                <div className="border-t border-medical-dark/10 pt-6 flex flex-col space-y-4">
                  <Link href="/login" className="text-center text-lg font-medium text-medical-dark hover:text-lavender-500 transition-colors py-2">
                    Sign in
                  </Link>
                  <Link href="/register" className="w-full">
                    <Button className="w-full bg-lavender-500 text-white rounded-full py-6 text-lg hover:bg-lavender-600 transition-all shadow-sm">
                      Get started
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
      </div>
    </header>
  );
};

export default PublicNavbar;