export type Product = { id: string; name: string; description: string; price: number; image: string; category: string; options?: string[] };
export const products: Product[] = [
  { id: "aurora", name: "Aurora", description: "Flor de laranjeira, baunilha e madeira clara.", price: 79, category: "Coleção essencial", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80", options: ["180g", "300g"] },
  { id: "brisa", name: "Brisa", description: "Capim-limão e bergamota para renovar a casa.", price: 69, category: "Coleção essencial", image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=900&q=80", options: ["180g", "300g"] },
  { id: "amora", name: "Amora", description: "Frutas vermelhas, jasmim e um toque de âmbar.", price: 89, category: "Edição especial", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=80", options: ["200g"] }
];
