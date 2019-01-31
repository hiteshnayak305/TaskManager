<template>
    <div id="navbar">
        <nav>
            <div class="nav-wrapper">
                <a href="/" class="brand-logo">Task Manager</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        components: {}
    }
</script>