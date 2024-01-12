

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.wNkZbkcH.js","_app/immutable/chunks/scheduler.fZPlb7XK.js","_app/immutable/chunks/index.alBXkOvq.js","_app/immutable/chunks/singletons.2MZUyh9z.js"];
export const stylesheets = [];
export const fonts = [];
