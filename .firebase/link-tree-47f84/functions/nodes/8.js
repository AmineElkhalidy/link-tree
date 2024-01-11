import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.Y7cGQuB8.js","_app/immutable/chunks/scheduler.zz3ul0UI.js","_app/immutable/chunks/index._-4GGrLL.js","_app/immutable/chunks/stores.Txw1MrOu.js","_app/immutable/chunks/entry.nCyaWWn9.js","_app/immutable/chunks/index.UsJA9eeQ.js"];
export const stylesheets = [];
export const fonts = [];
