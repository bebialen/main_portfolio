<script>
    import Step from "./Step.svelte"
    let steps = [
        {name:'Smoljames Store', icon:'fa-solid fa-cart-shopping'} ,
        {name:'Smoljame Store', icon:'fa-solid fa-cart-shopping'} ,
        {name:'Smoljas Store', icon:'fa-solid fa-cart-shopping'} ,


    ]
let benefits = [
    {name:'hello ', description:"insert your skills "}
]

</script>

<main class="flex flex-col flex-1 p-4">
    <section id='intropage' class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8
        lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md text-6xl">
                Hi!Iam <span class="text-violet-400">
                    Alan </span>Bebido <br>Full stack 
                    <span class="text-violet-400">Developer</span> + <span class="text-violet-400">Data scientist</span>
                </h2>
                <p class="text-base sm:text-lg md:text-xl">
                    My <span class="text-violet-400">favorite tech &nbsp;</span>includes Javascript (Angular and svelte), 
                    Bootstrap, Django+MySQl 
                </p>
                <a class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl relative overflow-hidden
                px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="#hello" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
    group-hover:translate-x-full z-0 duration-200"/>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
            </div>
            <div class="relative shadow-2xl grid place-items-center">
                <img src={"/assets/images/profile.png"} alt="profile" class="object-cover z-[2] max-h[70vh]">
            </div>

    </section>

    <section id='projects' class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavours
            </h6>
            <h3 class ="font -semibold texr-3xl sm:txt-4xl md:text-5xl">
                Curious to <span class="text-violet-400">see</span> my work?

            </h3>

        </div>
        <a href="#hello" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid
        border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700
        duration-200">
        <i class="fa-regular fa-circle-play">
            <p>Watch the video</p>

        </i>
        
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        <Step step={steps[0]}>
            <p>Hello its an app </p>
            <strong class="text-violet-400">hello this is description be aware for sometime and look at it</strong>

        </Step>
        <Step step={steps[1]}>
            <p>Hello its an app </p>
            <strong class="text-violet-400">hello this is description be aware for sometime and look at it</strong>

        </Step>
        <Step step={steps[2]}>
            <p>Hello its an app </p>
            <strong class="text-violet-400">hello this is description be aware for sometime and look at it</strong>

        </Step>
   </div></section>

    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
            <div class="flex flex-col gap-2 text-center relative  before:absolute before:top-0 before:left-0  before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to Know more</h6>
            <h3>A bit <span class="poppins text-violet-400">about</span>me</h3>
            </div>
            <p class="mx-auto poppins font-semibold text-lg sm:text-2xl">Iam</p>
            <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
                {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6l text-slate-500 font-semibold">
                        0{index+1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
    
                    </div>
                    
                </div>
                {/each}
                </div>
                <h5>The <span class ='text-violet-400'>Complete</span>Package </h5>
                <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
                    <table class="bg-white text-slate-700 rounded text-center">
                        <thead class="border-b border-solid border-slate-200">
                            <tr class="">
                                <th class="whitespace-nowrap p-2 px-4">hello</th>
                                <th class="whitespace-nowrap p-2 px-4">hello</th>
                                <th class="whitespace-nowrap p-2 px-4">hello</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-solid border-slate-200">
                                <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">insert</td>
                                <td></td>
    
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </section>
   
            
    
</main>