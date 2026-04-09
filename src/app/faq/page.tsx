"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function FaqPage() {
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
            { name: "FAQ", id: "/faq" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="South Bay Mini Splits"
          button={{ text: "Get Free Quote", href: "/contact" }}
        />
        
        <div id="faq" data-section="faq" className="py-24">
            <FaqSplitText 
                faqs={[
                    { id: "1", title: "What is the lifespan of a mini-split system?", content: "With proper maintenance, mini-split systems can last between 15 to 20 years." },
                    { id: "2", title: "How often should I clean my filters?", content: "It is recommended to clean your filters every 4 to 6 weeks, depending on usage and air quality." },
                    { id: "3", title: "Are these systems energy-efficient?", content: "Yes, mini-split systems are highly energy-efficient and can significantly reduce your utility bills compared to traditional HVAC units." },
                    { id: "4", title: "Do you offer financing?", content: "Please contact us to discuss our available financing options for new installations." }
                ]}
                sideTitle="Frequently Asked Questions"
                sideDescription="Everything you need to know about your HVAC system."
                faqsAnimation="slide-up"
                useInvertedBackground={true}
            />
        </div>

        <FooterBaseReveal
            logoText="South Bay Mini Splits"
            columns={[
                { title: "Contact", items: [
                    { label: "310-707-3279", href: "tel:3107073279" },
                    { label: "424-489-3555", href: "tel:4244893555" }
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