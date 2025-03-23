<script>
	import Chart from "chart.js/auto";
	import Crosshair from "chartjs-plugin-crosshair"
	let chartData;
	import { onMount } from 'svelte';

	let korValues = [7.9,7.8,8,7.6,7.5,8.1,7.9];
	let rekValues = [7.2,7.0,7.1,7.0,7.2,7.3,7.1];
	let chartLabels = ['3/1/25', '3/2/25', '3/3/25', '3/4/25', '3/5/25', '3/6/25', '3/7/25'];
	let ctx;
	let chartCanvas;
	
	onMount(async (promise) => {
		ctx = chartCanvas.getContext('2d');
		
		var chart = new Chart(ctx, {
			plugins:[
				Crosshair
			],
			options:{
				
				layout:{
					padding: 0
				},
				scales:{
					y:{
						max: 8.2,
						min: 6.8
					}
				},
				plugins:{
					tooltip:{
						enabled:true,
						intersect:false,
						position:"average",
						mode:"index"
					},
					crosshair: {
						snap:{
							enabled : true
						},
						zoom:{
							enabled:false
						},
						line: {
						color: '#FFF',  // crosshair line color
						width: 1        // crosshair line width
						},
						
					}
				}
			},
			type: 'line',
			data: {
					labels: chartLabels,
					datasets: [{
							label: 'Korrelite',
							backgroundColor: 'rgb(200, 200, 220)',
							pointHitRadius:200,
							borderColor: 'rgb(200, 200, 220)',
							borderWidth:1,
							data: korValues
					},
					{
							label: 'Reknite',
							backgroundColor: 'rgb(230, 180, 70)',
							pointHitRadius:200,
							borderColor: 'rgb(230, 180, 70)',
							borderWidth:1,
							data: rekValues
					}
				]
			}
		});

	});

</script>

<canvas bind:this={chartCanvas} id="myChart"></canvas>
