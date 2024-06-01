
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const npm_config_userconfig: string;
	export const SUPERVISOR_GROUP_NAME: string;
	export const COLORTERM: string;
	export const WORKSPACE_SERVICE_ACCOUNT_EMAIL: string;
	export const npm_config_cache: string;
	export const TERM_PROGRAM_VERSION: string;
	export const PKG_CONFIG_PATH: string;
	export const PYTHONNOUSERSITE: string;
	export const NODE: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const MONOSPACE_ENV: string;
	export const npm_config_globalconfig: string;
	export const MONOSPACE_COMMIT_SHA: string;
	export const EDITOR: string;
	export const PWD: string;
	export const NIX_PATH: string;
	export const npm_config_init_module: string;
	export const CUSTOM_ENV_ENABLED: string;
	export const FIREBASE_DEPLOY_AGENT: string;
	export const _: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const WEB_HOST: string;
	export const HOME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const npm_package_version: string;
	export const NIX_SSL_CERT_FILE: string;
	export const GIT_ASKPASS: string;
	export const PROMPT_COMMAND: string;
	export const MONOSPACE_ON_START_COMMANDS: string;
	export const WORKSPACE_SLUG: string;
	export const MONOSPACE_ENV_CFG_HASH: string;
	export const INIT_CWD: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_npm_version: string;
	export const NPM_CONFIG_PREFIX: string;
	export const IDX_CHANNEL: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ACLOCAL_PATH: string;
	export const MONOSPACE_PREVIEW_CONFIG: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TZDIR: string;
	export const NPM_CONFIG_GLOBALCONFIG: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const NIX_CFLAGS_LINK: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const LOCALE_ARCHIVE: string;
	export const npm_config_user_agent: string;
	export const PERMANENT_TAG: string;
	export const npm_execpath: string;
	export const MONOSPACE_ON_CREATE_COMMANDS: string;
	export const LC_CTYPE: string;
	export const SSL_CERT_FILE: string;
	export const npm_package_json: string;
	export const SUPERVISOR_PROCESS_NAME: string;
	export const GOOGLE_CLOUD_WORKSTATIONS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_noproxy: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const IDX_TOKEN_SOCK: string;
	export const npm_config_global_prefix: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_node_execpath: string;
	export const ORIG_IDX_PATH: string;
	export const NIX_LDFLAGS: string;
	export const SUPERVISOR_ENABLED: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		npm_config_userconfig: string;
		SUPERVISOR_GROUP_NAME: string;
		COLORTERM: string;
		WORKSPACE_SERVICE_ACCOUNT_EMAIL: string;
		npm_config_cache: string;
		TERM_PROGRAM_VERSION: string;
		PKG_CONFIG_PATH: string;
		PYTHONNOUSERSITE: string;
		NODE: string;
		COLOR: string;
		npm_config_local_prefix: string;
		MONOSPACE_ENV: string;
		npm_config_globalconfig: string;
		MONOSPACE_COMMIT_SHA: string;
		EDITOR: string;
		PWD: string;
		NIX_PATH: string;
		npm_config_init_module: string;
		CUSTOM_ENV_ENABLED: string;
		FIREBASE_DEPLOY_AGENT: string;
		_: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		WEB_HOST: string;
		HOME: string;
		LANG: string;
		LS_COLORS: string;
		npm_package_version: string;
		NIX_SSL_CERT_FILE: string;
		GIT_ASKPASS: string;
		PROMPT_COMMAND: string;
		MONOSPACE_ON_START_COMMANDS: string;
		WORKSPACE_SLUG: string;
		MONOSPACE_ENV_CFG_HASH: string;
		INIT_CWD: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_npm_version: string;
		NPM_CONFIG_PREFIX: string;
		IDX_CHANNEL: string;
		TERM: string;
		npm_package_name: string;
		ACLOCAL_PATH: string;
		MONOSPACE_PREVIEW_CONFIG: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TZDIR: string;
		NPM_CONFIG_GLOBALCONFIG: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		NIX_CFLAGS_LINK: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NIX_CFLAGS_COMPILE: string;
		LOCALE_ARCHIVE: string;
		npm_config_user_agent: string;
		PERMANENT_TAG: string;
		npm_execpath: string;
		MONOSPACE_ON_CREATE_COMMANDS: string;
		LC_CTYPE: string;
		SSL_CERT_FILE: string;
		npm_package_json: string;
		SUPERVISOR_PROCESS_NAME: string;
		GOOGLE_CLOUD_WORKSTATIONS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		npm_config_noproxy: string;
		BROWSER: string;
		PATH: string;
		npm_config_node_gyp: string;
		IDX_TOKEN_SOCK: string;
		npm_config_global_prefix: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_node_execpath: string;
		ORIG_IDX_PATH: string;
		NIX_LDFLAGS: string;
		SUPERVISOR_ENABLED: string;
		TERM_PROGRAM: string;
		VSCODE_IPC_HOOK_CLI: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
