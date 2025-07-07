export interface NavLink {
  name: string;
  href: string;
}

export interface TrainingItem {
  year: string;
  title: string;
  description: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  trainingsTitle: string;
}

export interface ServiceCardItem {
  title: string;
  description: string;
}

export interface ServicesContent {
    title: string;
    strengthsTitle: string;
    cards: ServiceCardItem[];
    summary: string;
    dyslexiaTitle: string;
    dyslexiaParagraphs: string[];
    analysisTitle: string;
    analysisParagraph: string;
    trainingTitle: string;
    trainingParagraph: string;
}

export interface PriceItemData {
  title: string;
  description: string;
  price: string;
}

export interface ProcessPricingContent {
  title: string;
  initialInfo: {
    title: string;
    description: string;
  };
  priceItems: PriceItemData[];
  location: string;
}

export interface ContactContent {
    title: string;
    intro: string;
    address: {
        title: string;
        lines: string[];
    };
    email: {
        title: string;
        address: string;
    };
    phone: {
        title: string;
        number: string;
    };
    form: {
        title: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        subjectPlaceholder: string;
        messagePlaceholder: string;
        submitButton: string;
        sending: string;
        success: string;
        error: string;
    };
}

export interface FooterContent {
    copyright: string;
}