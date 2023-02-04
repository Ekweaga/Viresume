export const Validations = {
    email:[  {
        required: true,
        message: "Please input your email address",
    },
    {
        pattern: /^\S*$/,
        message: "Email id should not contain white spaces",
    },
    {
        pattern: 50,
        message: "Email length must not be more than 50 characters",
    },
    {
        type: "email",
        message: "Please enter email address in format “youremail@example.com”",
    }
],

password:[
    {
        pattern: /^\S*$/,
        message: "Password should not contain white spaces",
    },
    {
        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s)./,
        message:
        "Password must include at least an uppercase letter, a lowercase, a symbol and a digit",
    },
    {
        required: true,
        message: "Please input your password",
    },
    {
        max: 50,
        message: "Password length must not be more than 50 characters",
    },
    {
        min: 8,
        message: "Password must have a minimum length of 8 characters",
    },
    
]
}