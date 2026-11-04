# Sistema de Gestão para Produção Artesanal de Velas
## Especificação funcional consolidada e próximos passos

**Status do documento:** versão de trabalho  
**Data:** 31/10/2026  
**Objetivo:** consolidar as decisões tomadas até agora e organizar os assuntos que ainda precisam ser definidos antes do desenvolvimento.

> **Convenção:** “Decidido” indica uma escolha explícita do usuário. “Proposta” indica uma recomendação ainda não aprovada. “Pendente” indica que falta detalhar ou decidir.

---

## 1. Visão geral do sistema

Desenvolver uma aplicação web 100% online, responsiva para computador e celular, sem necessidade de instalar programas. Os módulos devem compartilhar uma base de dados integrada, evitando planilhas ou cadastros isolados.

O sistema terá duas áreas principais:

1. **Vitrine pública / área do cliente:** catálogo, apresentação dos produtos e encaminhamento de pedidos ao WhatsApp.
2. **Área administrativa privada:** gestão do negócio, produção, estoque, compras, vendas, custos, financeiro, clientes, qualidade e análises.

A primeira versão será orientada a um administrador com acesso total. A arquitetura deverá permitir adicionar usuários e permissões futuramente, sem implementar desde já um sistema complexo de múltiplos perfis.

## 2. Princípios e decisões gerais

- Interface intuitiva, profissional e responsiva.
- Dados centralizados e sincronizados entre dispositivos.
- Dashboard gerencial resumido, com acesso a módulos e análises detalhadas.
- Indicadores com detalhamento: clicar em um número, como faturamento, deve permitir consultar os registros que o compõem.
- Relatórios consultáveis no sistema e exportáveis para Excel e PDF.
- Preservar histórico de operações relevantes; correções devem ser auditáveis.
- Integrações entre módulos: compras alimentam estoque; produção consome matérias-primas e gera produtos em processo; qualidade e embalagem controlam a liberação; vendas movimentam produtos acabados; financeiro registra receitas, despesas e taxas.
- Não iniciar a implementação enquanto os requisitos ainda estiverem sendo definidos módulo a módulo.

## 3. Mapa de módulos

1. Dashboard gerencial.
2. Produtos e catálogo.
3. Estoque.
4. Planejamento e programação da produção.
5. Execução da produção e controle de lotes.
6. Controle de qualidade e liberação.
7. Embalagem e etiquetagem.
8. Compras e fornecedores.
9. Vendas e canais.
10. Clientes e leads.
11. Financeiro.
12. Custos e precificação.
13. Descontos e promoções.
14. Vitrine pública e análise de comportamento.
15. Relatórios.
16. Configurações, usuários e segurança.

A lista é uma organização funcional de trabalho; a divisão final de telas e módulos pode ser refinada durante o detalhamento.

---

## 4. Vitrine pública e área do cliente

### Decidido

- Página inicial atraente e intuitiva.
- Catálogo com fotos, descrições, preços por unidade, produtos, variações, kits e personalizações.
- O cliente poderá montar/organizar o pedido no site, mas a solicitação será encaminhada ao WhatsApp.
- Será possível aceitar encomendas mesmo quando não houver pronta entrega.
- Tipos de produto:
  - produto fixo/estático;
  - produto personalizável;
  - produto de catálogo com opções;
  - kit fechado e personalizável.
- Alguns produtos não terão seleção de variações.
- Produtos personalizáveis poderão oferecer opções como mensagem da embalagem, fragrância e tamanho.
- Captura de leads com nome, e-mail, telefone e interesses, quando o visitante demonstrar intenção de compra.
- Acompanhar quais produtos recebem mais interações e quais são vistos primeiro.
- A área pública não poderá acessar informações administrativas.

### Pendente

- Identidade visual, conteúdo final, imagens e textos.
- Campos exatos e momento de captura dos dados do lead.
- Definição detalhada dos eventos de navegação que serão registrados e dos controles de privacidade aplicáveis.

---

## 5. Produtos, catálogo e fichas técnicas

### Cadastro de produtos

