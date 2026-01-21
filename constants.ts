
import { NavItem, Feature, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'A Estratégia', href: '#mecanismo' },
  { label: 'Seu Lance', href: '#simulator' },
  { label: 'Diferenciais', href: '#features' },
  { label: 'Dúvidas', href: '#faq' },
];

export const FEATURES: Feature[] = [
  {
    title: 'O Movimento Certo',
    description: 'Cresça sem juros e sem as taxas dos bancos que prendem o seu jogo.',
    icon: '♘', // Cavalo (Movimento)
  },
  {
    title: 'Torre de Segurança',
    description: 'Sua conquista protegida pela maior administradora independente do Brasil.',
    icon: '♖', // Torre (Segurança)
  },
  {
    title: 'Abertura de Caminho',
    description: 'Compre bens sem precisar usar todo o seu capital de uma única vez.',
    icon: '♗', // Bispo (Caminho/Diagonal)
  },
  {
    title: 'Lance Tático',
    description: 'Estratégias de lances para você pegar seu crédito no tempo que planejou.',
    icon: '♙', // Peão (Lance)
  },
  {
    title: 'Tempo de Mestre',
    description: 'Enquanto o mercado corre contra você, nós jogamos a seu favor.',
    icon: '♔', // Rei (Mestre)
  },
  {
    title: 'Vitória Garantida',
    description: 'Você escolhe o que comprar com o poder de quem joga para ganhar.',
    icon: '♕', // Rainha (Vitória/Poder)
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    role: "Estrategista Imobiliário",
    text: "Fiz o movimento certo. Consegui meu imóvel sem os juros do banco. Foi o melhor xeque-mate da minha vida.",
    avatar: "https://picsum.photos/id/1012/100/100"
  },
  {
    id: 2,
    name: "Ana Costa",
    role: "Investidora",
    text: "Atendimento nota dez. Me ajudaram a planejar cada jogada até a contemplação.",
    avatar: "https://picsum.photos/id/1027/100/100"
  },
  {
    id: 3,
    name: "Ricardo M.",
    role: "Pai de Família",
    text: "Segurança para o futuro dos meus filhos. É como proteger o rei no tabuleiro: essencial.",
    avatar: "https://picsum.photos/id/1062/100/100"
  }
];
