<template>
    <div>
        <navbar></navbar>
        <pages></pages>
    </div>
</template>

<script>
import Navbar from '../../UI/Navbar.vue';
import Pages from '../../UI/Pages.vue';

export default {
    components: {
        'navbar': Navbar,
        'pages': Pages
    },
    data: () => ({

    })
}
</script>