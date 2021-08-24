<template>
    <div>
         <div class="nav">
            <router-link to="/Resources" class="link">Back</router-link> 
        </div>

        <h1>E -Commerce
        </h1>
         <h5>What is E commerce ?</h5>

        <p class="cov">
        The word commerce is the basic concept for electronic commerce, about buying and selling of goods while ‘commercial’ denotes business practice and activities intended to make profits. Electronic commerce, like any other business
          with the exchange of money for soft or hard goods and services, Electronic Commerce (e-commerce) is an electronic business. It’s using the power of computers, the Internet, and shared software to send and receive product specifications and drawings; bids, purchase orders, and invoices; and any other 
          type of data that needs to be communicated to customers, suppliers, employees, or the public.
            </p>
            <br>
            <p class="cov">
                Kalakota and Whintons in 1997 defined the term E-commerce from different perspectives. These perspectives are:
1.	Communication 
2.	Business Process 
3.	Service 
4.	Online 

1)	Communication Perspective: According to this perspective, E-commerce is the delivery of information, product/services, or payments over telecommunication channels, computer networks, or any other electronic mode of communication. 
2)	Business Process Perspective: This says that E-commerce is the application of technology towards the automation of business transactions and workflow
3)	Service Perspective: E-commerce is defined as a tool that addresses the desire of firms, consumers, and management to cut service costs while improving the quality of goods/services and increasing the speed of service delivery. 
4)	Online Perspective: E-commerce provides the capability of buying and selling products and information on the internet and other online services

            </p>
        </div>

</template>


<script>
export default {
    name:'Sales'
}
</script>

<style scoped>
.cov{
    width:80%;
    margin-left:10%
}
.link{
    margin-top:30px;
    color:black;
    text-decoration:none;
    font-size:25px;
    text-align:left;
}
.nav{
    height:50px;
    padding-left:5%;
    text-align: left;;
    color:black;
    width:100%;
    background:steelblue
}
h1, h5{
    margin-left:10%;
    text-align:left !important;
    text-align:justify;
}
p{
    text-align:left !important;
    text-align:justify;
}
.analysis{
    margin-bottom:10%;
    margin-top:10%;
}
</style>