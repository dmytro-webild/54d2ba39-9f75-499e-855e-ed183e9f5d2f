"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function TestimonialsPage() {
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
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Services", id: "/services" },
            { name: "How It Works", id: "/how-it-works" },
            { name: "FAQ", id: "/faq" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="South Bay Mini Splits"
          button={{ text: "Get Quote", href: "/contact" }}
        />
        
        <div id="testimonials" data-section="testimonials" className="py-24">
            <TestimonialCardOne
              animationType="slide-up"
              textboxLayout="default"
              gridVariant="asymmetric-60-wide-40-narrow"
              useInvertedBackground={true}
              testimonials={[
                { id: "1", name: "Alex R.", role: "Homeowner", company: "South Bay", rating: 5 },
                { id: "2", name: "Sarah T.", role: "Business Owner", company: "LA Local", rating: 5 },
                { id: "3", name: "Marcus W.", role: "Homeowner", company: "Long Beach", rating: 5 },
                { id: "4", name: "Elena P.", role: "Homeowner", company: "Torrance", rating: 5 },
              ]}
              title="Our Customer Stories"
              description="Read about the experiences of our valued clients in the Los Angeles area. Reach out at Southbayminisplits310@gmail.com."
            />
        </div>

        <FooterBaseReveal
            logoText="South Bay Mini Splits"
            columns={[
                { title: "Contact", items: [
                    { label: "310-707-3279", href: "tel:3107073279" },
                    { label: "424-489-3555", href: "tel:4244893555" },
                    { label: "Southbayminisplits310@gmail.com", href: "mailto:Southbayminisplits310@gmail.com" }
                ]},
                { title: "Region", items: [
                    { label: "South Bay, LA", href: "#" },
                    { label: "Greater LA Area", href: "#" }
                ]}
            ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
