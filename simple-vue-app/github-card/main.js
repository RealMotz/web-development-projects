// Github api
// api.github.com/users/RealMotz

Vue.createApp()
.component('github-card', {
    template: '#github-card-template',
    data() {
        return {
            // profilePic: require('/imgs/kristy.png'),
            profilePicture: null,
            name: null,
            description: null
        };
    },
    async created() {
        const response = await axios.get('https://api.github.com/users/RealMotz');
        this.profilePicture = response.data.avatar_url;
        this.name = response.data.name;
        this.description = $`{this.name} is a developer living in {response.data.location}`;
    }
})
.mount('#app');