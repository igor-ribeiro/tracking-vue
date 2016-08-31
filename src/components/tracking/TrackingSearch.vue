<template>
    <div class="tracking-search">
        <input @keyup.enter="track" v-model="trackingCode" class="tracking-search-field" type="text">
        <input @click="track" class="tracking-search-button" value="Track" type="submit">
    </div>
</template>

<script>
export default {
    props: [
        'trackingCode',
    ],

    methods: {
        track: function () {
            if (! this.trackingCode.trim()) {
                return;
            }

            this.$router.go({ path: `/${this.trackingCode}` });
        }
    },
};
</script>

<style>
.tracking-search {
    display: flex;
    justify-content: center;
}

.tracking-search-field,
.tracking-search-button {
    font-size: 1em;
    font-family: inherit;
    outline: none;
    font-weight: bold;
    border-radius: 3px;
}

.tracking-search-field {
    flex: 1;
    padding: 10px;
    border: 1px solid #b3b3b3;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.tracking-search-field:focus {
    border-color: #4188bb;
}

.tracking-search-button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #4188bb;
    border: none;
    color: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>
