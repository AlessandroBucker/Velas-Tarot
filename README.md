# Lahris

Aplicação Next.js para a vitrine e a operação da marca Lahris.

## Desenvolvimento

1. Copie `.env.example` para `.env.local` e informe as chaves do projeto Supabase.
2. Crie um projeto Supabase e aplique a migração em `supabase/migrations` pelo CLI ou SQL Editor.
3. Execute `npm install` e `npm run dev`.

## Deploy

Conecte o repositório ao Vercel e cadastre as mesmas variáveis de ambiente. A Vercel fará previews para pull requests e deploy da branch principal.

Antes de produção, crie buckets privados `product-images`, `quality-evidence` e `label-assets` no Supabase Storage, configure backup e crie o primeiro perfil administrador em `profiles` com o `id` do usuário do Supabase Auth.
