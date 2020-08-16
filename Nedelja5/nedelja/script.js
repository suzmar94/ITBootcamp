// Napraviti hijerarhiju klasa koje opisuje ljude na fakultetu.
// Osnovne klase koje treba implementirati (sa njihovim poljima):

// Čovek: ime, prezime, godina rođenja
// Student: trenutna godina studija, trenutni prosek
    // Student osnovnih studija: smer osnovnih studija
    // Student master studija: smer master studija
// Zaposleni: godina zaposlenja, plata
    // Nastavnik: omiljeni predmet, listu predmeta na kojima drži nastavu
        // Profesor: titula (docent, vanredni, redovni)
        // Asistent: smer doktorskih studija
// Službenik: odsek

class Covek{
    constructor(ime, prezime, godinaRodjenja){
        this.ime = ime;
        this.prezime = prezime;
        this.godinaRodjenja = godinaRodjenja;
    }
}
class Student extends Covek{
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek){
        super(ime, prezime, godinaRodjenja);
        this.trenutnaGodinaStudija = trenutnaGodinaStudija;
        this.trenutniProsek = trenutniProsek;
    }
}
class StudentOsn extends Student{
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek);
        this.smerOsnovnihStudija = smerOsnovnihStudija;
    }
}
class StudentMas extends Student{
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerMasterStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek);
        this.smerMasterStudija = smerMasterStudija;
    }
}

class Zaposleni extends Covek{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata){
        super(ime, prezime, godinaRodjenja);
        this.godinaZaposlenja = godinaZaposlenja;
        this.plata = plata;
    }
}
class Nastavnik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata);
        this.omiljeniPredmet = omiljeniPredmet;
        this.listaPredmeta = listaPredmeta;
    }
}

class Profesor extends Nastavnik{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
        this.titula = titula;
    }
}
class Asistent extends Nastavnik{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, smer){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta);
        this.smer = smer;
    }
}
class Sluzbenik extends Zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, odsek){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata);
        this.odsek = odsek;
    }
}




let covek  = new Covek('suzana', 'markovic', '1994');
console.log(covek);
let student = new Student('suz', 'mar', '1188', 'cetvrta', '8.40');
console.log(student);
let studentOsnovnih = new StudentOsn('mili', 'bo', '55', 'treca', '8', 'drustveni')
console.log(studentOsnovnih);
let studentMaster = new StudentMas('lju', 'mij', '55', 'druga', '8', 'jezicki')
console.log(studentMaster);
let zaposleni = new Zaposleni('jov', 'pop', '1995', '2019', 'X')
console.log(zaposleni);
let nastavnik = new Nastavnik('mili', 'bo', '1995', '2019', 'X', 'muzicko', ['fizicko', 'likovno'])
console.log(nastavnik);
let profesor = new Profesor('jel', 'il', '1995', '2019', 'X', 'muzicko', ['fizicko', 'likovno'], 'profesor')
console.log(profesor);
let asistent = new Asistent('jel', 'il', '1995', '2019', 'X', 'muzicko', ['fizicko', 'likovno'], 'matematika')
console.log(asistent);
let sluzbenik = new Sluzbenik('jel', 'tas', '1995', '2017', 'X', 'salter')
console.log(sluzbenik);
