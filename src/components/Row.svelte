<script>
  import TimeSignature from "./TimeSignature.svelte";
</script>

<div class="row-wrapper">
  <TimeSignature />
  <hr class="row-line line" />
  <hr class="barline line" />
</div>

<style>
  .row-wrapper {
    position: relative;
    padding: 0;
  }

  .line {
    border-bottom: none;
    border-top-width: 3px;
    border-color: #999;
    margin: 0;
    padding: 0;
    border-style: solid;
  }

  .row-line {
    position: absolute;
    top: 24px;
    z-index: -1;
    width: 100%;
    border-bottom: none;
    border-top-width: 3px;
    border-color: #999;
  }

  .barline {
    left: 281px;
    transform: rotate(90deg);
    border-style: solid;
    position: absolute;
    width: 48px;
    top: 24px;
    border-top-width: 1px;
  }
</style>