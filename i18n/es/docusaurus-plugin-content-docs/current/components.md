# Componentes de Galio

¡Bienvenido a la documentación de Componentes de Galio! Aquí encontrarás todos los componentes disponibles que componen el Framework Galio.

## Comenzando

Galio proporciona un conjunto completo de componentes de React Native que están diseñados para funcionar perfectamente juntos. Cada componente está cuidadosamente elaborado para proporcionar una experiencia de usuario hermosa y consistente.

## Componentes Disponibles

### Componentes Básicos

- **Text** - Componente de texto mejorado con soporte de tipografía
- **Button** - Botones hermosos y personalizables
- **Input** - Componentes de entrada de formulario con validación
- **Card** - Componentes contenedores para organización de contenido

### Componentes de Diseño

- **Block** - Contenedor de diseño flexible
- **Row** - Componente de diseño horizontal
- **Col** - Componente de diseño de columna
- **Grid** - Sistema de cuadrícula responsivo

### Componentes de Navegación

- **Navbar** - Barra de navegación superior
- **TabBar** - Navegación de pestañas inferior
- **Drawer** - Cajón de navegación lateral

### Componentes de Visualización de Datos

- **List** - Componentes de lista y elementos de lista
- **Table** - Componente de tabla de datos
- **Avatar** - Componente de avatar de usuario
- **Badge** - Componente indicador de estado

### Componentes de Retroalimentación

- **Modal** - Componente de diálogo modal
- **Toast** - Componente de notificación toast
- **Loading** - Componente indicador de carga
- **Progress** - Componente de barra de progreso

### Componentes de Formulario

- **Checkbox** - Componente de entrada checkbox
- **Radio** - Componente de botón de radio
- **Switch** - Componente de interruptor toggle
- **Slider** - Componente de control deslizante de rango

## Instalación

Para usar los componentes de Galio, asegúrate de tener el framework instalado:

```bash
npm install galio-framework
```

## Uso Básico

Importa y usa componentes en tu aplicación React Native:

```jsx
import React from 'react';
import { View } from 'react-native';
import { Text, Button, Block } from 'galio-framework';

export default function MyComponent() {
  return (
    <Block flex center>
      <Text h4>¡Bienvenido a Galio!</Text>
      <Button round size="small">
        Comenzar
      </Button>
    </Block>
  );
}
```

## Personalización

Todos los componentes de Galio son altamente personalizables. Puedes sobrescribir estilos predeterminados, colores y comportamientos para que coincidan con el sistema de diseño de tu aplicación.

## Contribuir

¡Aceptamos contribuciones! Si te gustaría agregar nuevos componentes o mejorar los existentes, consulta nuestras [pautas de contribución](https://github.com/galio-org/galio-framework).

## Soporte

Si necesitas ayuda con algún componente, por favor:

1. Revisa la documentación del componente
2. Mira nuestros [ejemplos](https://github.com/galio-org/galio-examples)
3. Únete a nuestra [comunidad](https://github.com/galio-org/galio-framework/discussions)
4. Reporta problemas en [GitHub](https://github.com/galio-org/galio-framework/issues) 