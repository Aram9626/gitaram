import axios from 'axios'
export const parametrs={
    getusers:function(){
        return axios.get('http://localhost:3001/users')
            .then(res=>{
                return res.data
            })
    },
    getteams:function(){
        return axios.get('http://localhost:3001/team')
        .then(res=>{
            return res.data
        })
    },
    getteam:function (id) {
        return axios.get('http://localhost:3001/team')
        .then(res=>{
           return res.data.filter((team)=>{
                return team.id===id
            })
        }).then((filtered) => filtered[0])
    },
    getfeatures:function(){
        return axios.get('http://localhost:3001/features')
        .then(res=>{
            return res.data
        })
    },
    deluser:function(id){
        return axios.delete('http://localhost:3001/users/'+id)
    },
    getlayers:function(){
        return axios.get('http://localhost:3001/layers')
        .then(res=>{
            return res.data
        })
    },
};