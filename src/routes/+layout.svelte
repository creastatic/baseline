<script>
  import '../app.postcss';
  import LinkRecurrence from '../recurrences/LinkRecurrence.svelte'
</script>

<div class="bg-maximal" id="app">
  <header class="relative mx-auto flex justify-center items-center">
    <figure class="avatar square">
      <img alt="avatar" src="https://res.cloudinary.com/dt2se4cle/image/upload/v1693762648/Adobe_Express_20230901_1750260_1_orzusk.png" />
    </figure>
    <div class="p-px w-full bg-onmaximal rounded-r-full">
    </div>
    <div class="absolute flex gap-3 bottom-0 m-tbp2">
    <a target="_blank"  href="https://presentation.creastatic.tech">
      <LinkRecurrence>
        <span>apresentação</span>
      </LinkRecurrence>
    </a>
        <a href="" >
      <LinkRecurrence>
        <span>catálogo</span>
      </LinkRecurrence>
    </a>
    </div>
  </header>
  <slot />
</div>