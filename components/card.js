

export const card = (object) => {
  return
`<div class="card m-1" style="width: 18rem;">
  <div 
    class="card-body text-center" 
    style="background:black; color:white">
    <h5 class="card-name">${object.name}</h5>
    <h5 class="card-house">${object.house}</h5>
  </div>
</div>
`

}
