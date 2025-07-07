import type { 
  NavLink, 
  TrainingItem, 
  HeroContent, 
  AboutContent,
  ServicesContent,
  ProcessPricingContent,
  ContactContent,
  FooterContent
} from './types';

import backgroundImage from './background.png';

export const NAV_LINKS: NavLink[] = [
  { name: 'Über mich', href: '#about' },
  { name: 'Angebot', href: '#offer' },
  { name: 'Ablauf & Preise', href: '#process' },
  { name: 'Kontakt', href: '#contact' },
];

export const HERO_CONTENT: HeroContent = {
  title: 'Herzlich Willkommen!',
  subtitle: 'Nadine Eichinger | Pädagogin und Legasthenie- & Dyskalkulie-Trainerin',
  backgroundImage: {
    src: backgroundImage,
    alt: 'Forest and mountains background'
  }
};

export const ABOUT_CONTENT: AboutContent = {
  title: 'Über mich',
  paragraphs: [
    'Mein Name ist Nadine Eichinger und ich bin Pädagogin und Legasthenie- und Dyskalkulie Trainerin. Nach 25 Jahren Arbeit als Pädagogin im Kindergarten, wollte ich mich beruflich verändern. Die Leidenschaft mit Kindern zu arbeiten ist geblieben.',
    'Jetzt begleite ich Kinder mit ihren individuellen Lernherausforderungen und unterstütze sie diese zu meistern. Mein Ansatz basiert auf Empathie, Geduld und kreativen Lernmethoden. Ich glaube daran, dass jeder Mensch Stärken hat, die es zu entdecken gilt. Mein Ziel ist es, eine positive Lernumgebung zu schaffen, in der sich die Kinder wohlfühlen und motiviert sind ihre Fähigkeiten zu entwickeln.',
    'Die enge Zusammenarbeit mit Eltern und LehrerInnen ist mir besonders wichtig, um so effektive Fortschritte zu erzielen und eine Entlastung für das gesamte Umfeld zu schaffen. Als Mama von zwei Kindern weiß ich auch aus persönlicher Erfahrung, wie belastend Lernherausforderungen für das Kind und die Eltern sind.',
    'Wenn Sie mehr über meine Arbeit erfahren möchten oder Fragen haben, zögern Sie nicht, mich zu kontaktieren!',
  ],
  trainingsTitle: 'Ausbildungen'
};

export const TRAININGS: TrainingItem[] = [
  { year: '1996 bis 1998', title: 'Kolleg für Kindergartenpädagogik', description: 'an der Bakip Wien 21' },
  { year: '2002', title: 'Förderung von teilleistungs- und verhaltensauffälligen Kindern Teil 1', description: '' },
  { year: '2003', title: 'Förderung von teilleistungs- und verhaltensauffälligen Kindern Teil 2', description: '' },
  { year: '2005', title: 'Sensorische Integration und ihre Anwendung', description: 'in Pädagogik und Therapie' },
  { year: '2012', title: 'Lehrgang „Mathematische Früherziehung“', description: '' },
  { year: '2014 bis 2016', title: 'Fortbildungslehrgang Legasthenie des ÖBVL', description: '' },
  { year: '2024 bis 2025', title: 'Fortbildungslehrgang Lerncoach, Legasthenie- und Dyskalkulie Trainerin', description: 'am BFI Wien' },
];

