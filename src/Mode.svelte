<script>
  // made by christopher pietsch chrispie.com 2020
  import { darkmode } from "./stores.js";

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    darkmode.set(true);
  }

  // window
  //   .matchMedia("(prefers-color-scheme: dark)")
  //   .addEventListener("change", (e) => {
  //     const newColorScheme = e.matches ? "dark" : "light";
  //     darkmode.set(newColorScheme);
  //   });
</script>

<style>
  .mode {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 300;
    cursor: pointer;
    padding: 10px;
  }
  .icon {
    width: 18px;
    height: 18px;
    background: url("../moon.svg");
  }
  .dark {
    background: url("../sun.svg");
  }
</style>

<div class="mode" on:click={() => darkmode.update((d) => !d)}>
  <div class="icon" class:dark={$darkmode} />
</div>
