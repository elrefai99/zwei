<script setup>
  import NavbarVue from '../components/Navbar.vue';
  import DataVue from '../components/Data.vue'
  import FormVue from '../components/Form.vue';
</script>

<template>

  <div grid grid-cols="3fr 1fr" gap="100px">
    <NavbarVue />

    <div>

    </div>
    <FormVue />

    <DataVue />
  </div>

</template>
