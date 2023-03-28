<template>
  <div class="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimiCheckboxGroup",
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
    },
  },
};
</script>

<style>
</style>