Prever, conforme aplicável:

- Código/SKU, nome, categoria, descrição, fotos e status.
- Preço, custo, margem, peso e dimensões.
- Tempo de produção.
- Variações como fragrância, tamanho, cor, recipiente e acabamento.
- Personalizações de etiqueta, embalagem, fragrância, mensagem e pedidos especiais.
- Adicionais com custos próprios.
- Kits com composição de produtos, embalagens e custos.
- Descontinuação de produtos sem apagar seu histórico.

### Receitas e fichas técnicas

- Receitas com insumos e quantidades por unidade ou lote.
- Cálculo automático dos materiais necessários conforme produto e quantidade desejada.
- Exemplo apenas ilustrativo: 180 g de cera, 18 ml de essência, um pavio e um recipiente.
- Unidades e conversões precisam ser consistentes. Não converter massa em volume sem densidade configurada.
- As fichas técnicas deverão guardar a versão utilizada na produção para preservar o histórico.

### Parâmetros de fabricação

Os parâmetros deverão ser específicos para cada tipo de cera e/ou produto, conforme aplicável:

- Temperatura de derretimento/processamento da cera.
- Temperatura de adição da essência.
- Temperatura de envasamento.
- Temperatura mínima e máxima de trabalho.
- Tempo de cura e etapas do processo.

Os limites técnicos deverão ser definidos com base nas especificações e validações de cada produto, sem presumir valores universais.

---

## 6. Estoque avançado e integrado

### 6.1 Grupos de estoque

1. Matérias-primas: ceras, essências, corantes, pavios e aditivos.
2. Embalagens e materiais auxiliares: potes, tampas, etiquetas, caixas, sacolas e complementos.
3. Produtos em processo: velas em cura, acabamento ou aguardando aprovação.
4. Produtos acabados: velas, kits e personalizados liberados para venda.

### 6.2 Cadastro e unidades

Cada item poderá ter código/SKU, nome, categoria, tipo, unidade principal, unidades alternativas e conversões, estoques mínimo/máximo, fornecedor, custo, lote, validade, status e localização.

### 6.3 Locais e endereçamento — decisão aprovada

- Múltiplos locais de armazenamento com hierarquia: local > ambiente > estante/armário > prateleira/posição.
- Exemplo de código de endereço: `AT-EST-A-02`.
- Endereços configuráveis com capacidade, status e observações.
- Um mesmo material pode estar em vários endereços.
- O saldo deve ser consultável por material, lote, localização e situação.
- Transferências entre endereços não alteram o saldo total; controlar “em trânsito” é uma proposta a validar na especificação final.

### 6.4 Operação e regras — decisões aprovadas

- Pesquisa manual de materiais/produtos por código ou nome. QR Code e código de barras não são necessários na primeira versão.
- Movimentações comuns registradas diretamente pelo administrador, sem fluxo de aprovação.
- Bloquear operações que resultem em estoque insuficiente; não permitir saldo negativo.
- Movimentações efetivadas não devem ser apagadas; correções por estorno ou ajuste auditável.
- Registrar data/hora, item, quantidade/unidade, custo quando aplicável, origem, lote, responsável e justificativa.
- Movimentações incluem compras, consumo de produção, entrada da produção, vendas, perdas/descarte, devoluções, inventários e transferências.
- Reservas de materiais para ordens de produção e de produtos para pedidos. Reserva não é baixa definitiva; a baixa real ocorre com o consumo apontado. Cancelamentos devem liberar reservas.
- FEFO (primeiro que vence, primeiro que sai) para materiais com validade.
- Materiais/lotes vencidos, em quarentena ou reprovados devem ficar bloqueados.

### 6.5 Reposição, inventário e relatórios

