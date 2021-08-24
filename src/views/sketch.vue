<template>
  <div class="home">  
    <div class = "left" >
      <div class ="top">
        <button><router-link class="link" to="/analysis">Analysis</router-link></button> 
      </div>
      <div class="bottom">
        <button>
<router-link to="/Prediction" class="link">Prediction</router-link>  
        </button>
      </div>
    </div>

    <div class = "right">
     
      <button>
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
}
.left{
  background-image: url("../assets/1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height:100%;
  width:50%;
  display:block
}
.left .top{
  height:50%;
  width:auto;

  
}
.left .top button{
  margin-top:20%;
  width:auto;

}
 .link{
  text-decoration:none;
  font-size: 40px;;
  color:black;
}


.left .bottom{
  height:50%;
  width:100%;

}
.left .bottom button{
  margin-top:20%;
  width:auto;
 
}
.right{
  height:100%;
  width:50%;
    background-repeat: no-repeat;
background-image: url("../assets/2.jpg");
background-size: 100% 100%;
}
.right button{
  margin-top:50%;
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