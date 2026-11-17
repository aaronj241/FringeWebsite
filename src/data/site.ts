export const site = {
  name: 'Fringe Design',
  location: 'Canada',
  email: 'sales@fringedesign.ca',
  phone: '(844) 937-4649',
  phoneHref: 'tel:+18449374649',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/fringedesignltd/' },
    { label: 'Facebook', href: 'https://www.facebook.com/FringeDesignLtd/' },
  ],
};

export const services = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'User-friendly websites that bring together visual design and functionality to engage your audience.',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Logos and illustrations designed to communicate what makes your brand distinct.',
  },
  {
    id: 'web-email-hosting',
    title: 'Web & Email Hosting',
    description: 'Reliable hosting for your website and business email.',
  },
  {
    id: 'print-promotional-products',
    title: 'Print & Promotional Products',
    description: 'Business cards, printed materials, and custom merchandise that help people remember your brand.',
  },
];

export const projectCategories = [
  { id: 'graphic-design', title: 'Graphic Design' },
  { id: 'print-promotional-products', title: 'Print / Promotional Products' },
  { id: 'web-design', title: 'Web Design' },
] as const;

