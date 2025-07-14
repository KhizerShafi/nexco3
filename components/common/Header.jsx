"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SiteLogo from "@/components/common/SiteLogo";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Sectors We Serve", href: "/sectors-we-serve" },
    { label: "Our Team", href: "/our-team" },
    { label: "Contact Us", href: "/contact" },
    { label: "Live Jobs", href: "joblist" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white border-b border-orange-500/20"
    >
      <div className="container mx-auto px-4 py-1.5">
        <div className="flex items-center justify-between">
          <SiteLogo />
          <DesktopNavigation
            navLinks={navLinks}
            isServicesOpen={isServicesOpen}
            setIsServicesOpen={setIsServicesOpen}
          />
          <BookTrial />
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <MobileNavigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navLinks={navLinks}
        />
      </div>
    </motion.header>
  );
}

const DesktopNavigation = ({ navLinks, isServicesOpen, setIsServicesOpen }) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8 relative">
      {navLinks.map((item, index) => (
        <motion.div
          key={item?.label}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onMouseEnter={() => item.label === "Services" && setIsServicesOpen(true)}
          onMouseLeave={() => item.label === "Services" && setIsServicesOpen(false)}
        >
          <Link
            href={`${item?.href}`}
            className="text-black hover:text-orange-500 transition-all duration-300 !font-semibold relative group"
          >
            {item?.label}
          </Link>
          <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"
            layoutId="underline"
          />
          {item.label === "Services" && (
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-3 w-[800px] bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-6 grid grid-cols-2 gap-8"
                >
                 <div>
  <Link href="/rpo" className="font-bold text-blue-900 mb-2"> Recruitment Process Outsourcing</Link>
  <ul className="space-y-1">
    <li><Link href="/rpo" className="text-sm text-blue-900 hover:text-orange-500">CV-Sourcing</Link></li>
    <li><Link href="/rpo" className="text-sm text-blue-900 hover:text-orange-500">Pre-Qualification</Link></li>
    <li><Link href="/rpo" className="text-sm text-blue-900 hover:text-orange-500">Lead Generation</Link></li>
    <li><Link href="/rpo" className="text-sm text-blue-900 hover:text-orange-500">CV-formatting</Link></li>
  </ul>

<Link href="/web-development">
  <h4 className="font-bold text-blue-900 mb-2 hover:underline">
    Web development
  </h4>
</Link>


  <ul className="space-y-1">
    <li><Link href="/web-development" className="text-sm text-blue-900 hover:text-orange-500">Web development</Link></li>
    <li><Link href="/web-development" className="text-sm text-blue-900 hover:text-orange-500">Website automation</Link></li>
    <li><Link href="/web-development" className="text-sm text-blue-900 hover:text-orange-500">AI engineering</Link></li>
  </ul>


 


<Link href="/360">
  <h4 className="font-bold text-blue-900 mb-2 hover:underline">
360 Recruitment
  </h4>
</Link>

  <ul className="space-y-1">
    <li><Link href="/360" className="text-sm text-blue-900 hover:text-orange-500">Direct Recruitment</Link></li>
  </ul>




</div>

<div>
<Link href="/bd">
  <h4 className="font-bold text-blue-900 mb-2 hover:underline">
Business Development
  </h4>
</Link>


  <ul className="space-y-1">
    <li><Link href="/bd" className="text-sm text-blue-900 hover:text-orange-500">Lead Generation</Link></li>
    <li><Link href="/bd" className="text-sm text-blue-900 hover:text-orange-500">Outreach campaign</Link></li>
    <li><Link href="/bd" className="text-sm text-blue-900 hover:text-orange-500">Client relationship support</Link></li>
    <li><Link href="/bd" className="text-sm text-blue-900 hover:text-orange-500">Proposal and assistance</Link></li>
    <li><Link href="/bd" className="text-sm text-blue-900 hover:text-orange-500">Admin support</Link></li>
  </ul>


<Link href="/va">
  <h4 className="font-bold text-blue-900 mb-2 hover:underline">
Virtual Assistant
  </h4>
</Link>
  <ul className="space-y-1">
    <li><Link href="/va" className="text-sm text-blue-900 hover:text-orange-500">Dedicated Recruitment Consultant</Link></li>
    <li><Link href="/va"  className="text-sm text-blue-900 hover:text-orange-500">Dedicated Business Development Manager</Link></li>
    <li><Link href="/va"  className="text-sm text-blue-900 hover:text-orange-500">Dedicated Social Media Manager</Link></li>
  </ul>



</div>

                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>
      ))}
    </nav>
  );
};

const MobileNavigation = ({ navLinks, isMenuOpen, setIsMenuOpen }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden mt-4 pb-4 border-t border-orange-500/20 overflow-hidden"
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((item, index) => (
              <motion.a
                key={item?.label}
                href={item?.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-900 hover:text-orange-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item?.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white w-fit"
              >
                <Link href="mailto:mehvish.asghar@nexcooutsourcing.com">
                  Book A Trial
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.button
      className="lg:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        {isMenuOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-6 h-6 text-black" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="w-6 h-6 text-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const BookTrial = () => {
  return (
    <motion.div
      className="hidden lg:block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <Link
          href="mailto:mehvish.asghar@nexcooutsourcing.com"
          className="relative z-10"
        >
          Book A Trial
        </Link>
      </Button>
    </motion.div>
  );
};

export default Header;