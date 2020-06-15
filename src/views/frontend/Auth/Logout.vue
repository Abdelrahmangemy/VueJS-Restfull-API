<template>
    <div>
        <h2>Logout Successfully</h2>
    </div>
</template>
<script>
export default {
    created(){
        localStorage.removeItem('AToken');
    }
}
</script>