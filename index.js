const Portfolio = Vue.createApp({
    data(){
        return{
            currentTab:'profile',
            tabs:['profile','skills','other']
        }
    },
    computed: {
        currentTabComponent(){
            return 'my-' + this.currentTab
        }
    }
});

Portfolio.component('my-profile',{
    template:`
    <div>Profile</div>
    `
})

Portfolio.component('my-skills',{
    template:`
    <div>skills</div>
    `
})

Portfolio.component('my-other',{
    template:`
    <div>others</div>
    `
})

Portfolio.mount('#portfolio')