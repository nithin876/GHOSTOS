export function simulateMemory(pages) {
  return pages.map((p, i) => ({
    time: i,
    used: p.used,
    faults: p.faults
  }));
}
