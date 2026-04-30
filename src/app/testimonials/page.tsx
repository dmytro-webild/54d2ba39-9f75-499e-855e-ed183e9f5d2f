"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
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
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Services", id: "/services" },
              { name: "FAQ", id: "/faq" },
              { name: "Testimonials", id: "/testimonials" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="South Bay Mini Splits"
            button={{ text: "Get Quote", href: "/contact" }}
          />
        </div>
        
        <div id="testimonials" data-section="testimonials" className="py-24">
            <TestimonialCardFive
              title="Customer Experiences"
              description="See why homeowners and businesses in Los Angeles trust us with their climate control needs."
              textboxLayout="default"
              useInvertedBackground={true}
              testimonials={[
                { id: "1", name: "Alex R.", date: "October 2023", title: "Excellent Service", quote: "Professional installation and quick turnaround. My home is finally cool!", tag: "Homeowner", avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
                { id: "2", name: "Sarah T.", date: "November 2023", title: "Highly Recommended", quote: "The team was punctual, clean, and very knowledgeable about my system.", tag: "Business Owner", avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
                { id: "3", name: "Marcus W.", date: "January 2024", title: "Great Value", quote: "Incredible efficiency improvements after their maintenance check.", tag: "Homeowner", avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
              ]}
            />
        </div>

        <div id="footer" data-section="footer">
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
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}