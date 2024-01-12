import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-20 sm:py-32 bg-black border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"><p class="px-4 py-2 bg-white text-slate-950 font-medium" data-svelte-h="svelte-18svjk4">connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2" data-svelte-h="svelte-1sd71o8">Email</b></p><p data-svelte-h="svelte-1qzmgid">bebialen@gmail.com</p> <p><b class="pr-2" data-svelte-h="svelte-xo9qb2">LinkedIn</b><a class="text-violet-400" target="_blank" href="#hello">Alan Bebido <sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let tabs = [{ name: "Projects", link: "#projects" }, { name: "About me", link: "#about" }];
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid" + (y > 0 ? "py-4 bg-slate-950 border-violet-950" : "py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium"><b class="font-bold poppins" data-svelte-h="svelte-1qj5m9n">Alan</b></h1> <div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400"><p>${escape(tab.name)}</p> </a>`;
  })}</div> <a class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9" data-svelte-h="svelte-xq8gt">Get in touch</h4></a></header>`;
});
function goTop() {
  document.body.scrollIntoView();
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">     <div${add_attribute(
    "class",
    "fixed button-o w-full duration-200 flex p-20 z-[10]pointer-events-none opacity-0",
    0
  )}><button${add_attribute("onclick", goTop, 0)} class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sn:px-4 hiver:bg-slate-800 cursor-pointer"><i class="fa-solid fa-arrow-up" data-svelte-h="svelte-1fhyxf"></i></button></div> ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
