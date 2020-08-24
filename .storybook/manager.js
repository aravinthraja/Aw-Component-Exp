import { addons } from '@storybook/addons';
import yourTheme from './yourTheme';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    selectedPanel: yourTheme,
    initialActive: 'sidebar',
    showRoots: false,
});