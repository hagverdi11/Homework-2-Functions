
//Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapın.

function Calculation(n) {
    if (n % 3 == 0 && n % 7 == 0) {
        console.log("Divided");
    }
    else {
        console.log("Not divided");
    }
}

Calculation(20)


//Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

function factorialize(num) {
    if (num === 0 || num === 1)
        console.log(1);

    else {
        for (let i = num - 1; i >= 1; i--) {
            num *= i;
        }
        console.log(num);
    }
}

factorialize(4)




//Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sumEven() {


    let numb = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            numb += array[i] * array[i]
        }

    }

    console.log(numb);




}


sumEven(array)


//Functiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

function Register(mail, password) {
    if(mail == "cavid@code.edu.az" && password == "12345" ){
        console.log("Login succesfull");
    }
    else{
        console.log("Something went wrong");
    }
}

Register("cavid","12345")


//Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

function sumDigits() {

    let digit = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2 == 1){
        digit += array[i]
        }
    }

    console.log(digit);
}

sumDigits(array)


//Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

function Calculating() {

    let eded = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2 == 0){
            eded ++
        }

        

    }
    console.log(eded);
    
}

Calculating(array)
