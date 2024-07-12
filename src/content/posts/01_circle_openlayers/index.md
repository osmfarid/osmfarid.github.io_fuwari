---
title: Circle In OpenLayers
published: 2024-07-11
description: Drawing, styling and getting radius of Circle In OpenLayers
category: OpenLayers
draft: true
---

Recently, I tackled a task that involved drawing a circle within a map, then extracting its radius and center coordinates for further processing. A key requirement was to convert these values into the geographic coordinate system (EPSG:4326), the standard for latitude and longitude.

The challenge stemmed from the fact that my application doesn't rely solely on the pseudo-Mercator projection (EPSG:3857) used by popular mapping services like Google Maps and Bing. Instead, it needs to support multiple projections, ensuring that circles drawn in one projection appear correctly when the map is switched to a different one.

### The Pitfall of Planar Geometry

My initial approach was to use the OpenLayers Circle feature. It's easy to implement:

```js
const draw = new Draw({
    source: source,
    type: 'Circle',
});
map.addInteraction(draw);
```

Then, I attempted to retrieve the radius and center from the feature's geometry:

```js
draw.on('drawend', ({feature}) => {
    const geometry = feature.getGeometry();
    const center = geometry.getCenter();
    const radius = geometry.getRadius();

    console.log(center, radius);
});
```

However, this approach yielded inaccurate results. The `geometry.getLength()` and `geometry.getArea()` methods operate on projected (planar) geometries, meaning they don't account for the distortions introduced by different map projections.  Even if I converted the coordinates to EPSG:4326 and back, the circle wouldn't render accurately when the projection changed.


### The Solution: Spherical Geometry with `ol/sphere`

OpenLayers provides a solution within its ol/sphere module. This module offers functions specifically designed to calculate lengths and areas on the surface of a sphere (like Earth).  The module treats lines as great circle segments and polygon edges as arcs of great circles, providing a more accurate representation of distances and areas on the globe.
