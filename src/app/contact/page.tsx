"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function ContactPage() {
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
              { name: "How It Works", id: "/how-it-works" },
              { name: "FAQ", id: "/faq" },
              { name: "Testimonials", id: "/testimonials" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="South Bay Mini Splits"
            button={{ text: "Get Quote", href: "/contact" }}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Get a Quote"
            description="Reach out to our experts at 424-489-3555 or email us at Southbayminisplits310@gmail.com for professional service or fill out the form below."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your HVAC needs", rows: 5, required: true }}
            buttonText="Get Quote"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            logoText="South Bay Mini Splits"
            columns={[
              {
                title: "Contact",                items: [
                  { label: "310-707-3279", href: "tel:3107073279" },
                  { label: "424-489-3555", href: "tel:4244893555" },
                  { label: "Southbayminisplits310@gmail.com", href: "mailto:Southbayminisplits310@gmail.com" },
                ],
              },
              {
                title: "Region",                items: [
                  { label: "South Bay, LA", href: "#" },
                  { label: "Greater LA Area", href: "#" },
                ],
              },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}