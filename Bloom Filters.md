---
title: Bloom Filters
created: '2019-04-17T21:51:31.941Z'
modified: '2019-04-24T23:20:30.086Z'
---

# Bloom Filters

- Answer "No" or "Maybe", very quickly
- When you have tolerance for false-negatives, but not for false-positives
- The way it works:
  - A number of hashing functions all return an index for a given element
  - All of those indices are then flipped to `1` or `true` 
  - If one of the indices is found to be 1, the bloom filter responds with "maybe"
  - "Maybe" because all of indices computed for an input could be taken with other data already (100% collision with all of the hashing functions).
- Ensure it is sufficiently large from the beginning