- Estoque mínimo/máximo, saldo atual, reservado, consumo médio, prazo de reposição e quantidade sugerida.
- Sugestões de compra devem considerar saldo físico, reservas, ordens planejadas, pedidos confirmados, compras em trânsito, histórico e prazo de fornecimento.
- A compra exige confirmação manual.
- Alertas de estoque crítico, vencimento, ruptura, itens sem movimentação, consumo e cobertura.
- Inventários gerais e parciais, divergências, impacto financeiro, justificativa e ajustes auditáveis.
- Relatórios: posição atual, histórico de movimentos, consumo por período/produto/lote, evolução de custos, vencimentos, itens abaixo do mínimo, divergências, perdas, reservado/disponível, valor por categoria, giro/cobertura, rastreabilidade e necessidade projetada de compras.
- Exportação para Excel e PDF.

### 6.6 Valorização de estoque — pendente de aprovação

Foi proposta a possibilidade de usar custo médio ponderado móvel para matérias-primas, incluindo custos de aquisição incorporáveis, e custo real por lote para produtos acabados. A proposta ainda precisa ser confirmada. O sistema deve preservar custos históricos de lotes fabricados e evitar recálculo retroativo sem regra definida.

---

## 7. Planejamento e programação da produção

### 7.1 Objetivo

Transformar pedidos e necessidades de reposição em um plano de fabricação, ajudando a decidir o que produzir, quanto, quando e com quais recursos.

### 7.2 Geração de ordens — decisão aprovada

**Modelo híbrido: sugestões automáticas com confirmação pelo usuário.**

O sistema deverá identificar necessidades e sugerir ordens, mas o usuário decide quais sugestões serão confirmadas. Sugestões automáticas não iniciam a fabricação por conta própria.

O sistema deverá:
1. Identificar necessidades de produção.
2. Calcular quantidades recomendadas.
3. Consultar estoque, reservas e ordens já existentes.
4. Verificar matérias-primas, embalagens e capacidade disponível.
5. Apresentar sugestões com quantidades, prioridade, prazo e restrições.
6. Permitir ao usuário confirmar, editar, rejeitar ou adiar cada sugestão.
7. Após a confirmação, criar a ordem e realizar reservas pertinentes, respeitando as regras de estoque.

A lógica deverá evitar sugestões duplicadas para necessidades já cobertas por ordens existentes.

### 7.3 Fontes de necessidade

O planejamento deverá poder considerar:

- Pedidos de clientes confirmados e respectivos prazos.
- Estoque de produtos acabados e níveis mínimo/máximo.
- Reservas existentes.
- Ordens abertas, planejadas e em andamento.
- Necessidade de reposição.
- Previsão de demanda, quando houver dados suficientes.
- Disponibilidade de matérias-primas e embalagens.
- Tempos de fabricação e cura.
- Capacidade produtiva disponível.

### 7.4 Dados da ordem de produção

Campos previstos:

- Número único da ordem.
- Produto e configuração exata (fragrância, tamanho, pavio, recipiente, decoração etc.).
- Quantidade planejada.
- Receita/ficha técnica e versão utilizada.
- Ficha de embalagem padrão ou composição personalizada.
- Data de abertura e prazo desejado.
- Prioridade: baixa, normal, alta ou urgente.
- Origem: pedido, reposição ou planejamento manual.
- Responsável e observações.
- Materiais previstos, reservas, consumo real, perdas e resultados de qualidade.

**Regra importante:** um lote deve conter produtos iguais, com as mesmas características e itens. Variações relevantes devem ser fabricadas em lotes separados.

### 7.5 Materiais e reservas

- Calcular automaticamente materiais pela ficha técnica e quantidade planejada.
- Mostrar necessidade, saldo disponível, reservas e faltas.
- Considerar lotes, validade, bloqueios e FEFO, quando aplicável.
- Identificar necessidades de compra, sem realizar compras automaticamente.
- Reservar materiais para ordens confirmadas conforme regras de disponibilidade.
- A reserva não representa consumo físico; o consumo real é apontado durante a produção.
- Diferenças entre consumo previsto e real devem ser registradas.

### 7.6 Capacidade produtiva — requisitos previstos, regras ainda a detalhar

O planejamento deverá considerar, quando configurados:

- Preparação e fabricação.
- Envase.
- Equipamentos e capacidade de processamento.
- Disponibilidade de pessoas.
- Espaço de cura e estoque em processo.
- Tempo de cura.
- Embalagem e etiquetagem.

