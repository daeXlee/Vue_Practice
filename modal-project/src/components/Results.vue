<template>
  <p>Reaction Time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'God Tier'
        } else if (this.score < 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'You slow as hell'
        }
    }
}
</script>

<style>
    .rank {
        font-size: 1.4em;
        color: cyan;
        font-weight: bold;
    }
</style>