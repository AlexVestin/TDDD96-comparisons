


<template>
    <button :class="['btn-hover', className]" >{{label}}</button>
</template>

<script>
    export default {
    name: 'Button',
    props: {
        label: String,
        className: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* https://codemyui.com/gradient-buttons-with-glint-on-hover/ */
.btn-hover {
    width: 120px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 6px;
    height: 35px;
    text-align:center;
    border: none;
    border-radius: 10px;
}

.btn-hover.color1 {
    background-image: linear-gradient(to right, #25aae1, #40e495);
    box-shadow: 0 2px 9px 0 rgba(49, 196, 190, 0.75);
}
.btn-hover.color2 {
    background-image: linear-gradient(to right, #f2ce63, #e43603);
    box-shadow: 0 2px 9px 0 rgba(229, 66, 10, 0.75);
}
</style>
