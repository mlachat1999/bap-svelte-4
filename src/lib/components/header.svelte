<script lang="ts">
    import { Home } from 'lucide-svelte';
</script>

<header class="flex flex-row justify-center my-10 text-2xl font-semibold underline w-[100%]">
    <nav>
        <ul class="flex flex-row items-center gap-20 w-[100%]">
            <li><a href="/"><Home class="w-10 h-10"/></a></li>
            <li><a href="/reactivity">Reactivity</a></li>
            <li><a href="/templating">Templating</a></li>
            <li><a href="/lifecycle">Lifecycle</a></li>
            <li><a href="/components">Components</a></li>
            <li><a href="/forminput">Form Input</a></li>
        </ul>
    </nav>
</header>

