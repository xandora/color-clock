# Color Clock

### Concept:

A clock that changes the background colour every second, slowly rotating through colours from #000000 to #235959 (I think).

### Improvements:

* Implement colour translation function that either:

   Maps `#000000` to `#FFFFFF` over the 864000 seconds of the day.

   OR

   Maps Hours, Minutes, and Days to `00` to `FF`.

* Update the favicon at the same time.

   - [x] "You can make an "image" with `<canvas>` and then export it to a blob, then create a data-uri from that blob, and set it to the src of the image tag"
