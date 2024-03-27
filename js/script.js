const {createApp} = Vue;

    createApp({
        data(){
            return {
                message : 'hello',
                image: 'monitor.jpg',
                alt:'monitor',

            }
        },
    }).mount('#app');