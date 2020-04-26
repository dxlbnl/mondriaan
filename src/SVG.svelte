<script>
  export const size = 100
  let aspectRatio = 1
  let svg

  $: width = ((aspectRatio > 1) ? size : size/aspectRatio) * 2
  $: height = ((aspectRatio > 1) ? size*aspectRatio : size) * 2

  $: if (svg) {
    const { width, height } = svg.getBoundingClientRect()
    aspectRatio = height / width
  }
</script>

<svelte:window
  on:resize={() => { svg = svg }}
/>

<svg
  bind:this={svg}
  viewBox="-{width/2} -{height/2} {width} {height}" preserveAspectRatio="xMidYMid"
  {...$$props}
> 
  <slot {width} {height} {size} />
</svg>

<style>
	svg {
    width: 100%;
		height: 100%;
	}
</style>