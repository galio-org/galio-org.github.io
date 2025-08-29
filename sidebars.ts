import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: 'Learn how to install and set up Galio Framework',
      },
      items: [
        'get-started/install',
        'get-started/galio-theme',
        'get-started/modern-usage',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'components',
      },
      items: [
        'components',
        'components/button',
        'components/text',
        'components/input',
        'components/card',
        'components/block',
        'components/accordion',
        'components/checkbox',
        'components/radio',
        'components/switch',
        'components/slider',
        'components/navbar',
        'components/icon',
        'components/toastnotification',
        'components/deckswiper',
      ],
    },
    'contributing',
    'algolia-tutorial',
  ],
};

export default sidebars;
