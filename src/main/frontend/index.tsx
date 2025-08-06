import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from 'Frontend/generated/routes.js';

function App() {
  return <RouterProvider router={router} />;
}

const outlet = document.getElementById('outlet')!;
let root = (outlet as any)._root ?? createRoot(outlet);
(outlet as any)._root = root;
root.render(createElement(App));

// @ts-ignore
if (import.meta.env.DEV) {
  import('./sdscard-java-importer');
  import('./sdsbutton-java-importer');
  import('./sdscard-react-importer');
  import('./sdsbutton-react-importer');
}
