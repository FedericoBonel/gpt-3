// This is bassically an index that contains all the containers of components of this subfolder
// is kinda like: Hey if you need this from the containers folder is in this file

// This way we avoid doing a bunch of imports in the App.js on the upper folder
// and we can import stuff with: 
//       import {Features, Header} from './containers'; 
// and that instruction will look
// for that in this file that works as an index
export {default as Blog} from './blog/Blog';
export {default as Features} from './features/Features';
export {default as Footer} from './footer/Footer';
export {default as Header} from './header/Header';
export {default as Possibility} from './possibility/Possibility';
export {default as WhatWebsite} from './whatWebsite/WhatWebsite';