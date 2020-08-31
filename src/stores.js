import { writable, derived, readable } from 'svelte/store';
import { scaleLinear } from "d3-scale";
import { extent } from "d3-array";
import { csv } from "d3-fetch";

export const margin = { top: 20, right: 20, bottom: 20, left: 20 };

export const umapData = readable([], set => {
    csv("data/umap.csv", ({ id, x, y }) => ({
        id,
        x: +x,
        y: +y,
    })).then(set)
});

export const dimensions = writable({ width: 70, height: 70 });

export const scales = derived(
    [dimensions, umapData],
    ([$dimensions, $umapData]) => ({
        x: scaleLinear()
            .nice()
            .range([margin.left, $dimensions.width - margin.right])
            .domain(extent($umapData, (d) => d.x)),
        y: scaleLinear()
            .nice()
            .range([$dimensions.height - margin.bottom, margin.top])
            .domain(extent($umapData, (d) => d.y))
    })
);

// function createUmap() {
// 	const { subscribe, set, update } = writable([]);

// 	return {
// 		subscribe,
// 		increment: () => update(n => n + 1),
// 		decrement: () => update(n => n - 1),
// 		reset: () => set(0)
// 	};
// }