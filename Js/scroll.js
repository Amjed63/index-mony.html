let btn = document.getElementById('scro');
onscroll= function(){
    if(scrollY >=260){
        btn.style.display= 'block';
    }else{
        btn.style.display= 'none';
    }
}
btn.onclick= function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
}
