function noParticles(){
    particleRemove = document.getElementById('particles-js')
    if (particleRemove.style.display ==="none"){
        particleRemove.style.display = "block";
    }else {
        particleRemove.style.display ="none";
    }
}