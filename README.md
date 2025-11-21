# Roll20 Ficha Customizada & Sincronização de Tokens

Este projeto implementa uma ficha de personagem customizada para Roll20, com layout moderno, responsivo e automações para facilitar a gestão de atributos, vida, mana e habilidades.

## Funcionalidades
- **Ficha HTML/CSS**: Visual moderno, responsivo, com 15 habilidades fixas, campos editáveis para atributos, equipamentos, utilitários, vantagens e perícias.
- **Sincronização automática**: Script API (`atr.js`) sincroniza valores de PV, MP e atributos principais (FOR, DEX, CON, SAB, CAR, MGC) entre ficha e token.
- **Macros**: Exemplos de macros para exibir e ajustar vida/mana diretamente pelo token.
- **Estilo visual**: Inputs estilizados, layout flexbox, responsividade e organização clara.
- **Integração com scripts avançados**: Compatível com scripts como HealthColors para efeitos dinâmicos baseados na vida do token.

## Estrutura do Projeto
- `index.html`: Estrutura da ficha de personagem.
- `style.css`: Estilos visuais e responsivos da ficha.
- `atr.js`: Script Roll20 API para sincronização automática de atributos entre ficha e token.
- `prompt.txt`: Prompt para iniciar novas conversas ou evoluções do projeto.

## Como usar
1. Importe o HTML e CSS na ficha customizada do Roll20.
2. Configure os tokens para representar o personagem e vincule as barras aos atributos (`pv_atual`, `pv_max`, `mp_atual`, `mp_max`).
3. Adicione o script `atr.js` na área de API Scripts do Roll20 (Pro).
4. Use macros para exibir e ajustar valores de vida/mana conforme necessário.
5. Personalize e evolua o projeto conforme sua campanha!

## Objetivo
Automatizar e facilitar a gestão de personagens, tokens e atributos no Roll20, tornando a experiência mais dinâmica, visual e eficiente para mestres e jogadores.

---

Para dúvidas, melhorias ou novas integrações, consulte o `prompt.txt` para iniciar novas conversas com todo o contexto do projeto.

