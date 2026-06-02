# Handoff - MECH ARENA Portfolio

**Fecha:** 02 junio 2026  
**Stack:** 11ty (Eleventy) v3 + Nunjucks  
**Ruta:** `/home/diego/Dev/tiago-mecharena`

---

## Estado Actual

Portfolio de robots mecha con estética cyberpunk/futurista. Funcionando con 11ty, imágenes locales de mechas. Hexágonos con doble borde fino azul y pestañas de color trapezoidales.

---

## Cómo Ejecutar

```bash
cd /home/diego/Dev/tiago-mecharena
npm run dev      # Desarrollo con hot reload (http://localhost:8080)
npm run build    # Build producción → _site/
```

---

## Estructura del Proyecto

```
tiago-mecharena/
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
├── HANDOFF.md              # Handoff del proyecto
├── PROGRESS.md             # Tracking de progreso
├── package.json
└── .gitignore
```

---

## Los 10 Mechs (en mechs.json)

| Nombre | Rol | Nivel | Estrellas | Color |
|--------|-----|-------|-----------|-------|
| AEGIS | Tanque Protector | 5 | ★★★★☆ | purple |
| DEATHWALKER | Kamikaze Resistente | 9 | ★★★★★ | gold |
| ECLIPSE | Asesino Sigiloso | 7 | ★★★★★ | gold |
| KILLSHOT | Explorador Dañino | 6 | ★★★★☆ | purple |
| LANCER | Asesino Aéreo | 1 | ★☆☆☆☆ | grey |
| PARAGON | Atacante Veloz | 1 | ★☆☆☆☆ | grey |
| PARASITE | Tanque de Resistencia | 9 | ★★★★★ | gold |
| SOLIS | Apoyo Cegador | 9 | ★★★★★ | gold |
| SURGE | Masacre Total | 7 | ★★★★★ | gold |
| VORTEX | Tanque de Apoyo | 9 | ★★★★★ | gold |

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
- **Borde hexágonos:** `#00c3ff` (azul sólido)
- **Stars:** `#ffd700` (gold)
- **Font headers:** Orbitron
- **Font body:** Rajdhani
- **Cards:** glassmorphism con bordes neón

---

## Hexágonos - Estructura CSS

### Doble borde fino
```css
/* Borde exterior azul */
.elemento::before {
  inset: -2px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: #00c3ff;
}

/* Gap oscuro */
.elemento::after {
  inset: -1px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background: #0a0e1a;
}

/* Contenido interior */
.elemento-inner {
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
```

### Pestaña trapezoidal
```css
.tab {
  left: 29%;
  width: 44%;
  clip-path: polygon(0% 0%, 100% 0%, 87.5% 100%, 12.5% 100%);
}
```

---

## Tareas Pendientes / Ideas

- [ ] Hover effects mejorados en hexágonos
- [ ] Transiciones entre secciones
- [ ] Scroll reveal animations
- [ ] Click en mech para ver detalle
- [ ] Filtro de mechs por color/rol
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
- Las imágenes están en `src/images/mechas/`
- El CSS está separado en `src/css/styles.css`
- El JS está en `src/js/main.js` (scroll, tilt, progress bars)
- 11ty copia automáticamente los assets al `_site/`
- Usar `npm run dev` para desarrollo con hot reload
- Ver `PROGRESS.md` para tracking de tareas
