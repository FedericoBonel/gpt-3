// This is bassically an index that contains all the components of this components subfolder
// is kinda like: Hey if you need this from the components folder is in this file

// This way we avoid doing a bunch of imports in the App.js on the upper folder
// and we can import stuff with: 
//       import {Article, Brand} from './components'; 
// and that instruction will look
// for that in this file that works as an index
export {default as Article} from './article/Article';
export {default as Brand} from './brand/Brand';
export {default as CTA} from './cta/CTA';
export {default as Feature} from './feature/Feature';
export {default as Navbar} from './navbar/Navbar';