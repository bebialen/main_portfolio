

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.jD1GJTEh.js","_app/immutable/chunks/scheduler.fZPlb7XK.js","_app/immutable/chunks/index.alBXkOvq.js"];
export const stylesheets = [];
export const fonts = [];
