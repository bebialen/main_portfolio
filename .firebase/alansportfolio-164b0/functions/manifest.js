export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/images/profile.png","assets/particles.json","favicon.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.nAh-__q1.js","app":"_app/immutable/entry/app.Ol3fPCQR.js","imports":["_app/immutable/entry/start.nAh-__q1.js","_app/immutable/chunks/scheduler.fZPlb7XK.js","_app/immutable/chunks/singletons.2MZUyh9z.js","_app/immutable/entry/app.Ol3fPCQR.js","_app/immutable/chunks/scheduler.fZPlb7XK.js","_app/immutable/chunks/index.alBXkOvq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
