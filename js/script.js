const {createApp} = Vue;

createApp({
    data(){
        return{
            listMail: [],
        }
    },
    created(){
        this.getEmails();
    },
    methods: {
        getEmails(){
            for (let i = 0; i < 10; i++){
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp)=> {
                        const result = resp.data.response;
                        this.listMail.push(result);
                    
                    })
                }
        }
    },
}).mount("#app");