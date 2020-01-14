
const defstate={
    islogin:localStorage.getItem('users'),
    rol:1,
    bool:localStorage.getItem('users'),
    mod:{
        id:null,
        name:'',
        developer:'',
        image:""
    },
    teams:[],
    users:[],
    featur:[],
    layers:[],
    isValid: false,
    edit:false,
    index:null,
    formControls: {
        login: {
            type: 'text',
            value: '',
            touched: false,
            errorMessage: 'Incorrect Login',
            valid: false,
            label: 'Login',
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            type: 'password',
            value: '',
            touched: false,
            errorMessage: 'Incorrect Password',
            valid: false,
            label: 'Password',
            validation: {
                required: true,
                minlength: 6
            }
        }
    }
};
export default function reducer(state=defstate,action) {
    switch (action.type){
        case "USERS":
            return{
                ...state,
                users:action.mem
            };
        case "TEAMS":
            return{
                ...state,
                teams: action.mem
            };
        case "FEATUR":
            return{
                ...state,
                featur:action.mem
            };
        case "FORMCONTROLS":
            return{
                ...state,
                formControls:action.value,
                isValid:action.mem
            };
        case "MODAL":
            return{
                ...state,
                mod:action.value
            };
        case "EDIT":
            return{
                ...state,
                edit:action.bool,
                index:action.value
            };
        case "LAYERS":
            return{
                ...state,
                layers: action.mem
            };
        default:
            return state
    }
}