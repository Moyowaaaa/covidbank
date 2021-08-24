<template>
<div>
       <router-link to="/" class="link">Home</router-link> 
       <div>
           <h2>Prediction</h2>
           <div class="img" id="img"></div>
           <button class="but" @click="window">Print</button>
       </div>

</div>
</template>


<script>
export default {
    name: 'Prediction',
    methods: {
        window() {
            window.print()
        }
    }
}
</script>

<style scoped>
.img{
    margin-left: 9%;
    width:80%;
height: 500px;
border:2px solid red;
}
button{
    margin-left:70%;
    height:30px;
    width:115px;
    margin-top:5px; 
    background:steelblue;
    color:white;
    border:none;
}
.link{
   color:black;
   text-decoration: none;;
}
.link:hover{
    text-decoration: underline;
    text-decoration-color: steelblue;
}
@media screen and (max-width: 600px) {
 .img{ width:90%;
 margin-left:5%;
 }
 button{
     margin-left:60%;
 }
}

</style>