<template>
  <div class="home">  
    <div class = "left">
      
      
        <button class="button">
          <router-link class="link" to="/analysis">Visualization</router-link></button> 
     
     
    </div>

    <div class = "right">
     
    
           <button class="button">
      <router-link to="/Resources" class="link" >Resources</router-link> 
      </button></div>   
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>


<style scoped>
.home{
  height:100vh;
  display: flex;
  opacity: 1;
  
}
.left{

  
  height:100%;
  width:50%;
   color:white; 
  
}
.img{
  opacity:0.8
}

  

.but{
  opacity:1 !important;
  position:absolute;
  top:30%;
  left:70%;
  color:white;
  
}


 button{
   background: steelblue;
   border:none;
   color:white;
  width:auto;
  margin-top:50%;
}
 .link{
  text-decoration:none;
  font-size: 40px;;
   color:white;
}

.right{
  height:100%;
  width:50%;
    background-repeat: no-repeat;
background-size: 100% 100%;
background: whitesmoke;
}
.right button{
  margin-top:50%;
  color:white;
}
@media screen and (max-width: 600px) {
  .home{
    display:block;
    width:100%;
  }
  .left{
    width:100%;
    height: 50%;
  }.right{
    width:100%;
    height: 50%;
  }
}
</style>