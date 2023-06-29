<template>
    <section class="destination">
        <div>
            <h2>{{ destination.name }}</h2>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" alt="destination.name">
                <p>{{ destination.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import sourceData from '@/data.json';
export default {
    computed: {
        destinationId() {
            return parseInt(this.$route.params.id);
        },

        destination() {
            return sourceData.destinations.find(
                destination => destination.id === this.destinationId
            );
        }
    }
}
</script>