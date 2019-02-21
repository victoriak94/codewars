function enough(cap, on, wait) {
  return wait > cap - on ? wait - (cap - on) : 0;
}
