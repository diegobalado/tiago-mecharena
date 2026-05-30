# MECH ARENA - Portfolio

Portfolio de robots mecha construido con [Eleventy (11ty)](https://www.11ty.dev/) v3.

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── _data/          # Datos JSON para templates
│   │   ├── site.json         # Configuración del sitio
│   │   ├── navigation.json   # Menú de navegación
│   │   ├── mechs.json        # Datos de los mechs
│   │   ├── stats.json        # Estadísticas de batalla
│   │   ├── skills.json       # Habilidades
│   │   ├── floatingMechs.json # Mechs flotantes del hero
│   │   └── heroStats.json    # Stats del hero
│   ├── _includes/      # Templates y layouts
│   │   └── base.njk          # Layout principal
│   ├── css/            # Estilos
│   │   └── styles.css
│   ├── js/             # JavaScript
│   │   └── main.js
│   └── index.njk       # Página principal
├── _site/              # Site generado (output)
├── eleventy.config.js  # Configuración de 11ty
└── package.json
```

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Limpiar site generado
npm run clean
```

## Personalización

### Cambiar mechs
Edita `src/_data/mechs.json` para agregar, modificar o eliminar mechs.

### Cambiar imágenes
Las imágenes están en URLs de Unsplash. Reemplaza las URLs en los archivos JSON de `_data/`.

### Cambiar colores
Los colores están definidos en `src/css/styles.css` como variables CSS al inicio del archivo.

### Agregar páginas
Crea archivos `.njk` o `.md` en `src/` y 11ty los procesará automáticamente.
