import bcrypt from 'bcrypt';


export const hassPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hassedPassword = await bcrypt.hash(password, saltRounds);
        return hassedPassword;
    } catch (error) {
        console.log(error)
    }
}

// function for comparing

export const comparePassword = async (password, hassedPassword) => {
    return bcrypt.compare(password, hassedPassword);
};


export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}