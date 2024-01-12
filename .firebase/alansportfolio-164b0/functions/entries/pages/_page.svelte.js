import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl-mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-betweem gap-4 items-center"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absoulute after:top-8 after:h-0 after:right-full sfter:w-full after:h-full after:bg-white sfter:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4" data-svelte-h="svelte-avspdr">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Smoljames Store",
      icon: "fa-solid fa-cart-shopping"
    },
    {
      name: "Smoljame Store",
      icon: "fa-solid fa-cart-shopping"
    },
    {
      name: "Smoljas Store",
      icon: "fa-solid fa-cart-shopping"
    }
  ];
  let benefits = [
    {
      name: "hello ",
      description: "insert your skills "
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="intropage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md text-6xl">Hi!Iam <span class="text-violet-400" data-svelte-h="svelte-oyco7p">Alan </span>Bebido <br>Full stack 
                    <span class="text-violet-400" data-svelte-h="svelte-1wtwwuz">Developer</span> + <span class="text-violet-400" data-svelte-h="svelte-xkytxn">Data scientist</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400" data-svelte-h="svelte-1c1g8zr">favorite tech  </span>includes Javascript (Angular and svelte), 
                    Bootstrap, Django+MySQl</p> <a class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="#hello" target="_blank"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9" data-svelte-h="svelte-sc9lnl">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "/assets/images/profile.png", 0)} alt="profile" class="object-cover z-[2] max-h[70vh]"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center"><h6 class="text-large sm:text-xl md:text-2xl" data-svelte-h="svelte-8vabwc">A few of my creative endeavours</h6> <h3 class="font -semibold texr-3xl sm:txt-4xl md:text-5xl">Curious to <span class="text-violet-400" data-svelte-h="svelte-8zsck0">see</span> my work?</h3></div> <a href="#hello" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"><i class="fa-regular fa-circle-play"><p data-svelte-h="svelte-1kfbkvj">Watch the video</p></i></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-m866sa">Hello its an app</p> <strong class="text-violet-400" data-svelte-h="svelte-1ekjwxk">hello this is description be aware for sometime and look at it</strong>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-m866sa">Hello its an app</p> <strong class="text-violet-400" data-svelte-h="svelte-1ekjwxk">hello this is description be aware for sometime and look at it</strong>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-m866sa">Hello its an app</p> <strong class="text-violet-400" data-svelte-h="svelte-1ekjwxk">hello this is description be aware for sometime and look at it</strong>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"><h6 class="text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1efkdmi">Want to Know more</h6> <h3>A bit <span class="poppins text-violet-400" data-svelte-h="svelte-1prx1ip">about</span>me</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-2xl" data-svelte-h="svelte-o91ck0">Iam</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6l text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5>The <span class="text-violet-400" data-svelte-h="svelte-v9qd0a">Complete</span>Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"><table class="bg-white text-slate-700 rounded text-center"><thead class="border-b border-solid border-slate-200"><tr class=""><th class="whitespace-nowrap p-2 px-4" data-svelte-h="svelte-y4wboy">hello</th> <th class="whitespace-nowrap p-2 px-4" data-svelte-h="svelte-y4wboy">hello</th> <th class="whitespace-nowrap p-2 px-4" data-svelte-h="svelte-y4wboy">hello</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm" data-svelte-h="svelte-gycxbo">insert</td> <td></td></tr></tbody></table></div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
