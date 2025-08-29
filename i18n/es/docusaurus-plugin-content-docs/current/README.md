# Documentación de Galio en Español

Bienvenido a la documentación en español del framework Galio para React Native.

## ¿Qué es Galio?

Galio es un framework gratuito y de código abierto para React Native que proporciona componentes UI hermosos y personalizables, junto con un sistema de temas robusto.

## Características

- 🎨 **Componentes UI hermosos** - Más de 20 componentes listos para usar
- 🎯 **Sistema de temas** - Personalización completa de colores y estilos
- 📱 **Multiplataforma** - Funciona en iOS y Android
- ⚡ **Rendimiento optimizado** - Construido con las mejores prácticas de React Native
- 🔧 **Fácil de usar** - API simple e intuitiva
- 🌍 **Soporte para TypeScript** - Tipos completos incluidos

## Instalación

```bash
npm install galio-framework
# o
yarn add galio-framework
```

## Uso rápido

```jsx
import React from 'react';
import { Button, Text, Block } from 'galio-framework';

const App = () => {
  return (
    <Block flex center middle>
      <Text h1>¡Hola Galio!</Text>
      <Button color="primary" onPress={() => alert('¡Hola!')}>
        Presióname
      </Button>
    </Block>
  );
};
```

## Componentes disponibles

### Componentes principales
- **Button** - Botones con múltiples variantes y estilos
- **Input** - Campos de entrada con validación y estilos
- **Text** - Componente de texto con tipografía predefinida
- **Block** - Contenedor flexible para layouts
- **Icon** - Iconos de múltiples familias

### Componentes de formulario
- **Checkbox** - Casillas de verificación
- **Radio** - Botones de radio
- **Switch** - Interruptores
- **Slider** - Deslizadores

### Componentes de navegación
- **NavBar** - Barra de navegación personalizable
- **Card** - Tarjetas para mostrar contenido
- **Toast** - Notificaciones toast

### Componentes avanzados
- **Accordion** - Acordeones expandibles
- **DeckSwiper** - Deslizador de tarjetas tipo Tinder

## Sistema de temas

Galio incluye un sistema de temas completo que te permite personalizar colores, tamaños y estilos:

```jsx
import { theme, withGalio, GalioProvider } from 'galio-framework';

const customTheme = {
  COLORS: {
    PRIMARY: '#FF6B6B',
    SUCCESS: '#4ECDC4',
    ERROR: '#FF5252',
  },
  SIZES: {
    BASE: 18,
    FONT: 16,
  },
};

const App = () => (
  <GalioProvider theme={customTheme}>
    <YourApp />
  </GalioProvider>
);
```

## Documentación

Esta documentación incluye:

- **Guías de inicio** - Cómo configurar y usar Galio
- **Referencia de componentes** - Documentación completa de todos los componentes
- **Ejemplos de código** - Código de ejemplo para cada componente
- **Patrones de uso modernos** - Mejores prácticas y patrones recomendados
- **Soporte para TypeScript** - Guías de uso con TypeScript

## Recursos adicionales

- [GitHub](https://github.com/galio-org/galio) - Código fuente
- [NPM](https://www.npmjs.com/package/galio-framework) - Paquete NPM
- [Sitio web](https://galio.io) - Sitio oficial

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee nuestra guía de contribución antes de enviar un pull request.

## Licencia

Galio está licenciado bajo la licencia MIT. Ver el archivo LICENSE para más detalles.

## Soporte

Si tienes preguntas o necesitas ayuda:

- Revisa esta documentación
- Busca en [GitHub Issues](https://github.com/galio-org/galio/issues)
- Únete a nuestra comunidad

---

**¡Gracias por usar Galio! 🚀**
