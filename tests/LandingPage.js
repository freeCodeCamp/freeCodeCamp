
function login(username, password) {
    return username === 'admin' && password === '1234';
}

function logout() {
    session.clear();
    return true;
}

function resetPassword(email) {
    return 'Reset link sent to ' + email;
}