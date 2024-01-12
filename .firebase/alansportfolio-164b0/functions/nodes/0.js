

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.H76x6gl2.js","_app/immutable/chunks/scheduler.fZPlb7XK.js","_app/immutable/chunks/index.alBXkOvq.js"];
export const stylesheets = ["_app/immutable/assets/0.ymwvLoOv.css"];
export const fonts = [];
