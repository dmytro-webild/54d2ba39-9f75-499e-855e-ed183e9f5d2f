"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function HowItWorksPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="noise"
      cardStyle="subtle-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/#about" },
              { name: "Services", id: "/#services" },
              { name: "How It Works", id: "/how-it-works" },
              { name: "FAQ", id: "/#faq" },
              { name: "Contact", id: "/#contact" },
            ]}
            brandName="South Bay Mini Splits"
            button={{ text: "Get Free Quote", href: "/#contact" }}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardOne
            title="Our Simple 4-Step Process"
            description="Getting your HVAC system in peak condition is easy with our transparent process."
            textboxLayout="default"
            animationType="blur-reveal"
            useInvertedBackground={false}
            features={[
              { title: "1. Schedule a call", description: "Contact us to discuss your needs and set a time for a consultation.", videoSrc: "/" },
              { title: "2. On-site diagnosis", description: "Our experts assess your system and provide a clear plan of action.", videoSrc: "/" },
              { title: "3. Expert repair or install", description: "High-quality workmanship using top-tier components and tools.", videoSrc: "/" },
              { title: "4. Quality Guaranteed", description: "We stand by our work with full satisfaction on every project.", videoSrc: "/" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="South Bay Mini Splits"
            columns={[
              { title: "Contact", items: [{ label: "310-707-3279", href: "tel:3107073279" }, { label: "424-489-3555", href: "tel:4244893555" }] },
              { title: "Region", items: [{ label: "South Bay, LA", href: "#" }, { label: "Greater LA Area", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}