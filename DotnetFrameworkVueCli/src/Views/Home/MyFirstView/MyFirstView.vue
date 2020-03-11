<template>
    <div>
        MyFirstView from vue
        <UsersGrid></UsersGrid>
        <UserCardGrid></UserCardGrid>
    </div>
</template>

<script>

import UsersGrid from "../../../components/UsersGrid"
import UserCardGrid from "../../../components/UserCardGrid"

export default {
    components:{
        UsersGrid,
        UserCardGrid
    }
}
</script>