<template>
<div class="body">
   <div class="nav">
       <router-link class="link" to="/">Home</router-link> 
       </div>

       <div class="header">
          <h2>Resources</h2>
       </div>

       <div class="content">
                 <h2>Coronavirus</h2>
       <h5>What is Coronavirus</h5>
       <p class="text">Coronaviruses belong to the Coronaviridae family in the Nidovirales order. Corona represents crown-like spikes on the outer surface of the virus; thus, it was named a coronavirus. Coronaviruses are minute in size (65–125 nm in diameter) and contain a single-stranded RNA as a nucleic material, sizes ranging from 26 to 32kbs in length.
          The subgroups of the coronaviruses family are alpha (a), beta (b), gamma (c), and delta (d) coronavirus. The severe acute respiratory syndrome coronavirus (SARS-CoV), H5N1 influenza A, H1N1 2009, and Middle East respiratory syndrome coronavirus (MERS-CoV) causes acute lung injury (ALI) and acute respiratory distress syndrome (ARDS) 
          which leads to pulmonary failure and result in fatality. These viruses were thought to infect only animals until the world witnessed a severe acute respiratory syndrome (SARS) outbreak caused by SARS-CoV, 2002 in Guangdong,
           ...
           <router-link to='/covid'><button class="bu">Read More</button></router-link></p>

       <br>
       <h1>E- commerce</h1>
       <h5>What is E commerce ?</h5>
       <p>The word commerce is the basic concept for electronic commerce, about buying and selling of goods while ‘commercial’ denotes business practice and activities intended to make profits. Electronic commerce, like any other business
          with the exchange of money for soft or hard goods and services, Electronic Commerce (e-commerce) is an electronic business. It’s using the power of computers, the Internet, and shared software to send and receive product specifications and drawings; bids, purchase orders, and invoices; and any other 
          type of data .....<router-link to='/sales'><button class="bu">Read More</button></router-link></p>
       <br>
       <h1>Machine Learning</h1>
       <h5>What is Machine Learning?</h5>
       <p>Machine learning is a set of algorithms that can learn to perform tasks such as prediction and 
          classification effectively using data. Learning is achieved using additional data and/or additional models. An algorithm can be called a learning algorithm when it improves on a performance metric while performing a task, for example, the accuracy of classification such as fraud...<router-link to='/machine'><button class="bu">Read More</button></router-link></p>
       </div>

</div>
</template>


<script>
export default {
   name: 'Resources'
}
</script>

<style scoped>

.content{
   text-Align:left;
}
.nav{
   background:steelblue;
   height:40px;
   font-Size:30px;
}

.link:hover{
    text-decoration: underline;
    text-decoration-color: steelblue;
}
.bu{
   background:steelblue;
   color:white;
   height:25px;
   border:none;
}
.link{
   color:black;
   text-decoration: none;;
}
.header{
   text-Align:center;
}
.content{
   margin-bottom:10%;
   width:80%;
   margin-left:10%;
}

</style>