<template>
        <Row>
            <Row v-for="item in items" :key="item.id">
                <i-col span="4">
                    <img v-bind:src="item.course_cover_img" alt="">
                </i-col>
                <i-col span="9" class="course_info">
                    <h3>{{ item.course_name }}</h3>
                    <p>{{ item.course_desc }}</p>
                </i-col>
            </Row>
        </Row>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.courses()
    },
    methods: {
        courses: function () {
            this.axios.get('/api/courses').then((response) => {
                this.items = response.data.data.list
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.course_info{
    margin-left: 20px;
}
</style>
