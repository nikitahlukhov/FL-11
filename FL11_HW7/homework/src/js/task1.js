let mail = prompt('Enter your Email', '');
let admin = 'admin@gmail.com';
let gmail = 'user@gmail.com';
let minSix = 6;
let minFive = 5; 

if (mail === '' || mail === null) {
    alert('Canceled')
} else if (mail.length < minSix) {
    alert('I don\'t know any emails having name length less than 6 symbols')
} else if (mail.length >= minSix && mail !== admin && mail !== gmail) {
    alert('I don\'t know you')
} else if (mail === admin || gmail) {
    let pass = prompt('Enter your Password', '');
    if (pass === '' || pass === null) {
        alert('Wrong password')
    } else if (mail === gmail && pass === 'UserPass' || mail === admin && pass === 'AdminPass') {
        let chngPass = confirm('Do you want to change your password');
        if (!chngPass) {
            alert('You have failed the change.')
        } else {
            let oldPass = prompt('Enter your old Password')
            if (mail === gmail && oldPass === 'UserPass' || mail === admin && oldPass === 'AdminPass') {
                let newPass = prompt('Enter your new password')
                if (newPass.length < minFive) {
                    alert('It\'s too short password. Sorry.')
                } else if (newPass.length >= minFive) {
                    let validNewPass = prompt('Enter your new password again, please')
                    if (validNewPass === newPass) {
                        alert('You have successfully changed your password.')
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }
            } else {
                alert('Wrong password')
            }
        }
    } else {
        alert('Wrong password')
    }
}