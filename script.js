function Even(){
  let i,odd=[],even=[];
  let N=document.getElementById("num").value;
  

  for(i=1;i<=N;i++){
      if(i%2==0){
        odd.push(i);
      }else{
        even.push(i)
      }
      document.getElementById("disp").innerHTML=odd;
      document.getElementById("dis").innerHTML=even;

  }
}