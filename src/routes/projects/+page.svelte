<script lang="ts">
	import ProjectList from "./ProjectList.svelte";
  	import projects from "./projects.yml";
</script>

<div class="layout-md">
	<h1 class="mt-4 mb-8">Projects</h1>
		<ProjectList data={projects.projects} />
</div>