Tempo de cura deve ser controlado separadamente do tempo de ocupação da capacidade de fabricação, pois a cura pode ocorrer enquanto outros lotes são produzidos. Ainda assim, deve haver controle da capacidade de armazenamento durante a cura.

### 7.7 Calendário e fila — pendente de definição detalhada

Está prevista uma fila central de ordens, com filtros por produto, status, prioridade e prazo, além de calendário com visualizações diária, semanal e mensal.

O calendário deverá permitir visualizar ordens programadas, inícios e términos previstos, fabricação em andamento, cura, inspeções de qualidade, embalagem, atrasos e reprogramações.

Ainda é necessário definir como serão calculados os tempos, como será organizada a sequência de produção e se a programação será manual, assistida pelo sistema ou combinada.

### 7.8 Status previstos

- Rascunho.
- Aguardando materiais.
- Planejada.
- Programada.
- Liberada.
- Em produção.
- Em cura.
- Em qualidade.
- Concluída.
- Cancelada.

A lista final e as transições permitidas devem ser refinadas. A conclusão da fabricação não significa liberação automática para venda.

### 7.9 Indicadores previstos

- Ordens pendentes, programadas e atrasadas.
- Produção planejada versus realizada.
- Aderência ao planejamento.
- Disponibilidade de materiais.
- Capacidade utilizada.
- Tempo médio de produção.
- Produtos em cura.
- Diferenças entre consumo previsto e realizado.

---

## 8. Execução da produção e rastreabilidade de lotes

### Decidido / requisitos já definidos

- Produção controlada por ordens e lotes.
- Cada lote contém produtos com as mesmas características.
- A produção consome matérias-primas e gera produtos em processo.
- Registrar materiais e lotes consumidos, quantidades previstas e reais, perdas, datas, parâmetros de fabricação e resultados de testes.
- Preservar a rastreabilidade dos lotes de materiais usados. Se forem utilizadas duas partidas de cera, ambas devem constar no histórico.
- Controlar etapas de fabricação, cura, mão de obra, perdas, qualidade, aprovação, reaproveitamento e programação.
- O produto fabricado não fica automaticamente disponível para venda.

### Pendente

Detalhar o apontamento de início/fim de cada etapa, apontamento de mão de obra, perdas e reaproveitamento, registros de parâmetros e tratamento de interrupções.

---

## 9. Controle de qualidade e liberação

### 9.1 Fluxo decidido

1. Fabricação concluída.
2. Cura.
3. Inspeção geral.
4. Testes funcionais específicos por amostragem.
5. Avaliação dos critérios.
6. Aprovação automática, quarentena ou reprovação conforme as regras configuradas.
7. Liberação para embalagem.
8. Embalagem e etiquetagem.
9. Inspeção final.
10. Liberação para estoque de produtos acabados.

### 9.2 Modelo de inspeção — decisão aprovada

**Modelo híbrido:** inspeção geral de todas as unidades e testes específicos por amostragem.

A inspeção geral pode abranger integridade do recipiente, acabamento, superfície, centralização do pavio, peso conforme plano e defeitos aparentes.

Os testes por amostragem podem abranger desempenho de queima, estabilidade da chama, túnel, piscina de fusão, fuligem, comportamento do pavio, intensidade do aroma e duração da queima.

O plano de amostragem deverá ser configurável por produto/lote; não há um número fixo universal aprovado.

### 9.3 Aprovação — decisão aprovada

**A aprovação será automática quando todos os critérios obrigatórios forem cumpridos.** Não será necessário um clique humano de aprovação quando as condições estiverem atendidas.

O sistema deverá registrar data/hora, lote, critérios, resultados, responsáveis pelos registros e versão dos parâmetros aplicados.

Inspeções e testes poderão ser registrados por vários usuários autorizados, conforme permissões que serão configuradas. O administrador configura critérios, planos de inspeção e permissões.

