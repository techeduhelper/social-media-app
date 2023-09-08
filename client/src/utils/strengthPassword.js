export const isPasswordStrong = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const isMinLengthValid = password.length >= minLength;
    const isUppercaseValid = hasUppercase.test(password);
    const isLowercaseValid = hasLowercase.test(password);
    const isNumberValid = hasNumber.test(password);
    const isSpecialCharValid = hasSpecialChar.test(password);
    const isStrongPassword =
        isMinLengthValid &&
        isUppercaseValid &&
        isLowercaseValid &&
        isNumberValid &&
        isSpecialCharValid;

    return isStrongPassword;
}