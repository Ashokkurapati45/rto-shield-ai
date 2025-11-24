import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  target: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
