import { sveltekit } from '@sveltejs/kit/vite';
import pluginYaml from "@rollup/plugin-yaml";
import yaml from "js-yaml";
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), pluginYaml() as any]
});
