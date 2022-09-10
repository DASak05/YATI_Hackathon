function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFunction1() {
    let dot = document.getElementById("dot");
    let moreTxt = document.getElementById("p");
    let btnTxt = document.getElementById("myBtn1");
  
    if (dot.style.display === "none") {
      dot.style.display = "inline";
      btnTxt.innerHTML = "Read more";
      moreTxt.style.display = "none";
    } else {
      dot.style.display = "none";
      btnTxt.innerHTML = "Read less";
      moreTxt.style.display = "inline";
    }
  }
  function myFunction2() {
    let dos = document.getElementById("do");
    let mo = document.getElementById("q");
    let btx = document.getElementById("myBtn2");
  
    if (dos.style.display === "none") {
      dos.style.display = "inline";
      btx.innerHTML = "Read more";
      mo.style.display = "none";
    } else {
      dos.style.display = "none";
      btx.innerHTML = "Read less";
      mo.style.display = "inline";
    }
  }
  
  function myFunction3(){
    let g=document.getElementById("g");
    let m=document.getElementById("s");
    let t=document.getElementById("myBtn3");
    if(g.style.display==="none"){
      g.style.display="inline";
      t.innerHTML="Read more";
      m.style.display="none";
    }else{
       g.style.display = "none";
      t.innerHTML = "Read less";
      m.style.display = "inline";
    }
  }

    function myFunction4(){
      let n=document.getElementById("m");
      let b=document.getElementById("x");
      let o=document.getElementById("myBtn4");
      if(n.style.display==="none"){
        n.style.display="inline";
        o.innerHTML="Read more";
        b.style.display="none";
      }else{
         n.style.display = "none";
        o.innerHTML = "Read less";
        b.style.display = "inline";
      }
}
  
