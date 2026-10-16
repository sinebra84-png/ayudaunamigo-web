# Ayuda un Amigo · ayudaunamigo.com — instrucciones para agentes (Codex, Claude)

Actualizado: 15 de octubre de 2026. Lee este archivo completo antes de cambiar el sitio.

## Qué es
- Sitio de **Ayuda un Amigo**, iniciativa social de Grupo BRANEGA (BRANEGA S.A.C., RUC 20608097784), Arequipa.
- Estático: HTML, CSS y JS sin compilación. Mismo esquema que `sinebra84-png/branega-web`.
- Dominio `ayudaunamigo.com` comprado en GoDaddy (confirmado por el dueño el 15/10/2026). Plan: DNS en Cloudflare y hosting en Cloudflare Pages.
- Vista previa local: `python -m http.server 8123 --bind 127.0.0.1 --directory .`

## Archivos
| Ruta | Contenido |
|---|---|
| `index.html` | Una página: portada, qué hacemos, Mercadito, voluntariado, actividades, cómo ayudar |
| `styles.css` | Todo el diseño y las fuentes Barlow locales (WOFF2, subconjunto latino, OFL) |
| `app.js` | Cierra el menú móvil y arma el mensaje de WhatsApp del formulario (no guarda datos) |
| `privacidad.html`, `404.html` | Privacidad (borrador para abogado) y error |
| `_headers`, `robots.txt`, `sitemap.xml` | CSP estricta, caché y SEO |

## Datos confirmados por el dueño
- Lema: «Unidos para ayudar, unidos para servir».
- **No es asociación registrada**: es iniciativa de BRANEGA. Por eso **no se reciben donaciones en dinero** ni se emiten comprobantes; solo donaciones en especie coordinadas por WhatsApp. La web lo dice explícitamente. No cambiar esto hasta que exista asociación con RUC propio.
- En marcha: acompañamiento a adultos mayores y apoyo a abuelitos para vender sus productos (Mercadito). Talleres y actividades: en preparación.
- WhatsApp: +51 953 775 165 (el corporativo de BRANEGA). [PENDIENTE: confirmar si la ONG tendrá número propio].

## Reglas de contenido
- No publicar fotos, nombres ni datos de salud de adultos mayores sin autorización escrita.
- No inventar cifras de impacto, beneficiarios, aliados, testimonios ni fechas. Las metas 2026–2030 no son logros.
- No decir «fundación», «ONG registrada» ni ofrecer beneficios tributarios.
- La foto de actividades es real de Zion Club Campestre; los «Domingos» son una propuesta hasta que haya fechas confirmadas.
- Ilustraciones y logotipo son provisionales (SVG propio); reemplazar si el dueño entrega un logo.
- Mantener contraste WCAG AA y probar a 375 px.

## Pendientes
1. Confirmar con el dueño cómo funciona el Mercadito (entrega, pago al recibir) y qué productos mostrar; publicar fotos de productos reales.
2. Logo oficial, redes sociales y número/correo propio si existen.
3. Crear repositorio en GitHub y proyecto en Cloudflare Pages; mover el DNS de ayudaunamigo.com a Cloudflare.
4. Fechas reales de actividades y fotos con permiso.
5. Donaciones en dinero solo cuando haya asociación registrada, cuenta propia y revisión legal.

## Forma de trabajo
- Rama → vista previa → aprobación del dueño → `main` (integrar a `main` publica).
- Al terminar, actualiza los pendientes de este archivo.
