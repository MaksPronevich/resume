import { isWebp } from './modules/webp.js';
import { tabs } from './modules/tabs.js';
import { createTippy } from './modules/tippy.js';

isWebp();
tabs('.tab-nav__item', '.section');
createTippy();
