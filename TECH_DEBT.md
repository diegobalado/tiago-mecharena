# Tech Debt & Mejoras

## ✅ Corregido

- [x] **#1 — `console.log` en producción** — `src/js/main.js` ya no tiene console.log del scroll progress.
- [x] **#2 — Conflicto CSS hover vs JS tilt en `.mech-card`** — Se eliminó `transform` del CSS hover. El JS maneja todo: `mouseenter` aplica lift, `mousemove` agrega rotación, `mouseleave` remueve inline style.
- [x] **Barras de progreso no animaban** — `.progress-fill` y `.skill-fill` no tenían `width: 0%` inicial. El observer no podía animar de 0 → X porque arrancaban en 100% (auto).
- [x] **Barras de skill en perfil no animaban** — Usaban `style="width: X%"` inline en vez de `data-width`. Cambiado a `data-width` y agregado observer para `.skill-fill`.
- [x] **Duplicación de IntersectionObserver** — Refactorizado a un solo observer reutilizable que observa `.progress-section` y `.profile-skills`.
- [x] **`transition: all` en mech-card** — Causaba lag en el tilt porque `transform` se animaba. Cambiado a propiedades explícitas (`border-color`, `box-shadow`).
- [x] **Tilt muy sutil** — Divisor cambiado de 20 → 8 para rotación más notoria.

## 🐛 Bugs

- [ ] **#3 — Dos `@media (max-width: 768px)` separados** — `src/css/styles.css:1097` y `src/css/styles.css:1129`. Deberían unificarse en un solo bloque.

## 📊 Data Inconsistencias

- [ ] **#4 — Hero stat desactualizado** — `src/_data/heroStats.json:4` dice "48 Skin" pero hay 46 mechs en `mechs.json`.
- [ ] **#5 — Descripciones genéricas** — Los 46 mechs en `src/_data/mechs.json` tienen exactamente la misma descripción. Reemplazar con textos únicos por mech.
- [ ] **#6 — Social links muertos** — `src/_data/site.json` tiene todos los socials apuntando a `#`.

## 🏗️ Arquitectura / Mantenibilidad

- [ ] **#7 — CSS monolítico** — `src/css/styles.css` tiene ~1170 líneas. Separar en `base.css`, `layout.css`, `cards.css`, `profile.css`, `responsive.css`.
- [ ] **#8 — Sin minificación en build** — CSS y JS se sirven tal cual. Agregar `clean-css` y `terser` al build de Eleventy.
- [ ] **#9 — 38 .jpg sin procesar** — `src/images/mechas/nuevos/` tiene fotos raw. Crear script de conversión a .webp.
- [ ] **#10 — Sin favicon** — Agregar `favicon.ico` o `favicon.svg` al `<head>` en `base.njk`.
- [ ] **#11 — Sin página 404** — Crear `src/404.njk` con layout `base.njk`.
- [ ] **#12 — Sin ESLint/Prettier** — Configurar linter y formateador para JS/CSS.
- [ ] **#13 — Sin tests** — No hay tests de ningún tipo.
- [ ] **#14 — `clip-path` del hexágono repetido** — El polygon `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)` aparece ~10 veces. Extraer a clase CSS reutilizable.

## ♿ Accesibilidad

- [ ] **#15 — Profile img sin `alt`** — ~~`src/mechs.njk:21`~~ Falso positivo: ya tiene `alt="{{ mech.name }}"`. Eliminar.

## 🚀 Performance

- [ ] **#16 — `loading="eager"` en profile img** — `src/mechs.njk:21` usa `loading="eager"`. Cambiar a `loading="lazy"`.

## ✨ Feature agregada

- [x] **View Transitions API** — `@view-transition { navigation: auto }` en CSS + `view-transition-name` en hexágonos de card y perfil. Transición animada entre card y profile page.
- [x] **`pagereveal` para scroll a ancla** — `src/js/main.js` escucha `pagereveal` para hacer `scrollIntoView` del hash luego de una view transition.
