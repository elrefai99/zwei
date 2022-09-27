<script setup>
    
    const handelDelete = () => {
        console.log("handelDelete called")
    }

    const titles = [
        {title: "Handel", loda: 15, rep: 88},
        {title: "Handel", loda: 15, rep: 8},
        {title: "Handel", loda: 15, rep: 8},
        {title: "Handel", loda: 15, rep: 8},

    ]
</script>

<template>
    <div v-for="tit of titles">
        <div bg="#202020" rounded-md mb="-59px" p-6 m="20px auto" relative w="200px">
        <h4 m="0 0 10px 0" font="1.2em" >{{tit.title}}</h4>
        <p m-0 font="0.9em"  >Load (kg): 8</p>
        <p m-0 font="0.9em"  >Number of reps: {{tit.rep}}}</p>
        <span absolute top="20px" right="20px" cursor-pointer p="6px" rounded-md bg="#101010" @click="handelDelete">Delete</span>
    </div>
    </div>
    
</template>