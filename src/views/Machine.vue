<template>
<div>
   <div class="nav">
            <router-link to="/Resources" class="link">Back</router-link> 
        </div>


        <h1>Machine Learning</h1>
        <h5>What is Machine Learning?</h5>
        
        <p class="cov">
            Machine learning is a set of algorithms that can learn to perform tasks such as prediction and 
          classification effectively using data. Learning is achieved using additional data and/or additional models. An algorithm can be called a learning algorithm when it improves on a performance metric while performing a task, for example, the accuracy of classification such as fraud, customer churn, and so on.
        </p>
<br>
<p class="cov">
    CLASSIFICATION OF MACHINE LEARNING
Machine learning algorithms are classified into four categories as defined below: 
1. Supervised Learning Algorithms: These algorithms require the knowledge of both the outcome variable (dependent variable) and the features (independent variable or input variables). The algorithm learns (i.e., estimates the values of the model parameters or feature weights) by defining a loss function which is usually a function of the difference between the predicted value and actual value of the outcome variable. Algorithms such as linear regression, logistic regression, discriminant analysis are examples of supervised learning algorithms. Here the predicted value is a linear or a non-linear function of the features (or independent variables) in the data. The prediction is achieved (by estimating feature weights) with the knowledge of the actual values of the outcome variables, thus called supervised learning algorithms. That is, the supervision is achieved using the knowledge of outcome variable values. 
2. Unsupervised Learning Algorithms: These algorithms are a set of algorithms that do not know the outcome variable in the dataset. The algorithms must find the possible values of the outcome variable. Algorithms such as clustering, principal component analysis are examples of unsupervised learning algorithms. Since the values of the outcome variable are unknown in the training data, supervision using that knowledge is not possible. 
3. Reinforcement Learning Algorithms: In many datasets, there could be uncertainty around both input as well as output variables. For example, consider the case of spell check in various text editors. If a person types “buutiful” in Microsoft Word, the spell check in Microsoft Word will immediately identify this as a spelling mistake and give options such as “beautiful”, “bountiful”, and “dutiful”. Here the prediction is not one single value, but a set of values. Another definition is: Reinforcement learning algorithms are algorithms that have to take sequential actions (decisions) to maximize a cumulative reward. Techniques such as the Markov chain and Markov decision process are examples of reinforcement learning algorithms. 
4. Evolutionary Learning Algorithms: Evolutional algorithms are algorithms that imitate natural evolution to solve a problem. Techniques such as genetic algorithms and ant colony optimization fall under the category of evolutionary learning algorithms.

</p>
</div>
</template>

<script>
export default {
    name:'Machine'
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
h1 ,h5{
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