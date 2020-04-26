<svelte:options namespace='svg'/>

<script>
  export let width = 10
  export let height = 10
  export let x = 0
  export let y = 0

  export let time = 0
  export let horizontal = false
  export let depth = 4

  $: rectAOptions = horizontal ? {
    x: x,
    y: y,
    width: width,
    height: height * division
  } : {
    x: x,
    y: y,
    width: width * division,
    height: height
  }
  $: rectBOptions = horizontal ? {
    x: x,
    y: y  + height * division,
    width: width,
    height: height * (1-division)
  } : {
    x: x + width * division,
    y: y,
    width: width * (1-division),
    height: height
  }

  $: division = (Math.sin(time/2000 + depth) + 1) / 2
</script>

<rect
  {...rectAOptions}
  fill="hsl({time/130 + depth}deg, 100%, 30%)"
  fill-opacity="0.2"
/>
<rect
  {...rectBOptions}
  fill="hsl(23deg, 30%, 20%)"
  fill-opacity="0.2"
/>

{#if depth > 0}
  <svelte:self
    {...rectAOptions}
    time={time/2}
    depth={depth-1}
    horizontal={!horizontal || (Math.floor(time / 1000) % 3 ===0)}
  />
  <svelte:self
    {...rectBOptions}
    time={time*1.2}
    depth={depth-1}
    horizontal={!horizontal}
  />
{/if}


<circle cx={x} cy={y} r={height} stroke=black fill=none stroke-width={1/depth} />
