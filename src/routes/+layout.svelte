<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte"
    import Header from "../components/Header.svelte"

    let y;
    let innerHeight=0
    let innerWidth=0
    function goTop(){
        document.body.scrollIntoView()
    }
  </script>
<div class="relative flex flex-col max-w-[1400px] mx-auto w-full
text-sm sm:text-base min-h-screen">
<!-- uparrow button -->
<!-- {} indicates wrapping classes String inside of an object -->
<!-- basically its a logical condition that changes the string 
which inturn it changes the classes name which is a string i think -->
<!-- enclose with () to write logic inside it -->
<!-- sSYNTAX:y > 0 ? 'if':'else' -->

<div class={"fixed button-o w-full duration-200 flex p-20 z-[10]" +(
y > 0 ? 'opacity-full pointer-events-auto':'pointer-events-none opacity-0')
}>

<button onclick="{goTop}"
class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3
sn:px-4 hiver:bg-slate-800 cursor-pointer">
    <i class="fa-solid fa-arrow-up">
</button>
</div>

<Header></Header>
<slot />
<Footer></Footer>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>

