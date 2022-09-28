<script setup>
import {ref} from 'vue'
import axios from 'axios';

const productName = ref('')
const price = ref('')
const catagory = ref('')
const desc = ref('')

const handelInsertData = async () => {
    const res = await axios.post('http://localhost:1999/api/data/savedata', {
        productName: productName.value,
        price: price.value,
        catagory: catagory.value,
        desc: desc.value
    })
    
}

</script>

<template>

    <form @submit.prevent="handelInsertData" p="10px" mb="50px" mt="-175px" bg="#101010" w="50%" ml="25%" rounded-md>
        <h3 text="center #e8e8e8 blod 10">Add Products</h3>
        <div p="20px">
            <div b="#101010" p="5px" >
                <label block for="">Product Name</label>
                <input block p="10px" rounded-xl bg="#303030" mt="10px" mb="10px" w-full rounded-sm type="text" v-model="productName">
            </div>

            <div b="#101010" p="5px">
                <label block>Price</label>
                <input block p="10px" rounded-xl bg="#303030" mt="10px" mb="10px" w-full rounded-sm type="text" v-model="price">
            </div>

            <div b="#101010" p="5px">
                <label block>Catagory</label>
                <input block p="10px" rounded-xl bg="#303030" mt="10px" mb="10px" w-full rounded-sm type="text" v-model="catagory">
            </div>

            <div b="#101010" p="5px">
                <label block>Description:</label>
                <input block p="10px" rounded-xl bg="#303030" mt="10px" mb="10px" w-full rounded-sm type="text" v-model="desc">
            </div>
            <button w="99%" ml="6px" h="50px" text="#e8e8e8 6" p="5px" m="3px" cursor-pointer bg="#303030" rounded-md>Send</button>
        </div>
    </form>
</template>