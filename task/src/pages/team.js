import img1 from "../assets/pratibha.jpeg";
import img2 from "../assets/prajakta.jpeg";
import img3 from "../assets/sim.jpeg";
import img4 from "../assets/supriya.jpeg";
const Team = () =>{
    return(<>

<div class="container">
  <div class="row">
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Jape Pratibha</p>
    </div>
   </div>
      
    </div>
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Deogune Prajakta</p>
    </div>
   </div>
      
    </div>
    
  </div>
</div>


<div class="container mt-2">
  <div class="row">
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img3} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Phatangre Simran</p>
    </div>
   </div>
      
    </div>
    <div class="col">
    <div class="card" style={{width:"18rem",color:"black"}}>
  <img src={img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Phatangre Supriya</p>
    </div>
   </div>
      
    </div>
    
  </div>
</div>
  </>)
}
export default Team;