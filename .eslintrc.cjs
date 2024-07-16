/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        node: true,
        es2022: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:astro/recommended', "plugin:svelte/recommended"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-mixed-spaces-and-tabs': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        'no-unused-vars': 'off',
    },
    // settings: {
    //     react: {
    //         pragma: 'h',
    //         version: '16.0',
    //     },
    // },
    overrides: [
        {
            files: ["*.astro"],
            plugins: ["astro"],
            env: {
                // Enables global variables available in Astro components.
                node: true,
                "astro/astro": true,
                es2020: true,
            },
            processor: "astro/client-side-ts",
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
                // The script of Astro components uses ESM.
                sourceType: "module",
            },
            rules: {
                // override/add rules settings here, such as:
                "astro/no-set-html-directive": "error",
                "astro/no-conflict-set-directives": "error",
                "astro/no-unused-define-vars-in-style": "error",
            }
        },
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                project: ["./tsconfig.json"],
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {},
        },
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            },
        },
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
                ],
                '@typescript-eslint/no-non-null-assertion': 'off',
            },
        },
        {
            files: ['*.d.ts'],
            rules: {
                '@typescript-eslint/triple-slash-reference': 'off',
            },
        },
        {
            // Define the configuration for `<script>` tag.
            // Script in `<script>` is assigned a virtual file name with the `.js` extension.
            files: ["**/*.astro/*.js", "*.astro/*.js"],
            env: {
                browser: true,
                es2020: true,
            },
            parserOptions: {
                sourceType: "module",
            },
            rules: {
                // override/add rules settings here, such as:
                // "no-unused-vars": "error"

                // If you are using "prettier/prettier" rule,
                // you don't need to format inside <script> as it will be formatted as a `.astro` file.
                "prettier/prettier": "off",
            },
        },
        // {
        //     // Define the configuration for `<script>` tag when using `client-side-ts` processor.
        //     // Script in `<script>` is assigned a virtual file name with the `.ts` extension.
        //     files: ["**/*.astro/*.ts", "*.astro/*.ts"],
        //     env: {
        //         browser: true,
        //         es2020: true,
        //     },
        //     parser: "@typescript-eslint/parser",
        //     parserOptions: {
        //         sourceType: "module",
        //         project: null,
        //     },
        //     rules: {
        //         // override/add rules settings here, such as:
        //         // "no-unused-vars": "error"

        //         // If you are using "prettier/prettier" rule,
        //         // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        //         // "prettier/prettier": "off",
        //     },
        // },
        // {
        //     files: ['*.tsx'],
        //     parser: '@typescript-eslint/parser',
        //     plugins: ['react', '@typescript-eslint'],
        //     parserOptions: {
        //         tsconfigRootDir: __dirname,
        //         project: ['./tsconfig.json'],
        //     },
        //     extends: [
        //         'eslint:recommended',
        //         'plugin:react/recommended',
        //         'plugin:react/jsx-runtime',
        //         'plugin:@typescript-eslint/recommended',
        //         'plugin:@typescript-eslint/recommended-requiring-type-checking',
        //     ],
        //     rules: {
        //         '@typescript-eslint/no-unused-vars': [
        //             'error',
        //             { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        //         ],
        //         '@typescript-eslint/no-non-null-assertion': 'off',
        //     },
        // },
        // {
        //     // Define the configuration for `<script>` tag.
        //     // Script in `<script>` is assigned a virtual file name with the `.js` extension.
        //     files: ['**/*.astro/*.js', '*.astro/*.js'],
        //     parser: '@typescript-eslint/parser',
        // },
    ],
};