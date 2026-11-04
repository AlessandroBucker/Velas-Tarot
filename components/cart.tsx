"use client";
import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Product } from "@/lib/catalog";
import { brl, whatsappUrl } from "@/lib/utils";

export function Cart({ products }: { products: Product[] }) {
  const [open, setOpen] = useState(false); const [items, setItems] = useState<Product[]>([]);
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const add = (product: Product) => { setItems([...items, product]); setOpen(true); };
  const message = `Olá, Lahris! Gostaria de encomendar:\n${items.map(i => `• ${i.name} — ${brl(i.price)}`).join("\n")}\n\nTotal estimado: ${brl(total)}`;
  return <><button className="cart-button" aria-label="Abrir sacola" onClick={() => setOpen(true)}><ShoppingBag size={20}/><span>{items.length}</span></button>
    <div className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}><div className="drawer-header"><h2>Sua seleção</h2><button className="icon-button" onClick={() => setOpen(false)}><X/></button></div>
    {items.length === 0 ? <p className="muted">Sua sacola está esperando por algo especial.</p> : <><ul className="cart-list">{items.map((item, index) => <li key={`${item.id}-${index}`}><span>{item.name}</span><strong>{brl(item.price)}</strong><button onClick={() => setItems(items.filter((_, i) => i !== index))}>Remover</button></li>)}</ul><div className="cart-total"><span>Total estimado</span><strong>{brl(total)}</strong></div><a className="button full" target="_blank" href={whatsappUrl(message)}>Finalizar pelo WhatsApp</a></>}</div><div className={`scrim ${open ? "is-open" : ""}`} onClick={() => setOpen(false)}/>
    <section className="product-grid">{products.map(product => <article className="product-card" key={product.id}><img src={product.image} alt={`Vela ${product.name}`}/><div><p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p>{product.description}</p><strong>{brl(product.price)}</strong><button className="link-button" onClick={() => add(product)}>Adicionar à sacola →</button></div></article>)}</section></>;
}