Se houver inspeção pendente, teste obrigatório não realizado, cura incompleta, não conformidade aberta ou resultado fora do padrão, o lote não poderá ser liberado. A regra que diferencia quarentena de reprovação deve ser configurada e detalhada; não se deve presumir liberação especial manual, pois isso ainda não foi definido.

### 9.4 Critérios e não conformidades

- Ficha de qualidade configurável por produto e versão.
- Critérios possíveis: peso líquido/tolerância, aparência, acabamento, superfície, fragrância, pavio, cura, queima e recipiente.
- Limites técnicos devem ser validados para cada produto.
- Registrar ocorrências com código, produto, lote, categoria, descrição, evidências/fotos, responsável, causa, ação corretiva e resultado.
- Acompanhar reincidência, retrabalho, perdas e custo da qualidade.
- Histórico preservado e critérios versionados.

### 9.5 Indicadores

Taxa de aprovação/reprovação, não conformidades, retrabalho, perdas, tempo de liberação, custo da qualidade e reincidência.

---

## 10. Embalagem e etiquetagem

### 10.1 Fluxo

Uma ordem de embalagem é gerada a partir de um lote aprovado. O fluxo confere disponibilidade de materiais, reserva itens, seleciona layouts, gera/imprime etiquetas, registra embalagem efetiva, realiza conferência final e só então libera a quantidade aprovada para o estoque de acabados.

Embalagem parcial será permitida; o saldo aguardará embalagem. Falta de material deve bloquear a operação conforme as regras de estoque.

### 10.2 Ficha padrão de embalagem — decisão aprovada

Modelo híbrido:

- Cada produto terá uma ficha padrão de embalagem com materiais, quantidades por unidade, layouts, instruções, imagens, custo estimado, versão e vigência.
- A ordem de produção carrega a ficha padrão automaticamente.
- O administrador poderá alterar a composição para uma ordem específica, por exemplo, em encomendas especiais ou datas comemorativas.
- Alterações pontuais não modificam a ficha padrão.
- A ordem preserva uma cópia da composição realmente utilizada.
- Consumo real de materiais gera baixa de estoque; o custo de embalagem será incorporado ao custo do produto acabado.

### 10.3 Editor de layouts — decisão aprovada

Será criado um editor visual próprio dentro do sistema. Não foi escolhida a importação externa de layouts como fluxo principal.

O editor deverá permitir criar layouts do zero, posicionar textos e imagens/logotipo, configurar fontes, tamanhos, alinhamentos, margens e dimensões, duplicar, pré-visualizar e salvar versões.

Tipos previstos: etiqueta principal, inferior, advertências/cuidados, embalagem externa e lote.

Campos variáveis possíveis: nome do produto, fragrância, peso, código, lote, fabricação, composição, materiais/lotes utilizados, fornecedor quando aplicável, validade/recomendação e campos personalizados. A rastreabilidade real deverá ser respeitada.

Alterações em layouts não podem modificar etiquetas já impressas nem registros históricos. Reimpressões devem registrar data, quantidade e responsável.

### 10.4 Impressão — decisão aprovada

- Impressoras comuns jato de tinta ou laser.
- PDF e impressão pelo navegador para impressora instalada no computador.
- Configuração de A4 e outros formatos, etiqueta individual ou múltiplas por folha, margens, espaçamento, orientação, escala, cópias e pré-visualização.
- Respeitar dimensões físicas para reduzir desalinhamento.
- Não é necessária integração específica por fabricante na primeira versão.
- Histórico de impressão com produto/lote, layout/versão, quantidade, data/hora, responsável e reimpressões.

### 10.5 Conferência final

Verificar embalagem, etiqueta, lote, peso, quantidade, integridade e apresentação. A aprovação da vela não aprova automaticamente a embalagem. Só após a conferência final a unidade pode entrar no estoque de acabados.

---

## 11. Compras e fornecedores

### Requisitos já definidos

- Cadastro e histórico de fornecedores, preços e aquisições.
- Sugestões de compra alimentadas pelas necessidades de reposição e produção.
- Compra não deve ser efetivada automaticamente por uma sugestão.
- Recebimento deve permitir conferência, identificação de lote/validade, custo e endereço.
- O estoque só aumenta após recebimento e conferência.
- O histórico de custo de aquisição deve ser preservado.

