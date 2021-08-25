<template>
    <div>
        <div class="nav">
         <router-link to="/" class="link">Home</router-link> 
         </div>


         <div class="header">

             <h2>Sales Visualization</h2>
         </div>

<div class="body">
     <iframe class="iframe"  src="https://app.powerbi.com/reportEmbed?reportId=69785d59-9545-4f16-83cb-45be4ac1f441&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
</div>
        
    </div>
</template>


<script>
export default {
   name: 'Analysis'
}
</script>


<style scoped>
.link{
   color:black;
   text-decoration: none;;
}
.link:hover{
    text-decoration: underline;
    text-decoration-color: steelblue;
}
.header{
margin-top:5%;
}
.body{
    margin-bottom:5%;
}
.nav{
   background:steelblue;
   height:35px;
     height:40px;
   font-Size:30px;
}

.iframe{
    width:1200px;
    height:541.25px
}
@media screen and (max-width: 600px) {
    .body{
        margin-top:20%;
    }
.iframe{
    
    width:100%;
    height:550px
}
.nav{
    font-size: 25px;
}
}
</style>