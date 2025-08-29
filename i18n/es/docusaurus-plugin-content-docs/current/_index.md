---
slug: /
title: Documentación de Galio
description: Documentación completa del framework Galio para React Native
---

# Documentación de Galio

Bienvenido a la documentación oficial de Galio Framework en español.

## ¿Qué es Galio?

Galio es un framework gratuito y de código abierto para React Native que proporciona componentes UI hermosos y personalizables, junto con un sistema de temas robusto.

## Características Principales

- 🎨 **Componentes UI hermosos** - Más de 20 componentes listos para usar
- 🎯 **Sistema de temas** - Personalización completa de colores y estilos
- 📱 **Multiplataforma** - Funciona en iOS y Android
- ⚡ **Rendimiento optimizado** - Construido con las mejores prácticas de React Native
- 🔧 **Fácil de usar** - API simple e intuitiva
- 🌍 **Soporte para TypeScript** - Tipos completos incluidos

## Comenzando

### Instalación

```bash
npm install galio-framework
# o
yarn add galio-framework
```

### Uso rápido

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

## Próximos Pasos

- **[Introducción](../intro)** - Aprende los conceptos básicos de Galio
- **[Instalación](../get-started/install)** - Configura Galio en tu proyecto
- **[Tema de Galio](../get-started/galio-theme)** - Personaliza los colores y estilos
- **[Componentes](../components)** - Explora todos los componentes disponibles

## Comunidad

- [GitHub](https://github.com/galio-org/galio-framework)
- [Discusiones](https://github.com/galio-org/galio-framework/discussions)
- [Issues](https://github.com/galio-org/galio-framework/issues)

¡Únete a nuestra comunidad y ayuda a hacer Galio aún mejor! 