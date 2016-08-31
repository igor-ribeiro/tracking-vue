<template>
    <table v-show="trackingInfo.length" class="tracking-table">
        <thead class="tracking-table-header">
            <tr>
                <th colspan="2">Tracking Code: {{ $route.params.trackingCode }}</th>
            </tr>
            <tr>
                <th>Date</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody class="tracking-table-body">
            <tr v-for="info in trackingInfo">
                <td>{{ info.dateTime }}</td>
                <td>{{ info.description }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: [
        'trackingInfo',
    ],
};
</script>

<style scoped>
.tracking-table {
    border-collapse: collapse;
}

.tracking-table td,
.tracking-table th {
    border-bottom: 1px solid #b3b3b3;
    padding: 5px;
}

.tracking-table-header {
    background-color: #e6e6e6;
    color: #444;
}

.tracking-table-body {
    color: #555;
}
</style>
