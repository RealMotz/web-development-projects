// TODO: Organize the code in a better way, using vue best practicess 

let planComponent = {
    template: '#plan-template',
    // props: ['name'],PP
    props: {
        name: String,
        price: Number,
        selected: {type: Boolean, default: false}
    },
    // data() {
    //     return {
    //         selected: false
    //     }
    // },
    methods: {
        select() {
            // this.selected = !this.selected;
            this.$emit('select', this.name)
        }
    },
};

let planListComponent = {
    // template: '<p>{{ message }}</p>',
    template: '#plan-list-template',
    components: { planItem: planComponent },
    data() {
        return {
            plans: ['The Hacker', 'The Curious', 'The Addict'],
            selectedPlan: null,
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan;
        }
    },
};

Vue.createApp({
    components: { 'PlanList': planListComponent }
})
.mount('#app');