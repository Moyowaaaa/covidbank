<template>
    <div class="covid">
        <div class="nav">
            <router-link to="/Resources" class="link">Back</router-link> 
        </div>
        <h2>Corona Virus</h2>

        
        <p class="cov">
            The coronavirus outbreak, which now is more referred to as Covid-19 as a shortened version of “coronavirus disease of 2019”, first appeared in the region of Wuhan, China. The virus spreads incredibly quickly between people and in just a few months, tens of thousands of people worldwide have become infected,
            Coronaviruses belong to the Coronaviridae family in the Nidovirales order. Corona represents crown-like spikes on the outer surface of the virus; thus, it was named a coronavirus. Coronaviruses are minute in size (65–125 nm in diameter) and contain a single-stranded RNA as a nucleic material, sizes ranging from 26 to 32kbs in length.
          The subgroups of the coronaviruses family are alpha (a), beta (b), gamma (c), and delta (d) coronavirus. The severe acute respiratory syndrome coronavirus (SARS-CoV), H5N1 influenza A, H1N1 2009, and Middle East respiratory syndrome coronavirus (MERS-CoV) causes acute lung injury (ALI) and acute respiratory distress syndrome (ARDS) 
          which leads to pulmonary failure and result in fatality. These viruses were thought to infect only animals until the world witnessed a severe acute respiratory syndrome (SARS) outbreak caused by SARS-CoV, 2002 in Guangdong,
           China. Only a decade later, another pathogenic coronavirus, known as Middle East respiratory syndrome coronavirus (MERS-CoV) caused an endemic in Middle Eastern countries 
        </p>
        <br>
        <h2>SIGNS AND SYMPTOMS</h2>
<p class="cov">Symptoms of COVID-19 are variable, ranging from mild symptoms to severe illness. Common symptoms include headache, loss and taste, nasal congestion and runny nose, cough, muscle pain, sore throat, fever, diarrhea, and breathing difficulties People with the same infection may have different symptoms, and their symptoms may change over time. Three common clusters of symptoms have been identified: one respiratory symptom cluster with cough, sputum, shortness of breath, and fever; a musculoskeletal symptom cluster with muscle and joint pain, headache, and fatigue; a cluster of digestive symptoms with abdominal pain, vomiting, and diarrhea. In people without prior ear, nose, and throat disorders, loss of taste combined with the loss of smell is associated with COVID-19.
Of people who show symptoms, 81% develop only mild to moderate symptoms (up to mild pneumonia), while 14% develop severe symptoms (dyspnoea, hypoxia, or more than 50% lung involvement on imaging) and 5% of patients suffer critical symptoms (respiratory failure, shock, or multi-organ dysfunction). At least a third of the people who are infected with the virus do not develop noticeable symptoms at any point in time. These asymptomatic carriers tend not to get tested and can spread the disease. Other infected people will develop symptoms later, called "pre-symptomatic", or have very mild symptoms and can also spread the virus.
</p>
<br>

<h2>MODE OF TRANSMISSION</h2>
<p class="cov">
The virus is transmitted mainly via the respiratory route, when people inhale droplets and particles that infected people release as they breathe, talk, cough, sneeze or sing. The closer people interact, and the longer they interact, the more likely they are to transmit COVID-19, but infection can occur over longer distances, particularly indoors. People are at their peak of infectiousness when their symptoms start and are infectious for up to 3 days before this. Their infectiousness declines after the first week, but they remain contagious for up to 20 days and can spread the virus even if they have never developed any symptoms.
The size of the infectious particles is on a continuum, ranging from small airborne particles that remain suspended in the air for long periods, to larger droplets that may remain airborne or fall to the ground. This continuum between droplets and aerosols has redefined the traditional understanding of how respiratory viruses transmit. The largest droplets do not travel far, and the fine particles are in the highest concentration when people are nearby, therefore the virus is more likely to transmit when people are physically close. Airborne transmission at longer distances mainly occurs in locations that are poorly ventilated (such as restaurants, choirs, gyms, nightclubs, offices, and religious venues). In those conditions, small particles can remain suspended in the air for minutes to hours.

</p>
<br>
<h2>PREVENTION AND CONTROL</h2>
<p class="cov">Preventive measures to reduce the chances of infection include getting vaccinated, staying at home, wearing a mask in public, avoiding crowded places, keeping distance from others, ventilating indoor spaces, managing potential exposure durations washing hands with soap and water often and for at least twenty seconds, practicing good respiratory hygiene, and avoiding touching the eyes, nose, or mouth with unwashed hands 
Those diagnosed with COVID-19 or who believe they may be infected are advised by the CDC to stay home except to get medical care, call ahead before visiting a healthcare provider, wear a face mask before entering the healthcare provider's office, and when in any room or vehicle with another person, cover coughs and sneezes with a tissue, regularly wash hands with soap and water and avoid sharing personal household items 
</p>



     <div class="analysis">
             <iframe class="iframe"  height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=bc95c298-03ba-4c0a-af11-dfc2db4abf7f&autoAuth=true&ctid=662847df-c812-48bf-9cee-a61c7c21cec8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
         </div>
    </div>
</template>

<script>
export default {
    name:'Covid'
}
</script>


<style scoped>
.covid{
    width:100%;
    margin-left:0%;
}
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
}.iframe{
    width:1200px
}
@media screen and (max-width: 600px) {
.iframe{
    width:100%;
}
}
</style>