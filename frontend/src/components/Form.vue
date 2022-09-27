<script setup>
import {ref} from 'vue'

const title = ref('')

const haha = () => {
    console.log(title.value)
}
</script>

<template>

    <form @submit.prevent="haha" p="20px" mt="-100px">
        <h3>Add Proudct</h3>

        <div b="#101010" p="5px" >
            <label block for="">Add tite</label>
            <input block p="10px" mt="10px" mb="10px" w="50%" rounded-sm type="text" v-model="title">
        </div>

        <div b="#101010" p="5px">
            <label block>Load (in kg):</label>
            <input block p="10px" mt="10px" mb="10px" w-full rounded-sm type="text" v-model="title">
        </div>

        <div b="#101010" p="5px">
            <label block>Number of Reps:</label>
            <input block p="10px" mt="10px" mb="10px" w-full rounded-sm type="text" v-model="title">
        </div>
        <button>send</button>
    </form>
</template>