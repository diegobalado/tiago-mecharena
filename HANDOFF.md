# Handoff - MECH ARENA Portfolio

**Fecha:** 30 mayo 2026  
**Stack:** 11ty (Eleventy) v3 + Nunjucks  
**Ruta:** `/home/diego/Dev/tiago_mech-arena/portfolio`

---

## Estado Actual

Portfolio de robots mecha con estética cyberpunk/futurista. Funcionando con 11ty, imágenes locales de mechas.

---

## Cómo Ejecutar

```bash
cd /home/diego/Dev/tiago_mech-arena/portfolio
npm run dev      # Desarrollo con hot reload (http://localhost:8080)
npm run build    # Build producción → _site/
```

---

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── _data/              # Datos JSON (fácil de editar)
│   │   ├── site.json       # Título, subtitle, footer, socials
│   │   ├── navigation.json # Menú navbar
│   │   ├── mechs.json      # 10 mechs (nombre, rol, nivel, estrellas, color, imagen)
│   │   ├── floatingMechs.json # 6 mechs hexagonales del hero
│   │   ├── heroStats.json  # Stats del hero (12 Mechs, 6 Clases, 48 Skin)
│   │   ├── stats.json      # Stats de batalla
│   │   └── skills.json     # Barras de progreso
│   ├── _includes/
│   │   └── base.njk        # Layout principal (header, nav, footer)
│   ├── css/styles.css      # Todos los estilos
│   ├── js/main.js          # Scroll indicator, tilt cards, progress bars
│   ├── images/mechas/      # 10 imágenes de mechs (webp/jpg)
│   └── index.njk           # Página principal
├── eleventy.config.js      # Config 11ty
├── package.json
└── .gitignore
```

---

## Los 10 Mechs (en mechs.json)

| Nombre | Rol | Nivel | Estrellas | Color |
|--------|-----|-------|-----------|-------|
| AEGIS | Tanque de Asalto | 45 | ★★★★★ | blue |
| DEATHWALKER | Asesino Legendario | 38 | ★★★★☆ | purple |
| ECLIPSE | Francotirador | 52 | ★★★★★ | pink |
| KILLSHOT | Sigilo & Infiltración | 41 | ★★★★☆ | green |
| LANCER | Reconocimiento | 50 | ★★★★★ | gold |
| PARAGON | Soporte Técnico | 29 | ★★★☆☆ | blue |
| PARASITE | Control de Área | 60 | ★★★★★ | purple |
| SOLIS | Guerra Total | 55 | ★★★★★ | pink |
| SURGE | Defensor | 43 | ★★★★☆ | green |
| VORTEX | Aéreo Táctico | 48 | ★★★★★ | gold |

---

## Imágenes Disponibles (en src/images/mechas/)

```
Aegis.webp      Deathwalker.webp  Eclipse.webp
Killshot.webp   Lancer.webp       Paragon.webp
Parasite.webp    Solis.webp        Surge.webp     Vortex.webp
```

---

## Secciones de la Página

1. **Header** - Logo + nav sticky con blur
2. **Hero** - Título, stats, mech central hexagonal con 6 mechs orbitales
3. **Arsenal Completo** - Grid de 10 cards con hexágonos, estrellas, nivel
4. **Rendimiento en Batalla** - 4 stat cards (eliminaciones, victoria, win streak, precisión)
5. **Dominio Táctico** - 5 barras de progreso animadas
6. **Footer** - Socials + copyright

---

## Colores y Estilos

- **Background:** `#0a0e1a`
- **Primary gradient:** `#00c3ff` → `#7b2fff` → `#ff00aa`
- **Stars:** `#ffd700` (gold)
- **Font headers:** Orbitron
- **Font body:** Rajdhani
- **Cards:** glassmorphism con bordes neón

---

## Tareas Pendientes / Ideas

- [ ] Agregar más páginas (detalles de cada mech, blog, etc.)
- [ ] Implementar modo oscuro / light
- [ ] Animaciones de entrada al scroll (scroll reveal)
- [ ] Formulario de contacto
- [ ] SEO: meta tags, sitemap, robots.txt
- [ ] PWA: service worker, manifest
- [ ] Optimización de imágenes (convertir todas a webp)
- [ ] Lazy loading mejorado
- [ ] Test de accesibilidad
- [ ] Deploy: Vercel, Netlify, o GitHub Pages

---

## Comandos Útiles

```bash
npm run dev        # Dev server
npm run build      # Build producción
npm run clean      # Limpiar _site/
npx @11ty/eleventy --serve --port=3000  # Puerto custom
```

---

## Notas para Continuar

- Los datos están en JSON, fácil de modificar sin tocar templates
- Las imágenes están en `src/images/mechas/` (copiadas de `~/Imágenes/mechas/`)
- El CSS está separado en `src/css/styles.css`
- El JS está en `src/js/main.js` (scroll, tilt, progress bars)
- 11ty copia automáticamente los assets al `_site/`
- Usar `npm run dev` para desarrollo con hot reload
