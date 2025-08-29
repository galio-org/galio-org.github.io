---
sidebar_position: 1
---

# Estado del Proyecto

<div className="flex flex-col items-center justify-center space-y-8 p-8 dark:from-gray-800 dark:to-gray-900 rounded-3xl">
  <div className="relative">
    <div className="absolute -inset-4 bg-gradient-to-r from-[#ff1270] to-cyan-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
    <img 
      src="/img/logo.png" 
      alt="galio framework" 
      className="relative w-28 h-28 object-contain drop-shadow-2xl"
    />
  </div>
  
  <div className="flex flex-wrap justify-center gap-3">
    {['GitHub', 'Documentación', 'Lanzamientos'].map((item) => (
      <button 
        key={item}
        className="px-6 py-2.5 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-[#ff1270]/30 dark:border-[#ff1270]/50 rounded-lg transition-all duration-200 hover:bg-[#ff1270]/10 dark:hover:bg-[#ff1270]/20 hover:border-[#ff1270] dark:hover:border-[#ff1270] hover:text-[#ff1270] dark:hover:text-[#ff1270] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff1270] focus:ring-offset-2"
      >
        {item}
      </button>
    ))}
  </div>
  
  <div className="flex justify-center mb-8">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl">
      <a href="https://github.com/galio-org/galio/issues" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://img.shields.io/github/issues/galio-org/galio.svg?style=popout" alt="GitHub issues" className="h-6" />
      </a>
      <a href="https://github.com/galio-org/galio/issues?q=is%3Aissue+is%3Aclosed" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://img.shields.io/github/issues-closed/galio-org/galio.svg" alt="GitHub closed issues" className="h-6" />
      </a>
      <a href="https://github.com/galio-org/galio/pulls" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://img.shields.io/github/issues-pr/galio-org/galio.svg" alt="GitHub pull requests" className="h-6" />
      </a>
      <a href="https://github.com/galio-org/galio/pulls?q=is%3Apr+is%3Aclosed" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://img.shields.io/github/issues-pr-closed/galio-org/galio.svg" alt="GitHub closed pull requests" className="h-6" />
      </a>
      <a href="https://gitter.im/galio-community" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://badges.gitter.im/NIT-dgp/General.svg" alt="Gitter" className="h-6" />
      </a>
      <a href="https://www.npmjs.com/package/galio-framework" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://img.shields.io/npm/dm/galio-framework.svg" alt="npm downloads" className="h-6" />
      </a>
      <a href="https://opencollective.com/galio/backers" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://opencollective.com/galio/backers/badge.svg" alt="Backers on Open Collective" className="h-6" />
      </a>
      <a href="https://opencollective.com/galio/sponsors" target="_blank" rel="noopener noreferrer" className="flex justify-center">
        <img src="https://opencollective.com/galio/sponsors/badge.svg" alt="Sponsors on Open Collective" className="h-6" />
      </a>
    </div>
  </div>
</div>

## Reportar Problemas

Usamos GitHub Issues como el rastreador oficial de errores para Galio. Aquí hay algunos consejos para nuestros usuarios que quieren reportar un problema:

1. Asegúrate de que estés usando la última versión de Galio. Verifica el estado de la rama master de tu fork y ve si está actualizada con upstream/master (nuestro repositorio)
2. Proporciónanos pasos reproducibles para el problema.
3. Algunos problemas pueden ser específicos de la plataforma, por lo que especificar qué plataforma y si es un simulador o un dispositivo de hardware ayudará mucho.

## Contribuyentes

Este proyecto existe gracias a todas las personas que contribuyen. [Contribuye a Galio](/docs/contributing).

<div className="flex justify-center my-6">
  <a href="https://github.com/galio-org/galio/contributors" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://opencollective.com/galio/contributors.svg?width=890&button=false" 
      alt="Galio Contributors"
      className="max-w-full h-auto"
    />
  </a>
</div>

## Patrocinadores

Gracias a todos nuestros patrocinadores! 🙏 [Conviértete en patrocinador](https://opencollective.com/galio#backer)

<div className="flex justify-center my-6">
  <a href="https://opencollective.com/galio#backers" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://opencollective.com/galio/backers.svg?width=890" 
      alt="Galio Backers"
      className="max-w-full h-auto"
    />
  </a>
</div>

## Patrocinadores

Apoya este proyecto convirtiéndote en patrocinador. Tu logo aparecerá aquí con un enlace a tu sitio web. [Conviértete en patrocinador](https://opencollective.com/galio#sponsor)

<div className="flex justify-center my-6">
  <a href="https://opencollective.com/galio#sponsors" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://opencollective.com/galio/sponsors.svg?width=890" 
      alt="Galio Sponsors"
      className="max-w-full h-auto"
    />
  </a>
</div>

## Licencia

Licenciado bajo [MIT](https://github.com/galio-org/galio/blob/master/LICENSE)  
© 2025 [Galio](https://galio.io/?ref=galio-repo), hecho con ❤️ para la comunidad.
