<script>
  import '../app.postcss';
  import LinkRecurrence from '../recurrences/LinkRecurrence.svelte'
</script>

<div class="bg-maximal" id="app">
  <header class="relative mx-auto flex justify-center items-center animate-fade-right animate-once animate-duration-5000 animate-delay-2000 animate-ease-in-out">
    <figure class="avatar square sm:hidden">
      <img class=" scale-175 " alt="logo_basica" src="https://res.cloudinary.com/dwvmkvvrl/image/upload/v1694876883/g1kyh34lgk3ub06znbjg.png" />
    </figure>
    <div class="p-px w-full bg-onmaximal rounded-r-full">
    </div>
    <div class="absolute flex gap-3 bottom-0 m-tbp2">
    <a target="_blank" class="hover:animate-jump hover:animate-once hover:animate-duration-50 hover:animate-delay-0"  href="https://presentation.creastatic.tech">
      <LinkRecurrence>
        <span>sobre</span>
      </LinkRecurrence>
    </a>
    <a target="_blank" class="hover:animate-jump hover:animate-once hover:animate-duration-50 hover:animate-delay-0" >
      <LinkRecurrence>
        <span>catálogo</span>
      </LinkRecurrence>
    </a>
    </div>
  </header>
  <slot />
</div>