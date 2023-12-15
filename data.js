const nama = "Roni Saputra";
let usia = 10;

let biodata = document.getElementById('biodata')

function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi Tuwa";
    }
    else if(usia < 10 && usia > 2) {
        generasi = "generasi tua";
    }
    else {
       generasi = "generasi alien";
    }

    return biodata.innerHTML = generasi;


}


console.log(nama);
console.log(usia);

generateBiodata();
