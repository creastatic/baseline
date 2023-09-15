<script type="text/javascript" charset="utf-8">
  import { BellIcon } from 'svelte-feather-icons'
</script>

<div class="flex items-center text-wv gap-1 overline decoration-wv">
  <BellIcon class="text-wv" size="20"/>
  <slot class="opacity-[.7]" />
</div>
