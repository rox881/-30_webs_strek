const passBox = document.getElementById("password");
const passlength = 22;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()";

const allchar = uppercase +lowercase +numbers+symbols;

function CreatePassword() {
    let password =" ";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password +=numbers[Math.floor(Math.random() * numbers.length)];
    password +=symbols[Math.floor(Math.random() * symbols.length)];

    while(passlength > password.length)
    {
        password += allchar[Math.floor(Math.random() * allchar.length)]
    }

    passBox.value=password;

}

function copyPassword()
{
    passBox.select();
    document.execCommand("copy");
}
