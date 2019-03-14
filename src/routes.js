// Here we keep the routes with their corresponding components
import Glossary from './components/views/glossary/index';
import Flow from './components/views/Flow';
import Theory from './components/views/Theory';

export default [
  { path: '/', component: Theory },
  { path: '/glossary', component: Glossary },
  { path: '/flow', component: Flow },
  { path: '/theory', component: Theory }
];
