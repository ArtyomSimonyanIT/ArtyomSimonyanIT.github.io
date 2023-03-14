document.getElementById('texta').innerHTML = ''

window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        let h1 = document.getElementById('h1-for-bootstrap');
        h1.style.fontSize = '1.8vw'
    } else {
        let h1 = document.getElementById('h1-for-bootstrap');
        h1.style.fontSize = ' 2.4vw';
    }
    if (window.scrollY >= 750 && window.scrollY <= 1600) {
        document.getElementById('hDiv1').style.backgroundColor = '#00BF9D'
        document.getElementById('hDiv1').style.color = 'white'
    } else {
        document.getElementById('hDiv1').style.backgroundColor = '#2C3F4F'
        document.getElementById('hDiv1').style.color = ''
    }
    if (window.scrollY <= 2330 && window.scrollY > 1600) {
        document.getElementById('hDiv2').style.backgroundColor = '#00BF9D'
        document.getElementById('hDiv2').style.color = 'white'
    } else {
        document.getElementById('hDiv2').style.backgroundColor = '#2C3F4F'
        document.getElementById('hDiv2').style.color = ''
    }
    if (window.scrollY > 2330) {
        document.getElementById('hDiv3').style.backgroundColor = '#00BF9D'
        document.getElementById('hDiv3').style.color = 'white'
    } else {
        document.getElementById('hDiv3').style.backgroundColor = '#2C3F4F'
        document.getElementById('hDiv3').style.color = ''
    }
});


function toPortfolio() {
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: "smooth"
    });
}

function toAbout() {
    window.scrollTo({
        top: 1601,
        left: 0,
        behavior: "smooth"
    });
}

function toContact() {
    window.scrollTo({
        top: 2331,
        left: 0,
        behavior: "smooth"
    });
}

function close1() {
    document.getElementById('overlay1').style.opacity = '0';
    document.getElementById('overlay1').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}

function opene1() {
    document.getElementById('overlay1').style.display = 'block';
    document.getElementById('overlay1').style.top = '-100';
    document.getElementById('overlay1').style.opacity = '1';
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    // document.getElementById('modal').style.position = 'fixed';
    // document.body.style.opacity = '0.5';
    
}


function close2() {
    document.getElementById('overlay2').style.opacity = '0';
    document.getElementById('overlay2').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}

function opene2() {
    document.getElementById('overlay2').style.display = 'block';
    document.getElementById('overlay2').style.top = '-100';
    document.getElementById('overlay2').style.opacity = '1';
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    // document.getElementById('modal').style.position = 'fixed';
    // document.body.style.opacity = '0.5';
    
}

function close3() {
    document.getElementById('overlay3').style.opacity = '0';
    document.getElementById('overlay3').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}

function opene3() {
    document.getElementById('overlay3').style.display = 'block';
    document.getElementById('overlay3').style.top = '-100';
    document.getElementById('overlay3').style.opacity = '1';
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    // document.getElementById('modal').style.position = 'fixed';
    // document.body.style.opacity = '0.5';
    
}

function close4() {
    document.getElementById('overlay4').style.opacity = '0';
    document.getElementById('overlay4').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}

function opene4() {
    document.getElementById('overlay4').style.display = 'block';
    document.getElementById('overlay4').style.top = '-100';
    document.getElementById('overlay4').style.opacity = '1';
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    // document.getElementById('modal').style.position = 'fixed';
    // document.body.style.opacity = '0.5';
    
}

function close5() {
    document.getElementById('overlay5').style.opacity = '0';
    document.getElementById('overlay5').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}

function opene5() {
    document.getElementById('overlay5').style.display = 'block';
    document.getElementById('overlay5').style.top = '-100';
    document.getElementById('overlay5').style.opacity = '1';
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    // document.getElementById('modal').style.position = 'fixed';
    // document.body.style.opacity = '0.5';
    
}

function close6() {
    document.getElementById('overlay6').style.opacity = '0';
    document.getElementById('overlay6').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = '';
}

function opene6() {
    document.getElementById('overlay6').style.display = 'block';
    document.getElementById('overlay6').style.top = '-100';
    document.getElementById('overlay6').style.opacity = '1';
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    // document.getElementById('modal').style.position = 'fixed';
    // document.body.style.opacity = '0.5';
    
}