import { DIYCalculators } from "@/components/diy-calculators";
import "./page.css";
import "./layout-overrides.css";
export const metadata = { title: "Faça você mesma | Lahris" };
export default function DIYPage(){return <main className="diy-page"><header><a className="brand" href="/">lahris<span>.</span></a><a className="back-link" href="/">← Voltar para a vitrine</a></header><section className="diy-intro"><p className="eyebrow">Ferramenta Lahris</p><h1>Planeje suas velas sem desperdício.</h1><p>Use sua própria receita, materiais e preços. Os resultados são estimativas para ajudar no planejamento — sempre valide a segurança e o desempenho da sua fórmula.</p></section><DIYCalculators/></main>}