### Pendente

Detalhar cotação, pedido de compra, aprovação (se necessária), frete e outros custos incorporáveis, recebimento parcial, devolução ao fornecedor e avaliação de fornecedores.

---

## 12. Vendas e canais

### Requisitos definidos

Centralizar vendas dos canais:

- Site próprio e WhatsApp.
- Instagram.
- Vendas presenciais.
- Mercado Livre, Shopee e Elo7.
- Lojas parceiras e consignação.
- Outros canais configuráveis no futuro.

Na primeira versão, o cadastro será manual e haverá importação por Excel/CSV. Integrações automáticas por APIs ficam para uma etapa futura.

Cada canal poderá ter comissões, taxas fixas/percentuais, frete, despesas adicionais, descontos e preço específico. Será possível comparar faturamento, margem e rentabilidade por canal.

Dados previstos para a venda: número, data, cliente, canal, produtos, quantidades, preço, desconto, frete, taxas, pagamento, total e situação.

Fluxo de pedido sugerido: recebido, aguardando confirmação, confirmado, em produção, pronto, enviado, entregue e cancelado.

### Consignação

Controlar mercadorias entregues, vendas realizadas, comissões e acertos.

### Pendente

Definir detalhes de devoluções, cancelamentos após produção, pagamentos parciais, conciliação financeira e importação de cada canal.

---

## 13. Clientes e leads

### Decidido

- Cadastro com nome, telefone, e-mail, cidade, origem, histórico de compras, produtos, preferências e observações.
- Leads capturados pela vitrine conforme interesse demonstrado.
- Análise de quais produtos recebem interações e quais são vistos primeiro.
- CRM voltado a consulta e gestão manual.

**Não incluir alertas automáticos de clientes inativos nem campanhas automáticas de recompra.** Essa automação não faz parte do escopo desejado.

---

## 14. Financeiro, custos e precificação

### Requisitos definidos em nível geral

- Centralizar receitas, despesas, taxas e custos.
- Calcular custos por insumo, vela e lote.
- Considerar custos de matérias-primas, embalagens, perdas e outros componentes que forem definidos.
- Comparar preço de venda, margem e rentabilidade por canal.
- Integrar vendas, compras, produção e estoque.
- Oferecer relatórios e detalhamento dos indicadores.

### Pendente

- Método de valorização de matérias-primas e produtos acabados.
- Composição completa do custo de produção e tratamento da mão de obra.
- Critérios de rateio de despesas indiretas.
- Formação de preço, margens-alvo, impostos, taxas, descontos e promoções.
- Fluxo de caixa, contas a pagar/receber, conciliação e categorias financeiras.

---

## 15. Dashboard, análises e relatórios

### Decidido

- Dashboard geral resumido, com módulos para análises detalhadas.
- Indicadores navegáveis até os registros que compõem cada valor.
- Relatórios consultáveis no sistema e exportáveis para Excel e PDF.

### Indicadores previstos

- Vendas, faturamento, custos, margem e rentabilidade por canal.
- Estoque disponível, reservado, crítico e em processo.
- Necessidades de compra.
- Produção planejada versus realizada.
- Ordens atrasadas e capacidade.
- Qualidade, não conformidades, perdas e retrabalho.
- Desempenho de produtos e interação na vitrine.

Os indicadores finais e suas fórmulas precisam ser definidos junto aos módulos correspondentes.

---

## 16. Segurança e administração

### Decidido

- Área administrativa protegida por login e senha.
- Primeira versão com um administrador de acesso total.
- Arquitetura preparada para usuários adicionais e permissões futuras.
- Registros importantes devem preservar histórico e autoria.
- A área pública não pode acessar dados administrativos.

### Pendente

Definir política de senha, recuperação de acesso, cópias de segurança, auditoria, anexos, retenção de dados e permissões específicas.

---

# 17. Próximos passos do levantamento funcional

Os itens abaixo são uma sequência recomendada de trabalho, não decisões já aprovadas.