export const SERVICES_CONTENT: ServicesContent = {
    title: 'Mein Angebot',
    strengthsTitle: 'In diesen Bereichen kann ich Ihr Kind stärken:',
    cards: [
        { title: 'Lesen', description: 'Lesegenauigkeit, Lesetempo, Leseverständnis – individuell und systematisch aufgebaut.'},
        { title: 'Rechtschreibung', description: 'Strategien, Regelwissen und Sicherheit, um flüssig schreiben zu können.'},
        { title: 'Rechnen', description: 'Von Grundverständnis über Rechenstrategien bis zum Lösen von Textaufgaben.'},
        { title: 'Lernkompetenz', description: 'Konzentration, Motivation, Organisation, Arbeitsstrategien.'},
    ],
    summary: 'Ob bei Legasthenie, LRS, Dyskalkulie oder Konzentrationsproblemen: Ich arbeite nicht nach starren Programmen, sondern so, wie es für Ihr Kind am besten passt – mit individuell ausgewählten Methoden.',
    dyslexiaTitle: 'Legasthenie & Dyskalkulie',
    dyslexiaParagraphs: [
        'Die <span class="font-semibold">Legasthenie</span>, auch Lese-Rechtschreibstörung genannt, beschreibt gravierende Schwierigkeiten beim Lesen und / oder Schreiben, die trotz normaler Intelligenz und schulischer Förderung bestehen. Als Ursache werden genetische Gründe angenommen.',
        'Die <span class="font-semibold">Lese-Rechtschreibschwäche (LRS)</span> ist, im Gegensatz zur Legasthenie, eine erworbene, vorübergehende Schwäche, die ihre Ursachen meist in äußeren Umständen hat, wie z.B. die Trennung der Eltern, ein Todesfall in der Familie etc.',
        'Die <span class="font-semibold">Dyskalkulie</span> und Rechenschwäche sind genauso zu erklären, nur betrifft es das Rechnen.',
    ],
    analysisTitle: 'Die Lernstandsanalyse',
    analysisParagraph: 'Je nach Symptomatik führe ich eine genaue Lernstandsanalyse durch, um herauszufinden, wo Ihr Kind geradesteht. Dabei überprüfe ich die Teilleistungen, die Rechtschreibung, die Lesefähigkeit, die mathematischen Fähigkeiten bzw. die Konzentration. Dadurch kann ich gezielt auf die Bedürfnisse Ihres Kindes eingehen und dort ansetzen, wo Unterstützung notwendig ist.',
    trainingTitle: 'Das Training',
    trainingParagraph: 'Zu einem wöchentlichen Fixtermin bekommt Ihr Kind im Einzeltraining Unterstützung. Die Trainingseinheiten sind individuell auf die Bedürfnisse bzw. den Lernstand Ihres Kindes abgestimmt, um so Schritt für Schritt einen langfristigen Lernerfolg zu erzielen und gleichzeitig das Selbstwertgefühl zu steigern.',
};

export const PROCESS_PRICING_CONTENT: ProcessPricingContent = {
    title: 'Ablauf & Preise',
    initialInfo: {
        title: 'Erstinformation',
        description: 'In einem Telefonat besprechen wir Ihr Anliegen – kostenlos und unverbindlich.',
    },
    priceItems: [
        { title: 'Erst- bzw. Kennenlerngespräch', description: 'ca. 60 min.', price: '60 Euro' },
        { title: 'Lernstandsanalyse', description: 'ca. 3 Einheiten a 50 min. pro Einheit', price: '65 Euro' },
        { title: 'Klärungsgespräch', description: 'ca. 30 min.', price: '30 Euro' },
        { title: 'Wöchentliche Lerneinheiten', description: 'a 50 min.', price: '65 Euro' },
    ],
    location: 'Die Gespräche und alle Lerneinheiten finden in der Leopoldstraße 64/3/20, 3400 Klosterneuburg statt.',
};

export const CONTACT_CONTENT: ContactContent = {
    title: 'Kontakt aufnehmen',
    intro: 'Ich freue mich darauf, von Ihnen zu hören. Kontaktieren Sie mich gerne, um ein unverbindliches Erstgespräch zu vereinbaren oder nutzen Sie das Formular für Ihre Anfrage.',
    address: {
        title: 'Adresse',
        lines: ['Leopoldstraße 64/3/20', '3400 Klosterneuburg'],
    },
    email: {
        title: 'Email',
        address: 'nadine.eichinger@placeholder.com',
    },
    phone: {
        title: 'Telefon',
        number: '+43 123 456 789',
    },
    form: {
        title: 'Schreiben Sie mir eine Nachricht',
        namePlaceholder: 'Ihr Name',
        emailPlaceholder: 'Ihre Email-Adresse',
        subjectPlaceholder: 'Betreff',
        messagePlaceholder: 'Ihre Nachricht...',
        submitButton: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
        error: 'Fehler! Bitte versuchen Sie es später erneut.',
    }
};

export const FOOTER_CONTENT: FooterContent = {
    copyright: 'Nadine Eichinger. Alle Rechte vorbehalten.'
};