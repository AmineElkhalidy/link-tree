import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.__PC41AG.js","_app/immutable/chunks/scheduler.AmCVIchs.js","_app/immutable/chunks/index.-Ukn1yxz.js","_app/immutable/chunks/stores.9Baz8Pbk.js","_app/immutable/chunks/entry.kpip1UXu.js","_app/immutable/chunks/index.0Ztu7LDH.js"];
export const stylesheets = [];
export const fonts = [];