## Próximo passo imediato: concluir o planejamento e a programação da produção

1. **Calendário:** definir visualizações diária, semanal e mensal e como reprogramar ordens.
2. **Prioridade:** definir como combinar urgência, prazo do cliente, disponibilidade de material e reposição de estoque.
3. **Capacidade:** decidir como cadastrar tempos de fabricação, capacidade de equipamentos, disponibilidade de pessoas e espaço de cura.
4. **Sequenciamento:** decidir se a ordem das tarefas será manual, sugerida pelo sistema ou híbrida.
5. **Materiais insuficientes:** definir se uma ordem pode ser programada como pendente de material e quais condições impedem sua liberação.
6. **Lotes e quantidades:** definir limites mínimos/máximos de lote e se o sistema poderá sugerir consolidação de necessidades para o mesmo produto/configuração.
7. **Reprogramações:** definir como tratar atrasos, mudanças de prazo e impacto sobre outros pedidos.
8. **Apontamento:** definir como registrar início, pausa, término, quantidade produzida e perdas.
9. **Status:** confirmar a lista final e as transições entre estados.

## Etapas seguintes sugeridas

10. Detalhar a execução da produção e os registros de lote.
11. Completar as regras de qualidade, quarentena, reprovação e tratamento de exceções.
12. Detalhar compras, cotações, pedidos e recebimento.
13. Detalhar vendas, devoluções, pagamentos e consignação.
14. Definir método de custeio, formação de preço e regras financeiras.
15. Definir indicadores e fórmulas dos dashboards e relatórios.
16. Especificar telas, navegação, permissões e requisitos de segurança.
17. Revisar os fluxos integrados e cenários de exceção.
18. Só depois do levantamento, priorizar a primeira versão (MVP), arquitetura técnica e plano de implementação.

---

## 18. Registro resumido das decisões explícitas mais importantes

| Tema | Decisão |
|---|---|
| Plataforma | Aplicação web online, responsiva, sem instalação |
| Áreas | Vitrine pública e área administrativa privada |
| Administração inicial | Um administrador com acesso total; preparada para expansão |
| Dashboard | Resumo geral com módulos e análises detalhadas |
| Relatórios | Consultáveis no sistema e exportáveis para Excel/PDF |
| Canais de venda | Cadastro manual e importação Excel/CSV na primeira versão; APIs futuramente |
| CRM | Gestão manual; sem alertas automáticos de clientes inativos ou campanhas de recompra |
| Estoque | Controle avançado, integrado e com múltiplos locais/endereço |
| Identificação de estoque | Pesquisa manual por código/nome; sem QR/barcode na primeira versão |
| Operação de estoque | Registro direto pelo administrador, sem aprovação comum |
| Estoque negativo | Bloqueado |
| Histórico de movimentos | Não apagar; corrigir por estorno/ajuste auditável |
| Reservas | Separadas da baixa física |
| Lotes de produção | Cada lote contém produtos com as mesmas características |
| Ordens de produção | Modelo híbrido: sistema sugere, usuário confirma |
| Inspeção de qualidade | Inspeção geral de todas as unidades + testes específicos por amostragem |
| Aprovação de qualidade | Automática quando todos os critérios obrigatórios forem atendidos |
| Embalagem | Ficha padrão por produto, com possibilidade de alteração por ordem |
| Editor de etiquetas | Editor visual próprio no sistema |
| Impressão | PDF/impressão pelo navegador em impressoras comuns |
| Disponibilidade para venda | Só após qualidade, embalagem e conferência final |

## 19. Observações de governança do documento

- Este arquivo consolida o que foi registrado nas conversas e separa decisões explícitas de propostas e pendências.
- Exemplos numéricos são ilustrativos, não parâmetros técnicos aprovados.
- Onde houver exigência de segurança, qualidade, composição, temperatura ou desempenho do produto, os limites devem ser configurados e validados; não presumir valores universais.
- Atualizar este documento à medida que novas decisões forem tomadas, preservando o histórico das escolhas e sinalizando o que ainda está em aberto.
