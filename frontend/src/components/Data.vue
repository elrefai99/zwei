<script>
    import axios from "axios";

    export default {
        data() {
            return{
                data: "",
            }
        },
        async created() {
            const res = await axios.get("http://localhost:1999/api/data/getData");
            console.log(res.data.data)
            this.data = res.data.data
        },
    }
</script>

<template>
    <div v-for="int in data" :key="int.id">
        <div w="90%" m="20px" rounded-md mt="-110px" ml="70px" grid grid-col-3 h="150px" p="5px" bg="#101010">
            <div p="5px" ml="60px" flex justify-between text="9 #fff center" font="500">
                <p>
                    {{int.productName}} - {{int.catagory}}
                </p>
                <div block mr="60px" >
                    <button block w="200px" rounded-md cursor-pointer h="50px" text="5" bg="#505050">Price: {{int.price}}</button>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        Description: {{int.desc}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>