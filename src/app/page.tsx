"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { ShieldCheck } from "lucide-react";

export default function LandingPage() {
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
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="South Bay Mini Splits"
      button={{
        text: "Get Free Quote",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars"}}
      title="Expert HVAC Services in Los Angeles"
      description="South Bay Mini Splits brings 5 years of experience to your home. Expert installations, emergency repairs, and maintenance plans. Serving the entire Los Angeles region."
      tag="Trusted HVAC Experts"
      buttons={[
        {
          text: "Get A Free Quote",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775762199523-nj0x1bl5.png",          imageAlt: "South Bay Mini Splits Professional Setup"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763825901-uun254u6.png",          imageAlt: "HVAC Installation and Service"},
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="100% Satisfaction Rate on 500+ Homes Served"
      tagIcon={ShieldCheck}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="A Half-Decade of Comfort"
      description="For over 5 years, we've dedicated ourselves to keeping Los Angeles comfortable. Whether you need a new AC install, emergency heater repair, or a routine maintenance plan, our certified technicians are here to help."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763159686-9br4it8a.png?_wi=2"
      imageAlt="HVAC equipment in a home setting"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      features={[
        {
          title: "Mini Split Installation",          description: "High-efficiency cooling solutions for your home or office.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763159686-9br4it8a.png?_wi=3",          imageAlt: "AC Unit"},
        {
          title: "Emergency Repairs",          description: "24/7 support for critical heating and cooling failures.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763554730-i9dspw6o.png",          imageAlt: "Heater Repair"},
        {
          title: "Duct Cleaning & Maintenance",          description: "System inspections and routine care for clean air.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763554731-xh8a7pxz.png",          imageAlt: "Duct Cleaning"},
      ]}
      title="Our Professional HVAC Services"
      description="We specialize in modern cooling and heating solutions for residential and commercial spaces."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "5",          title: "Years of Excellence",          items: [
            "Serving South Bay",            "Professional experts",            "Licensed team"],
        },
        {
          id: "m2",          value: "100+",          title: "Businesses Served",          items: [
            "Commercial AC/Heating",            "System reliability",            "Expert service"],
        },
        {
          id: "m3",          value: "400+",          title: "Residential Homes",          items: [
            "Total home comfort",            "Custom solutions",            "Happy neighbors"],
        },
      ]}
      title="Our Trusted Reputation"
      description="Proven experience you can trust with 400+ residential and 100+ businesses served."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Alex R.",          role: "Homeowner",          company: "South Bay",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763159686-9br4it8a.png?_wi=5"},
        {
          id: "2",          name: "Sarah T.",          role: "Business Owner",          company: "LA Local",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763159687-ogu8itrl.png?_wi=3"},
        {
          id: "3",          name: "Marcus W.",          role: "Homeowner",          company: "Long Beach",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763159686-9br4it8a.png?_wi=6"},
        {
          id: "4",          name: "Elena P.",          role: "Homeowner",          company: "Torrance",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763159687-ogu8itrl.png?_wi=4"},
        {
          id: "5",          name: "David L.",          role: "Homeowner",          company: "Manhattan Beach",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AfvYEyFw72YgTF5rspxYRu8XQt/uploaded-1775763159686-9br4it8a.png?_wi=7"},
      ]}
      title="Client Satisfaction"
      description="Hear what our Los Angeles community has to say."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      tag="Contact Us Now"
      title="Need a Free Quote?"
      description="Ready to upgrade your system or need repair? Contact us today for a free estimate."
      buttonText="Request My Free Quote"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="South Bay Mini Splits"
      columns={[
        {
          title: "Contact",          items: [
            {
              label: "310-707-3279",              href: "tel:3107073279"},
            {
              label: "424-489-3555",              href: "tel:4244893555"},
          ],
        },
        {
          title: "Region",          items: [
            {
              label: "South Bay, LA",              href: "#"},
            {
              label: "Greater LA Area",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
