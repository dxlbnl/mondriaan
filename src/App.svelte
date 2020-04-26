<script>
	import SVG from './SVG.svelte'
	import Idea from './Idea.svelte'
	import time from './time'
</script>

<SVG let:width let:height>
	<Idea
		{width}
		{height}
		x={-width/2}
		y={-height/2}
		time={$time}
	/>
</SVG>